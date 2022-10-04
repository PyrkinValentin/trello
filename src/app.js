import "./styles/reset.scss"
import "./styles/global.scss"
import "./styles/common.scss"
import "./styles/buttons.scss"
import "./styles/header.scss"
import "./styles/column.scss"
import "./styles/card.scss"
import Time from "./components/time/Time"
import Dialog from "./components/dialog/Dialog"
import Warning from "./components/warning/Warning"
import RenderDOM from "./utils/RenderDOM"
import addElementBtn from "./components/column/Column.js"
import {removeAllElementsBtn} from "./components/column/Column.js"

setInterval(Time, 1000)



//RenderDOM(Dialog())
//RenderDOM(Warning())