const equalObjects = (obj1, obj2) => {
	if (obj1 === obj2) return true

	const keysObj1 = Object.keys(obj1)
	const keysObj2 = Object.keys(obj2)

	if (keysObj1.length !== keysObj2.length) return false

	for (let key in obj1) {
		if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
			return false
		}
	}

	return true
}

export default equalObjects