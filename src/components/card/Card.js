import renderDOM from "../../utils/renderDOM"
import {button, img, div} from "../../utils/createTags"


import Dialog from "../dialog/Dialog"
import WarnigPopup from "../warnigPopUp/waringPopUp"

import api from "../../api/api"
import {todoListObserver, inProgressObserver, doneObserver} from "../../observer/rootObserver"

import styles from "./Card.module.scss"

import prevImg from "../../assets/img/prev.svg"
import nextImg from "../../assets/img/next.svg"
import removeImg from "../../assets/img/remove.svg"

const Card = (props) => {
	const { id, title, username, date, progress } = props || {}

	const handleShowInfo = () => {
		renderDOM(
			Dialog(props)
		)
	}

	const handlePrev = () => {
		props.progress = 'wait'
		inProgressObserver.remove(id)
		todoListObserver.state = props

		api.put(`todos/${id}`, props)
	}

	const handleNext = () => {
		if (progress === 'wait') {
			if (inProgressObserver.state.length >= 6) {
				renderDOM (
					WarnigPopup("You cannot add more tnan 6 tasks to complete!", "default")
				)
				return
			}

			props.progress = 'work'
			todoListObserver.remove(id)
			inProgressObserver.state = props
		}

		if (progress === 'work') {
			props.progress = 'done'
			inProgressObserver.remove(id)
			doneObserver.state = props
		}

		api.put(`todos/${id}`, props)
	}

	const handleRemove = () => {
		if (progress === 'wait') todoListObserver.remove(id)
		if (progress === 'work') inProgressObserver.remove(id)
		if (progress === 'done') doneObserver.remove(id)

		api.delete(`todos/${id}`)
	}

	let buttonsGroup

	if (progress === 'wait') {
		buttonsGroup = [
			button({ type: 'button', class: styles.btn, onClick: handleNext },
				img({ src: nextImg, alt: 'Next this' })
			),

			button({ type: 'button', class: styles.btn, onClick: handleRemove },
				img({ src: removeImg, alt: 'Remove this' })
			)
		]
	}

	if (progress === 'work') {
		buttonsGroup = [
			button({ type: 'button', class: styles.btn, onClick: handlePrev },
				img({ src: prevImg, alt: 'Prev this' })
			),

			button({ type: 'button', class: styles.btn, onClick: handleNext },
				img({ src: nextImg, alt: 'Next this' })
			),
		]
	}

	if (progress === 'done') {
		buttonsGroup = [
			button({ type: 'button', class: styles.btn, onClick: handleRemove },
				img({ src: removeImg, alt: 'Remove this' })
			)
		]
	}

	return (
		div({ key: id, class: styles.container },
			div({ class: styles.header, onClick: handleShowInfo },
				div({ class: styles.title },
					title
				)
			),

			div({ class: styles.info },
				div({ class: styles.wrapper },
					div({},
						div({},
							`${username && !username.startsWith('username') ? username : 'No contributor'}`
						),

						div({ class: styles.data },
							date
						)
					),

					div({ class: styles.group },
						...buttonsGroup
					)
				)
			)
		)
	)
}

export default Card