import api from "../../api/api"
import {doneObserver} from "../../observer/rootObserver"

import {button, div, img, label, span} from "../../utils/createTags"
import getRef from "../../utils/getRef"

import styles from "./warningPopUP.module.scss"

import closeImg from "../../assets/img/remove-gray.svg"

const WarningPopUp = (textMessage, state) => {
	const containerRef = getRef(null);
	const dialogRef = getRef(null);
	const titleRef = getRef(null);
	let CancelBtn = '';

	const handleClose = () => {
		containerRef.current.remove()
	};

	if (state !== 'default') {
		CancelBtn = button({ type: 'button', class: 'cancel-button _ripple', onClick: handleClose }, 'Cancel')
	}

	const handleConfirm = () => { // Mock API разрешает удалять только по 5 позиций. Если дать запрос на удаление 6-и позиций, вернет на все промимсы статус 200 (успешно). Но в итоге удаляет только 5.
		containerRef.current.remove();

		const doneTaskPromises = doneObserver.state.map(doneTask => {
			return api.delete('todos/' + doneTask.id)
		});

		doneObserver.remove();

		Promise.all(doneTaskPromises).then(results => {
			const badRequests = results.filter(result => result.status !== 200)
			badRequests.forEach(todo => doneObserver.state = todo)
		});
	}

	return (
		div({ ref: containerRef, class: styles.container },
			div({ ref: dialogRef, class: styles.dialog },
				button({ class: styles.close, onClick: handleClose },
					img({ src: closeImg, alt: 'Close dialog' })
				),

				label({},
					span({ class: styles.title },
						'Warning'
					),

					label ({ref: titleRef, class: styles.explanation},
						textMessage
					)
				),

				div({ class: styles.groupButtons },
					CancelBtn,
					button({ type: 'button', class: 'confirm-button _ripple', onClick: handleConfirm},
						'Confirm'
					)
				)
			)
		)
	);
};


export default WarningPopUp
