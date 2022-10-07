import {button, div, h2, img} from "../../utils/createTags"

import Card from "../card/Card"

import styles from "./Columns.module.scss"

import removeAllImg from "../../assets/img/remove-all.svg"
import {todoListObserver} from "../../observer/rootObserver"
import {doneObserver} from "../../observer/rootObserver"

const ColumnDone = () => {
	const handleRemoveAll = () => {
		//doneObserver.remove()
	}

	return (
		div({ class: styles.container },
			div({ class: styles.header },
				h2({ class: styles.title },
					'Done'
				),

				div({ class: styles.counter },
					'8'
				)
			),

			div({ class: styles.items },
				//...todoListObserver.state.map(todo => Card(todo))
			),

			button({ type: 'button', class: [styles.addTodoBtn, '_ripple'].join(' '), onClick: handleRemoveAll },
				img({ src: removeAllImg, alt: 'new todo' }),
				'Remove all'
			)
		)
	)
}

export default ColumnDone