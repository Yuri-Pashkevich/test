import React from 'react'
import './cart.scss'

let maxId = 0

export const Cart = ({ data, delItem }) => {

    const cartList = data.map((item, index) => {

        const { name, price } = item
        
        return (
            <li className="list-group-item d-flex" key={maxId++}>
                <span className="name">{name}</span>
                <button
                    onClick={() => delItem(index)}
                    className="btn btn-outline-danger">
                    Убрать товар
                </button>
                <span className="price">{price} р.</span>
            </li>
        )
    })
    return (
        <ul className="item-label">
            <h4>Корзина</h4>
            {cartList.length > 0
                ? cartList :
                <span className="empty-cart">
                    Упс, кажется в вашей корзине ничего нет
                </span>
            }
        </ul>
    )
}