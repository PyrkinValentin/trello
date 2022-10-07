import renderDOM from "../../utils/renderDOM"
import {button, img, div} from "../../utils/createTags"

import Dialog from "../dialog/Dialog"

import {todoListObserver} from "../../observer/rootObserver"
import users from "../../variables/users"
import styles from "./Card.module.scss"

import removeImg from "../../assets/img/remove.svg"

const Card = (props) => {
	const user = users.find(user => user.id === +props.userId)

	const handleShowInfo = () => {
		renderDOM(
			Dialog(props)
		)
	}

	const handleRemove = () => {
		todoListObserver.remove(props.id)
	}

	return (
		div({ key: props.id, class: styles.container, draggable: true },
			div({ class: styles.header, onClick: handleShowInfo },
				div({ class: styles.title },
					props.title
				)
			),

			div({ class: styles.info },
				div({ class: styles.wrapper },
					`${user.name}, ${props.date}`,

					button({ type: 'button', class: styles.remove, onClick: handleRemove },
						img({ src: removeImg, alt: 'Remove this' })
					)
				)
			)
		)
	)
}

export default Card