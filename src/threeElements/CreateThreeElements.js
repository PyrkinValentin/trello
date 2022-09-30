class CreateThreeElements {
	#selectors = {}

	set(id, selector) {
		this.#selectors[id] = selector
	}

	get(id) {
		return id ? this.#selectors[id] : this.#selectors
	}

	remove(id) {
		if (id) {
			this.#selectors[id].remove()
			delete this.#selectors[id]
		}

		if (!id) {
			for (const selector of Object.values(this.#selectors)) {
				selector.remove()
			}

			this.#selectors = {}
		}
	}
}

export default CreateThreeElements