const getRef = (initialState = null) => {
	const ref = selector => ref.current = selector || initialState
	return ref
}

export default getRef