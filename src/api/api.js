const URL_API = 'https://634008aad1fcddf69caf8231.mockapi.io/'

const api = async (endpoint, method, body, options) => {
	const res = await fetch(URL_API + endpoint, {
		method: method,
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(body),
		...options
	})

	return await res.json()
}

export default api