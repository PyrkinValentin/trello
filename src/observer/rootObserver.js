import Observable from "./Observable"

const todoListObserver = new Observable()
const inProgressObserver = new Observable()
const doneObserver = new Observable()

export {
	todoListObserver,
	inProgressObserver,
	doneObserver,
}