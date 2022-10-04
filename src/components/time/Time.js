const Time = () => {
    let currentDatetime = new Date()
    let hours = ('0' + currentDatetime.getHours()).slice(-2)
    let minutes = ('0' + currentDatetime.getMinutes()).slice(-2)

    document.getElementById('id_clock').innerText = hours + ":" + minutes
}

export default Time
