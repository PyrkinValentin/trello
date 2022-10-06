const clickOutSide = (selector, callback) => {
	const handleClickOutSide = e => {
		if (selector && !selector.contains(e.target)) {
			callback(e)
			document.removeEventListener('click', handleClickOutSide)
		}
	}

	document.addEventListener('click', handleClickOutSide)
}

export default clickOutSide