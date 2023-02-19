const url = 'https://media0.giphy.com/media/GfY0lN6aohiWi4WWr7/giphy.gif?cid=9029e2f27ea7628afa24185452e37149e943f32f5ce04c18&rid=giphy.gif&ct=g'
const apiKey = 'vylDSFJHPgRLpi1ZgShf5DgXeVN9bzuB';
/*const getImagenPromise = () => {return new Promise( resolve => resolve('https://media0.giphy.com/media/GfY0lN6aohiWi4WWr7/giphy.gif?cid=9029e2f27ea7628afa24185452e37149e943f32f5ce04c18&rid=giphy.gif&ct=g'))}
getImagenPromise().then(console.log)*/

const getImagen = async() => {
    try {
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const {data} = await respuesta.json();
    const {url} = await data.images.original
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
    } catch (error) {
        console.error(error)
    }
}
getImagen()
