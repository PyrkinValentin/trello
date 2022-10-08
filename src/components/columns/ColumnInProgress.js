import {div, h2} from "../../utils/createTags"
import getRef from "../../utils/getRef"
import equalObjects from "../../utils/equalObjects"

import Card from "../card/Card"

import {inProgressObserver} from "../../observer/rootObserver"
import {threeElements} from "../../threeElements/rootThreeElements"

import styles from "./Columns.module.scss"

const ColumnInProgress = () => {
	const todosRef = getRef(null)
	const counterRef = getRef(null)

	inProgressObserver.subscribe((prevState, state, type) => {
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

	return (
		div({ class: styles.container },
			div({ class: styles.header },
				h2({ class: styles.title },
					'In progress'
				),

				div({ ref: counterRef, class: styles.counter },
					0
				)
			),

			div({ ref: todosRef, class: styles.items })
		)
	)
}

export default ColumnInProgress