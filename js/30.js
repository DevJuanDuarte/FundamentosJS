//Async await

const url = 'https://jsonplaceholder.typicode.com/comments'

const consultarApi = async () => {
    const rta = await fetch(url)
    const resultado = await rta.json()
    console.log(resultado);
}
consultarApi()