import {button, img, div} from "../../utils/createTags"

import users from "../../variables/users"
import styles from "./Card.module.scss"

import removeImg from "../../assets/img/remove.svg"

const Card = ({ id, title, userId, date }) => {
	const user = users.find(user => user.id === +userId)

	return (
		div({ key: id, class: styles.container, draggable: true },
			div({ class: styles.header },
				div({ class: styles.title },
					title
				)
			),

			div({ class: styles.info },
				div({ class: styles.wrapper },
					`${user.name}, ${date}`,

					button({ type: 'button', class: styles.remove },
						img({ src: removeImg, alt: 'Remove this' })
					)
				)
			)
		)
	)
}

export default Card