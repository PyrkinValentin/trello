const RenderDOM = selector => {
    if (!selector) return
    document.body.append(selector)
}

export default RenderDOM