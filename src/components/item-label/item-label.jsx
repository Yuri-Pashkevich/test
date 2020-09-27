import React from 'react'
import './item-label.scss'
import { ItemList } from '../index'

export const ItemLabel = ({ data, books, food, sports, carParts, souvenirs, setItem }) => {

    const sectionNames = data.map(item => item.group)

    const uniqueSections = Array.from(new Set(sectionNames)).map(name => {
        return (
            <ul className="item-label" key={name}>
                <h4>{name}</h4>
                { name === 'Книги' ? <ItemList data={books} setItem={setItem} /> : null}
                { name === 'Еда' ? <ItemList data={food} setItem={setItem} /> : null}
                { name === 'Спорт' ? <ItemList data={sports} setItem={setItem} /> : null}
                { name === 'Запчасти для машин' ? <ItemList data={carParts} setItem={setItem} /> : null}
                { name === 'Сувениры' ? <ItemList data={souvenirs} setItem={setItem} /> : null}
            </ul>
        )
    })

    return (
        <>
            {uniqueSections}
        </>
    )
}