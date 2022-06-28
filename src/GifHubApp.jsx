import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifHubApp = () => {

    const [categories, setCategories] = useState(['Cats']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifHubApp</h1>

            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}