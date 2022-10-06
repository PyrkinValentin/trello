class Store {
	constructor() {
		this._state = {}
	}

	get state () {
		return this._state
	}

	set state (state) {
		this._state = {...this._state, ...state}
	}

	clear() {
		this._state = {}
	}
}

export default Store