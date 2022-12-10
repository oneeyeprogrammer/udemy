{
    const target = {}

    const handler = {
        get: (target, property) => {
            return target[property]
        },
        set: (target, property, value) => {
            target[property] = value
        }
    }

    const proxy = new Proxy(target, handler)

    proxy.firstName = `Usep Syaikal`
    proxy.lastName = `Arifin`

    // console.log(proxy.firstName)
}

{
    const person = {}

    const handler = {
        get: (target, property) => {
            console.info(`Access Property ${property}`)
            return target[property]
        },
        set: (target, property, value) => {
            console.info(`Change Property ${property} : ${value}`)
            target[property] = value
        }
    }

    const proxy = new Proxy(person, handler)

    // proxy.firstName = `Usep Syaikal`
    // proxy.lastName = `Arifin`

    // console.log(person.firstName)
}

{
    const person = {}

    const handler = {
        get: (target, property) => {
            console.info(`Access Property ${property}`)
            return target[property]
        },
        set: (target, property, value) => {
            console.info(`Change Property ${property} : ${value}`)
            if (value === null) {
                target[property] = ``
            } else {
                target[property] = value
            }
        }
    }

    const newPerson = new Proxy(person, handler)

    newPerson.firstName = `Usep Syaikal 1996`
    newPerson.lastName = null

    console.log(newPerson.firstName)
    console.log(newPerson.lastName)
}