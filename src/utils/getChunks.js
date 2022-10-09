const getChunks = (array, chunks) => {
	const length = Math.ceil(array.length / chunks)
	return Array.from({ length }, () => [...array.splice(0, chunks)])
}

export default getChunks