const date1 = new Date()
console.log(date1)

const date2 = new Date(2022, 10, 10)
console.log(date2)

const date3 = new Date(2022, 10, 10, 12, 30, 3, 123)
console.log(date3)

{
    const timestamp = Date.now()
    console.log(timestamp)

    const dateUnix = new Date(timestamp)
    console.log(dateUnix)

    const timeStamp = dateUnix.getTime()
    console.log(timeStamp)
}

{
    const parseTimestamp = Date.parse(`2022-11-11T08:45:45.123+07:00`)
    console.log(parseTimestamp)

    const dateUnix = new Date(parseTimestamp)
    console.log(dateUnix)
}

{
    const date = new Date()
    console.log(date)

    date.setFullYear(2020)
    console.log(date)

    console.log(date.getFullYear())
    console.log(date.getMonth())
    console.log(date.getDate())
    console.log(date.getHours())
    console.log(date.getMinutes())
    console.log(date.getSeconds())
    console.log(date.getMilliseconds())
    console.log(date.getTimezoneOffset())
}