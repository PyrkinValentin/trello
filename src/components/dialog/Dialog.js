import styles from "./Dialog.module.css"
const input = document.createElement('input')
const textarea = document.createElement('textarea')
const div = document.createElement('div')
div.classList.add(styles.container)
div.append(input)
div.append(textarea)


const Dialog = () => {
       return div
 }

 export default Dialog