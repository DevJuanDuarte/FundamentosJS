//Fetch API:

const url = 'https://jsonplaceholder.typicode.com/comments'


const consultarApi = () => {
    fetch(url)
        .then((rta) => {
            return rta.json()
        })
        .then((resultado) => {
            console.log(resultado);
        })
}
consultarApi()