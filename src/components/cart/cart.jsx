import React from 'react'
import './cart.scss'

let maxId = 0

export const Cart = ({ data, delItem, increase, decrease }) => {
   
    const cartList = data.map((item, index) => {

        const { name, value, newprice } = item

        return (
            <li className="list-group-item d-flex" key={maxId++}>
                <span className="name">{name}</span>
                <button className="btn btn-danger" onClick={() => decrease(index)}>-</button>
                <span className="cart-quantity">{value} шт.</span>
                <button className="btn btn-success" onClick={() => increase(index)}>+</button>
                <button
                    onClick={() => delItem(index)}
                    className="btn btn-outline-danger">
                    Удалить
                </button>
                <span className="price">{newprice} р.</span>
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