class Store {
	#initialState = null
	#state = null

	constructor(initialState) {
		this.#initialState = initialState
		this.#state = this.#initialState
	}

	get state () {
		return this.#state
	}

	set state (state) {
		this.#state = state
	}

	clear() {
		this.#state = this.#initialState
	}
}

export default Store