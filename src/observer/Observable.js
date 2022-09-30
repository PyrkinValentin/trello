import Storage from "../utils/Storage"

const initialState = JSON.parse(window.localStorage.getItem('todos')) || []

class Observable extends Storage {
	constructor() {
		super()

		this.observers = []
		this._prevState = initialState
		this._state = initialState
	}

	set state(state) {
		this._state = [...this._state, state]
		this.updateState('set')
	}

	get state() {
		return this._state
	}

	updateState(type) {
		this.broadcast(type)
		this.storage(this._state)
		this._prevState = this._state
	}

	removeState(removeId) {
		if (removeId) {
			this._state = this._state.filter(todo => todo.id !== removeId)
		}

		if (!removeId) {
			this._state = []
		}

		this.updateState('remove')
	}

	subscribe(observer) {
		this.observers.push(observer)
	}

	unsubscribe(newObserver) {
		this.observers = this.observers.filter(observer => observer !== newObserver)
	}

	broadcast(type) {
		this.observers.forEach(observer => observer(this._prevState, this._state, type))
	}
}

export default Observable