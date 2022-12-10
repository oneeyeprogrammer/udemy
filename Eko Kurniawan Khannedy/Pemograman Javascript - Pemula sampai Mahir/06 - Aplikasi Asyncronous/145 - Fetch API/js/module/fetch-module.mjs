export const fetchModule = () =>{
    return import("./request-module.mjs")
        .then(module => module.requestModule())
        .then(request => fetch(request))
        .then(respon => respon.json())
        .then(data => data)
}