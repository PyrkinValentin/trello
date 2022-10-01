import Storage from "../utils/Storage"

const initialState = JSON.parse(window.localStorage.getItem('todos')) || []

class Observable extends Storage {
	#observers = []
	#prevState = initialState
	#state = initialState

	constructor() {
		super()
	}

	set state(state) {
		this.#state = [...this.#state, state]
		this.updateState('set')
	}

	get state() {
		return this.#state
	}

	updateState(type) {
		this.broadcast(type)
		this.storage(this.#state)
		this.#prevState = this.#state
	}

	removeState(removeId) {
		if (removeId) {
			this.#state = this.#state.filter(todo => todo.id !== removeId)
		}

		if (!removeId) {
			this.#state = []
		}

		this.updateState('remove')
	}

	subscribe(observer) {
		this.#observers.push(observer)
	}

	unsubscribe(newObserver) {
		this.#observers = this.#observers.filter(observer => observer !== newObserver)
	}

	broadcast(type) {
		this.#observers.forEach(observer => observer(this.#prevState, this.#state, type))
	}
}

export default Observable