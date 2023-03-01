import { useEffect, useState } from 'react'
import {getGifs} from '../helpers/Giphy'

export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const fillGrid = async(category) => {
        const newImages = await getGifs(category)
        setGifs(newImages)
        setIsLoading(false)
    }

    useEffect(() => {
        fillGrid(category)
    },[])

    return {
        images: gifs,
        isLoading: isLoading
    }
}
