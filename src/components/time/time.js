const Time = () => {
    let currentDatetime = new Date()
    let hours = ('0' + currentDatetime.getHours()).slice(-2)
    let minutes = ('0' + currentDatetime.getMinutes()).slice(-2)

    return hours + ":" + minutes
}

export default Time()
