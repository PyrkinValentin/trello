import api from "../api/api"
import {usersObserver, todoListObserver, inProgressObserver, doneObserver} from "./rootObserver"

api.get('users').then(r => {
	usersObserver.init(r)
})

api.get('todos').then(r => {
	const wait = []
	const work = []
	const done = []

	r.forEach(todo => {
		if (todo.progress === 'wait') wait.push(todo)
		if (todo.progress === 'work') work.push(todo)
		if (todo.progress === 'done') done.push(todo)
	})

	todoListObserver.init(wait)
	inProgressObserver.init(work)
	doneObserver.init(done)
})