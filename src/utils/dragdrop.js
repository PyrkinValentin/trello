const dragdrop = () => {
	const cards = document.querySelectorAll('.deal-wrap')

	const handleDratStart = (e, card) => { // Старт перетаскивания
		setTimeout(() => e.target.style.display = 'none', 0)
	}

	const handleDratEnd = (e) => { // Окончание перетаскивания
		e.target.style.display = ''
	}

	const handleDragOver = (e) => { // Попадание в зону вставки
		e.preventDefault()
	}

	const handleDragEnter = (e) => { // Вход в зону вставки
		//this.style.border = '1px solid red'
	}

	const handleDragLeave = (e) => { // Выход из зоны вставки
		//this.style.border = ''
	}

	const handleDragDrop = (e, card) => { // Отпускаем элемент и вставляем в зону вставки
		e.preventDefault()
	}

	cards.forEach(card => {
		card.addEventListener('dragstart', e => handleDratStart(e, card))
		card.addEventListener('dragend', handleDratEnd)
		card.addEventListener('dragover', handleDragOver)
		card.addEventListener('dragenter', handleDragEnter)
		card.addEventListener('dragleave', handleDragLeave)
		card.addEventListener('drop', e => handleDragDrop(e, card))
	})
}

export default dragdrop