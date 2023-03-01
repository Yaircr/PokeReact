const api_key = 'api_key=vylDSFJHPgRLpi1ZgShf5DgXeVN9bzuB'
const baseURL = `https://api.giphy.com/v1/gifs/search?${api_key}`
const limit = 10
export const getGifs = async(category) => {
    const resp = await fetch(`${baseURL}&q=${category}&limit=${limit}`)
    const {data} = await resp.json()
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url   
    }))
    return gifs
}