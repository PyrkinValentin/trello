import RenderDOM from "/src/utils/RenderDOM"
import Dialog from "../dialog/Dialog"
import Warning from "../warning/Warning";


// const Column = () => {
// 	return true
// }

const addElementBtn = document.querySelector(".card-container__modify-list__tltle");
addElementBtn.addEventListener('click' , () => {
	RenderDOM(Dialog());
});

const removeAllElementsBtn = document.querySelector(".card-container__modify-list.delete-elements");
removeAllElementsBtn.addEventListener('click', () => {
	RenderDOM(Warning());
});


export default addElementBtn
export {removeAllElementsBtn}

// export default Column