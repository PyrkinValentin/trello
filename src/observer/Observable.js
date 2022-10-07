import {threeElements} from "../threeElements/rootThreeElements"

class Observable {
	#observers = []
	#prevState = null
	#state = null
	#initialState = null

	constructor(initialState) {
		this.#initialState = initialState
		this.#state = initialState
		this.#prevState = initialState
	}

	init(state) {
		this.#state = [...this.#state, ...state]
		this.#action('init')
	}

	set state(state) {
		this.#state = [...this.#state, state]
		this.#action('set')
	}

	get state() {
		return this.#state
	}

	update(state) {
		const index = this.#state.findIndex(todo => todo.id === state.id)

		this.#prevState = [...this.#state]
		this.#state[index] = state

		this.#action('update')
	}

	#action(type) {
		this.broadcast(type)
		this.#prevState = this.#state
	}

	remove(removeId) {
		if (removeId) {
			this.#state = this.#state.filter(todo => todo.id !== removeId)
			threeElements.remove(removeId)
		}

		if (!removeId) {
			this.#state = this.#initialState
		}

		this.#action('remove')
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