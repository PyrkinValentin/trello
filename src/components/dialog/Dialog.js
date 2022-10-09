import api from "../../api/api"
import {newTodoStore} from "../../store/rootStore"
import {usersObserver, todoListObserver, inProgressObserver, doneObserver} from "../../observer/rootObserver"

import getDate from "../../utils/getDate"
import {button, div, img, input, select, textarea, option, label, span} from "../../utils/createTags"
import getRef from "../../utils/getRef"

import styles from "./Dialog.module.scss"

import closeImg from "../../assets/img/remove-gray.svg"
import titleImg from "../../assets/img/title.svg"
import descriptionImg from "../../assets/img/description-add.svg"
import userImg from "../../assets/img/user.svg"

const warning = (selector) => {
	selector.focus()
	selector.classList.add(styles.warning)
	setTimeout(() => selector.classList.remove(styles.warning), 200)
}

const Dialog = (params) => {
	const { title = '', description = '', userId, id, progress } = params || {}

	const containerRef = getRef(null)
	const dialogRef = getRef(null)
	const titleRef = getRef(null)
	const descriptionRef = getRef(null)
	const selectUserRef = getRef(null)

	usersObserver.subscribe((_, state, type) => {
		if (type !== 'init') return

		selectUserRef.current.append(
			...state.map(user =>
				option({ value: user.id, selected: user.id === userId },
					user.username
				)
			)
		)
	})

	if (id) {
		newTodoStore.state = params
	}

	const handleTitleChange = e => {
		newTodoStore.state = {
			...newTodoStore.state,
			title: e.target.value
		}
	}

	const handleDescriptionChange = e => {
		newTodoStore.state = {
			...newTodoStore.state,
			description: e.target.value
		}
	}

	const handleUserChange = (e) => {
		const { username } = usersObserver.state.find(user => user.id === e.target.value) || {}

		newTodoStore.state = {
			...newTodoStore.state,
			userId: e.target.value,
			username: username ? username : 'username',  // undefined mockapi не принимает. Возвращает предыдущее значение. Приходится костыли такие делать...
		}
	}

	const handleClose = () => {
		containerRef.current.remove()
		newTodoStore.clear()
	}

	const handleConfirm = () => {
		if (!newTodoStore.state.title) {
			warning(titleRef.current)
			return
		}

		if (!newTodoStore.state.description) {
			warning(descriptionRef.current)
			return
		}

		if (id) {
			if (progress === 'wait') {
				todoListObserver.update(
					newTodoStore.state,
				)
			}

			if (progress === 'work') {
				inProgressObserver.update(
					newTodoStore.state,
				)
			}

			if (progress === 'done') {
				doneObserver.update(
					newTodoStore.state,
				)
			}

			api.put(`todos/${id}`, newTodoStore.state)
		}

		if (!id) {
			newTodoStore.state = {
				...newTodoStore.state,
				date: getDate(),
				progress: 'wait',
			}

			api.post('todos', newTodoStore.state).then(({ status, data }) => { // Меняем стейт после resolve промиса так как мок api дает свой id для обьекта
				if (status !== 201) return console.error('Unsuccessful request')
				todoListObserver.state = data
			})
		}

		handleClose()
	}

	return (
		div({ ref: containerRef, class: styles.container },
			div({ ref: dialogRef, class: styles.dialog },
				button({ class: styles.close, onClick: handleClose },
					img({ src: closeImg, alt: 'Close dialog' })
				),

				label({},
					span({ class: styles.title },
						img({ src: titleImg, alt: 'title' }),
						'Title'
					),

					input({ ref: titleRef, type: 'text', value: title, placeholder: 'Enter title...', class: styles.titleInput, onChange: handleTitleChange })
				),

				label({},
					span({ class: styles.description },
						img({ src: descriptionImg, alt: 'title' }),
						'Description'
					),

					textarea({ ref: descriptionRef, type: 'text', placeholder: 'Enter description...', class: styles.descriptionTextarea, onChange: handleDescriptionChange },
						description
					)
				),

				div({},
					div({ class: styles.responsible },
						img({ src: userImg, alt: 'title' }),
						'Contributor'
					),

					select({ ref: selectUserRef, class: styles.users, onChange: handleUserChange },
						option({ value: '0' },
							'Select user'
						),
						...usersObserver.state.map(user =>
							option({ value: user.id, selected: user.id === userId },
								user.username
							)
						)
					)
				),

				div({ class: styles.groupButtons },
					button({ type: 'button', class: 'cancel-button _ripple', onClick: handleClose },
						'Cancel'
					),

					button({ type: 'button', class: 'confirm-button _ripple', onClick: handleConfirm },
						!id ? 'New todo' : 'Save'
					)
				)
			)
		)
	)
}

export default Dialog