import React from 'react'
import './item-list.scss'

export const ItemList = ({ data, setItem }) => {

    const itemsList = data.map(item => {

        const { name, id, quantity, price } = item
        
        return (
            <li className="list-group-item d-flex" key={id}>
                <span className="name">{name} ({quantity})</span>
                <button
                    onClick={() => setItem(item)}
                    className="btn btn-outline-success">
                    +
                </button>
                <span className="price">{price} р.</span>
            </li>
        )
    })
    return (
        <>
            {itemsList}
        </>
    )
}