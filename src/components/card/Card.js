import api from "../../api/api"

import renderDOM from "../../utils/renderDOM"
import {button, img, div} from "../../utils/createTags"

import Dialog from "../dialog/Dialog"

import {todoListObserver} from "../../observer/rootObserver"
import styles from "./Card.module.scss"

import removeImg from "../../assets/img/remove.svg"

const Card = (props) => {
	const { id, title, username, date } = props || {}

	const handleShowInfo = () => {
		renderDOM(
			Dialog(props)
		)
	}

	const handleRemove = () => {
		todoListObserver.remove(id)

		api(`todos/${id}`, 'DELETE')
	}

	return (
		div({ key: id, class: styles.container, draggable: true },
			div({ class: styles.header, onClick: handleShowInfo },
				div({ class: styles.title },
					title
				)
			),

			div({ class: styles.info },
				div({ class: styles.wrapper },
					`${username && !username.startsWith('username') ? username : 'No contributor'}, ${date}`, // undefined mockapi не принимает. Возвращает предыдущее значение. Приходится костыли такие делать !username.startsWith('username')...

					button({ type: 'button', class: styles.remove, onClick: handleRemove },
						img({ src: removeImg, alt: 'Remove this' })
					)
				)
			)
		)
	)
}

export default Card