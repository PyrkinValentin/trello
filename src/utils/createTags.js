import events from "../variables/events"

const handleTag = (selector, attrs = {}, children = []) => {
	for (const [key, value] of Object.entries(attrs)) {
		const checkEventProperty = events.hasOwnProperty(key)

		if (checkEventProperty) {
			events[key](selector, value)
		}

		if (!checkEventProperty && value) {
			selector.setAttribute(key, value)
		}
	}

	children.forEach(child =>
		selector.append(
			typeof child === 'function'
				? child()
				: child
		)
	)

	return selector
}

const newTag = tag => document.createElement(tag)

const header = (attrs, ...children) => (
	handleTag(
		newTag('header'),
		attrs,
		children,
	)
)

const a = (attrs, ...children) => (
	handleTag(
		newTag('a'),
		attrs,
		children,
	)
)

const div = (attrs, ...children) => (
	handleTag(
		newTag('div'),
		attrs,
		children,
	)
)

const time = (attrs, ...children) => (
	handleTag(
		newTag('time'),
		attrs,
		children,
	)
)

const button = (attrs, ...children) => (
	handleTag(
		newTag('button'),
		attrs,
		children,
	)
)

const img = (attrs) => (
	handleTag(
		newTag('img'),
		attrs,
	)
)

const section = (attrs, ...children) => (
	handleTag(
		newTag('section'),
		attrs,
		children,
	)
)

const h2 = (attrs, ...children) => (
	handleTag(
		newTag('h2'),
		attrs,
		children,
	)
)

const label = (attrs, ...children) => (
	handleTag(
		newTag('label'),
		attrs,
		children,
	)
)

const input = (attrs) => (
	handleTag(
		newTag('input'),
		attrs,
	)
)

const select = (attrs, ...children) => (
	handleTag(
		newTag('select'),
		attrs,
		children,
	)
)

const option = (attrs, ...children) => (
	handleTag(
		newTag('option'),
		attrs,
		children,
	)
)

const textarea = (attrs, ...children) => (
	handleTag(
		newTag('textarea'),
		attrs,
		children,
	)
)

const span = (attrs, ...children) => (
	handleTag(
		newTag('span'),
		attrs,
		children,
	)
)

export {header, a, div, time, button, img, section, h2, label, input, select, option, textarea, span}