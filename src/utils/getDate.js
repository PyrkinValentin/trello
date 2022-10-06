import {months, daysOfWeek} from "../variables/date"

const getDate = () => {
	const date = new Date()
	const year = date.getFullYear()
	const month = date.getMonth()
	const number = date.getDate()
	const dayOfWeek = date.getDay()

	return `${daysOfWeek[dayOfWeek]}, ${number} ${months[month]}, ${year}`
}

export default getDate