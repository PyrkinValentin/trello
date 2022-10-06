import {newTodoStore} from "../../store/rootStore"
import {todoListObserver} from "../../observer/rootObserver"
import users from "../../variables/users"

import createId from "../../utils/createId"
import getDate from "../../utils/getDate"
import {button, div, img, input, select, textarea, option, label, span} from "../../utils/createTags"
import clickOutSide from "../../utils/clickOutSide"
import getRef from "../../utils/getRef"

import styles from "./Dialog.module.scss"

import closeImg from "../../assets/img/remove-gray.svg"
import titleImg from "../../assets/img/title.svg"
import descriptionImg from "../../assets/img/description-add.svg"
import userImg from "../../assets/img/user.svg"

const warning = (selector) => {
	selector.focus()
	selector.classList.add(styles.warning)
	setTimeout(() => selector.classList.remove(styles.warning), 200)
}

const Dialog = (params) => {
	const { title = '', description = '', userId } = params || {}

	const containerRef = getRef(null)
	const dialogRef = getRef(null)
	const titleRef = getRef(null)
	const descriptionRef = getRef(null)
	const selectUserRef = getRef(null)

	const handleTitleChange = e => {
		newTodoStore.state = {
			title: e.target.value
		}
	}

	const handleDescriptionChange = e => {
		newTodoStore.state = {
			description: e.target.value
		}
	}

	const handleUserChange = (e) => {
		newTodoStore.state = {
			userId: e.target.value
		}
	}

	const handleCancel = () => {
		containerRef.current.remove()
		newTodoStore.clear()
	}

	const handleCreate = () => {
		if (!newTodoStore.state.title) {
			warning(titleRef.current)
			return
		}

		if (!newTodoStore.state.description) {
			warning(descriptionRef.current)
			return
		}

		if (!newTodoStore.state.userId) {
			warning(selectUserRef.current)
			return
		}

		newTodoStore.state = {
			id: createId(),
			date: getDate(),
		}

		todoListObserver.state = newTodoStore.state
		handleCancel()
	}

	setTimeout(() => {
		clickOutSide(dialogRef.current, handleCancel)
	}, 0)

	return (
		div({ ref: containerRef, class: styles.container },
			div({ ref: dialogRef, class: styles.dialog },
				button({ class: styles.close, onClick: handleCancel },
					img({ src: closeImg, alt: 'Close dialog' })
				),

				label({},
					span({ class: styles.title },
						img({ src: titleImg, alt: 'title' }),
						'Title'
					),

					input({ ref: titleRef, type: 'text', value: title, placeholder: 'Enter title...', class: styles.titleInput, onChange: handleTitleChange })
				),

				label({},
					span({ class: styles.description },
						img({ src: descriptionImg, alt: 'title' }),
						'Description'
					),

					textarea({ ref: descriptionRef, type: 'text', placeholder: 'Enter description...', class: styles.descriptionTextarea, onChange: handleDescriptionChange },
						description
					)
				),

				div({},
					div({ class: styles.responsible },
						img({ src: userImg, alt: 'title' }),
						'Responsible'
					),

					select({ ref: selectUserRef, class: styles.users, onChange: handleUserChange },
						option({ value: 0 },
							'Select user'
						),
						...users.map(user => {
							return option({ value: user.id, selected: user.id === userId },
								user.name
							)
						})
					)
				),

				div({ class: styles.groupButtons },
					button({ type: 'button', class: 'cancel-button _ripple', onClick: handleCancel },
						'Cancel'
					),

					button({ type: 'button', class: 'confirm-button _ripple', onClick: handleCreate },
						'Create'
					)
				)
			)
		)
	)
}

export default Dialog