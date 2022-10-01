import "./styles/reset.scss"
import "./styles/global.scss"
import "./styles/buttons.scss"
import "./styles/header.scss"
import "./styles/column.scss"
import "./styles/card.scss"
import Time from "./components/time/time"

setInterval(() => document.getElementById('id_clock').innerText = Time, 1000)

console.log('Hello world')
