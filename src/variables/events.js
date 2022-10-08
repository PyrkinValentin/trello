import {threeElements} from "../threeElements/rootThreeElements"

const events = {
	ref(selector, value) {
		value(selector)
	},

	key(selector, value) {
		threeElements.set(value, selector)
	},

	onClick(selector, value) {
		selector.addEventListener('click', e => value(e, selector))
	},

	onChange(selector, value) {
		selector.addEventListener('input', e => {
			selector.setAttribute('value', e.target.value)
			value(e, selector)
		})
	},
}

export default events