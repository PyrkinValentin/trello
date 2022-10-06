import {div, h2} from "../../utils/createTags"

import Card from "../card/Card"

import styles from "./Columns.module.scss"

const ColumnInProgress = () => {
	return (
		div({ class: styles.container },
			div({ class: styles.header },
				h2({ class: styles.title },
					'In progress'
				),

				div({ class: styles.counter },
					'2'
				)
			),

			div({ class: styles.items },
				//Card,
				//Card,
			)
		)
	)
}

export default ColumnInProgress