//Multiples Async Await

const url = 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/photos'

const consultarApi = async () => {
    const inicio = performance.now()
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    // console.log(resultado);

    // console.log('Iniciando 2da consulta');
    const respuesta2 = await fetch(url2)
    const resultado2 = await respuesta2.json()
    // console.log(resultado2);

    const fin = performance.now()
    console.log(`Ejecucion 1er Async: ${fin - inicio} ms`);
}
consultarApi()

//Arrancan los dos al mismo tiempo:
const consultarApi2 = async () => {
    const inicio = performance.now()

    const [respuesta,respuesta2] = await Promise.all([fetch(url), fetch(url2)])
    const resultado = await respuesta.json()
    const resultado2 = await respuesta2.json()
    // console.log(resultado);
    // console.log(resultado2);

    const fin = performance.now()
    console.log(`Ejecucion 2do Async: ${fin - inicio} ms`);
}
consultarApi2()