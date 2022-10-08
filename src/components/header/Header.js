import {header, a, div, time} from "../../utils/createTags"
import getRef from "../../utils/getRef"

import {TIME_CHAR} from "../../variables/time"
import styles from "./Header.module.scss"

const Header = () => {
	const ref = getRef(null)
	let timeIndicator = false

	setInterval(() => {
		const currentDatetime = new Date()
		const hours = ('0' + currentDatetime.getHours()).slice(-2)
		const minutes = ('0' + currentDatetime.getMinutes()).slice(-2)

		timeIndicator = !timeIndicator

		const separator = timeIndicator ? TIME_CHAR : ' '

		ref.current.innerText = `${hours}${separator}${minutes}`
	}, 1000)

	return (
		header({ class: styles.container },
			a({ href: '/' },
				div({ class: styles.logo })
			),

			time({ ref, class: styles.time },
				'--:--'
			)
		)
	)
}

export default Header