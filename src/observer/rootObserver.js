import Observable from "./Observable"
import "./initObserver"

const usersObserver = new Observable([])
const todoListObserver = new Observable([])
const inProgressObserver = new Observable([])
const doneObserver = new Observable([])

export {
	usersObserver,
	todoListObserver,
	inProgressObserver,
	doneObserver,
}