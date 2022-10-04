import styles from "./Warning.module.scss"


const divWarning = document.createElement('div')
divWarning.classList.add(styles.divWarning)
divWarning.innerText = 'Warning!'


const divWarningButtons = document.createElement('div')
divWarningButtons.classList.add(styles.divWarning__container)




const warningButtonCancel = document.createElement('button')
warningButtonCancel.innerText = 'Cancel'
warningButtonCancel.classList.add(styles.divWarning__button_cancel)
warningButtonCancel.addEventListener('click', () => {
    const warningElementBlock = document.querySelector('.e2S6zq_divWarning');
    return warningElementBlock.remove();
});


const warningButtonConfirm = document.createElement('button')
warningButtonConfirm.innerText = 'Confirm'
warningButtonConfirm.classList.add(styles.divWarning__button)

divWarning.append(divWarningButtons)
divWarningButtons.append(warningButtonCancel)
divWarningButtons.append(warningButtonConfirm)


const Warning = () => {
    return divWarning
}

export default Warning