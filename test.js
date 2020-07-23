const f = fetch('http://127.0.0.1:8000/', {
    mode: 'no-cors',
    credentials: 'include',
})

// headers: {
//     'Access-Control-Allow-Origin': 'http://127.0.0.1:8000/',
// }


f.then(res=> {
    console.log(res)
    console.log(res.text())
    return res.text()
})
.then((data) => {
    console.log(data)
    return
})

