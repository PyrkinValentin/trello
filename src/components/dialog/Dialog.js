import styles from "./Dialog.module.scss"

const options = [
    {
        qualifiedName: 'Select user',
        value: 'Select Users',
    },
    {
        qualifiedName: 'Select user',
        value: 'Vadim',
    },
    {
        qualifiedName: 'Select user',
        value: 'Alex',
    },
    {
        qualifiedName: 'Select user',
        value: 'Valentin',
    },
]

const Dialog = () => {
    const div = document.createElement('div')
    div.classList.add(styles.container)

    const input = document.createElement('input')
    input.setAttribute('placeholder', 'Tittle')
    input.classList.add(styles.container__input)


    const textarea = document.createElement('textarea')
    textarea.classList.add(styles.container__textarea)
    textarea.setAttribute('placeholder', 'Description')

    const divButtons = document.createElement('div')
    divButtons.classList.add(styles.container__divButtons)

    const select = document.createElement('select')
    select.classList.add(styles.container__select)

    const divButtonsGather = document.createElement('div')
    divButtonsGather.classList.add(styles.container__divButtons_gather)

    const buttonConfirm = document.createElement('button')
    buttonConfirm.innerText = 'Confirm'
    buttonConfirm.classList.add(styles.container__button)

    const buttonCancel = document.createElement('button')
    buttonCancel.innerText = 'Cancel'
    buttonCancel.classList.add(styles.container__button_cancel)

    options.forEach(({qualifiedName, value}) => {
        const option = document.createElement('option')
        option.setAttribute('value', qualifiedName)
        option.innerText = value
        select.append(option)
    })

    div.append(input)
    div.append(textarea)
    div.append(divButtons)
    divButtons.append(select)

    divButtons.append(divButtonsGather)
    divButtonsGather.append(buttonCancel)
    divButtonsGather.append(buttonConfirm)

    return div
 }

 export default Dialog