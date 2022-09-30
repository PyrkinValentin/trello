class Storage {
	#removeVisibilitychange = undefined

	storage(state) {
		if (this.#removeVisibilitychange) this.#removeVisibilitychange()

		const callback = () => {
			window.localStorage.setItem('todos', JSON.stringify(state))
		}

		window.addEventListener('visibilitychange', callback)

		this.#removeVisibilitychange = () => window.removeEventListener('visibilitychange', callback)
	}
}

export default Storage