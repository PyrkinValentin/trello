import {section} from "../../utils/createTags"

import styles from "./Section.module.scss"

const Section = (...components) => {
	return (
		section({ class: styles.container },
			...components
		)
	)
}

export default Section