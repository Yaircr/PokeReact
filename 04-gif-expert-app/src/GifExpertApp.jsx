import {useState} from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Ayano Tateyama', 'Ao Haru Ride', 'Inuyasha']);
    const handleAddCategory = (value) => {
        if(categories.includes(value)) return
        setCategories([value, ...categories])
        // setCategories(cat => [...categories, 'Digimon'])
    }

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory 
                // setCategories={setCategories}
                onNewValue={handleAddCategory}
            />
            { categories.map(category =>{
                return(
                    <GifGrid
                        key={category}
                        category={category}
                    />
                )}
            )}
        </>
    )
}