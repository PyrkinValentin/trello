import renderDOM from "./utils/renderDOM"
import Header from "./components/header/Header"
import Section from "./components/section/Section"
import ColumnTodo from "./components/columns/ColumnTodo"
import ColumnInProgress from "./components/columns/ColumnInProgress"
import ColumnDone from "./components/columns/ColumnDone"

import "./styles/reset.scss"
import "./styles/global.scss"
import "./styles/buttons.scss"

renderDOM(
	Header,
	Section(
		ColumnTodo,
		ColumnInProgress,
		ColumnDone
	)
)
