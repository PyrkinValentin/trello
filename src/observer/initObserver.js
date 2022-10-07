import api from "../api/api"
import {todoListObserver, usersObserver} from "./rootObserver"

api('users').then(r => {
	usersObserver.init(r)
})

api('todos').then(r => {
	todoListObserver.init(r)
})