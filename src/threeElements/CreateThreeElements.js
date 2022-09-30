class CreateThreeElements {
	constructor() {
		this._selectors = {}
	}

	set(id, selector) {
		this._selectors[id] = selector
	}

	get(id) {
		return id ? this._selectors[id] : this._selectors
	}

	remove(id) {
		if (id) {
			this._selectors[id].remove()
			delete this._selectors[id]
		}

		if (!id) {
			for (const selector of Object.values(this._selectors)) {
				selector.remove()
			}

			this._selectors = {}
		}
	}
}

export default CreateThreeElements