import { useState } from "react"

export const AddCategory = ({onNewValue}) => {

    const [inputValue, setInputValue] = useState('Anime')

    const handleInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const input = inputValue.trim()
        if(input.length <= 1) return
        // setCategories(categories => [inputValue, ...categories])
        setInputValue('')
        onNewValue(input)
    }
    return(
        <form
            onSubmit={onSubmit}
        >
            <input
                type='text'
                placeholder='Gif Lookup'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}