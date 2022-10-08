const rootElement = document.getElementById('root')

const renderDOM = (...components) => {
	components.forEach(component => {
		rootElement.append(
			typeof component === 'function'
				? component()
				: component
		)
	})
}

export default renderDOM