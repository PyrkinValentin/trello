import renderDOM from "../../utils/renderDOM"
import {button, div, h2, img} from "../../utils/createTags"
import Card from "../card/Card"
import Dialog from "../dialog/Dialog"
import getRef from "../../utils/getRef"
import equalObjects from "../../utils/equalObjects"

import {todoListObserver} from "../../observer/rootObserver"
import {threeElements} from "../../threeElements/rootThreeElements"

import styles from "./Columns.module.scss"
import plusImg from "../../assets/img/plus.svg"

const ColumnTodo = () => {
	const todosRef = getRef(null)
	const counterRef = getRef(null)

	todoListObserver.subscribe((prevState, state, type) => {
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
				const oldNode = threeElements.get(todo.id)

				todosRef.current.replaceChild(
					Card(todo),
					oldNode
				)
			}
		}
	})

	const handleNewTodo = () => {
		renderDOM(
			Dialog
		)
	}

	return (
		div({ class: styles.container },
			div({ class: styles.header },
				h2({ class: styles.title },
					'Todo list'
				),

				div({ ref: counterRef, class: styles.counter },
					0
				)
			),

			div({ ref: todosRef, class: styles.items }),

			button({ type: 'button', class: [styles.addTodoBtn, '_ripple'].join(' '), onClick: handleNewTodo },
				img({ src: plusImg, alt: 'new todo' }),
				'New todo'
			)
		)
	)
}

export default ColumnTodo