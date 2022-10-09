import {button, div, h2, img} from "../../utils/createTags"
import getRef from "../../utils/getRef"
import equalObjects from "../../utils/equalObjects"
import renderDOM from "../../utils/renderDOM"
import WarningPopup from "../warningPopUp/warningPopUp"

import Card from "../card/Card"

import {doneObserver} from "../../observer/rootObserver"
import {treeElements} from "../../threeElements/rootTreeElements"

import styles from "./Columns.module.scss"

import removeAllImg from "../../assets/img/remove-all.svg"


const ColumnDone = () => {
	const todosRef = getRef(null)
	const counterRef = getRef(null)

	doneObserver.subscribe((prevState, state, type) => {
		if (type !== 'update') {
			counterRef.current.innerText = state.length

			const newTodos = state
				.filter(todo => !prevState.find(prev => prev.id === todo.id))
				.map(todo => Card(todo))

			todosRef.current.append(...newTodos)
		}

		if (type === 'update') {
			const todo = state.find((todo, i) => !equalObjects(prevState[i], todo))

			if (todo) {
				const oldNode = treeElements.get(todo.id)

				todosRef.current.replaceChild(
					Card(todo),
					oldNode
				)
			}
		}
	})

	const handleRemoveAll = () => {
		renderDOM (
			WarningPopup ('Are you sure you want to remove all items?', 'forRemove')
		)
	}

	return (
		div({ class: styles.container },
			div({ class: styles.header },
				h2({ class: styles.title },
					'Done'
				),

				div({ ref: counterRef, class: styles.counter },
					0
				)
			),

			div({ ref: todosRef, class: styles.items }),

			button({ type: 'button', class: [styles.addTodoBtn, '_ripple'].join(' '), onClick: handleRemoveAll },
				img({ src: removeAllImg, alt: 'new todo' }),
				'Remove all'
			)
		)
	)
}

export default ColumnDone