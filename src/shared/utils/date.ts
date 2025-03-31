export function getDayByTimestamp(timestamp: number) {
    const date = new Date(timestamp)

    const fullYear = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const minutesWithZero = minutes < 10 ? `0${ minutes }` : minutes
    const fullDate = `${ day }.${ month }.${ fullYear }`
    const time = `${ hours }:${ minutesWithZero }`

    return {
        fullYear,
        month,
        day,
        hours,
        minutes,
        fullDate,
        time
    }
}

export function getLastMessageDate(timestamp: number) {
    const currentDate = Date.parse(new Date().toString())
    const formattedDate = getDayByTimestamp(timestamp)

    if (currentDate - timestamp * 1000 < 86400000) {
        return formattedDate.time
    }

    return formattedDate.fullDate
}