import "./styles/reset.scss"
import "./styles/global.scss"
import "./styles/buttons.scss"
import "./styles/header.scss"
import "./styles/column.scss"
import "./styles/card.scss"
import Time from "./components/time/Time"
import Dialog from "./components/dialog/Dialog"
import Warning from "./components/warning/Warning"
import RenderDOM from "./utils/RenderDOM"

setInterval(Time, 1000)

RenderDOM(Dialog())
RenderDOM(Warning())