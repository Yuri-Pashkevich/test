import React, { useEffect, useState } from 'react'
import { ItemLabel, fetchData, Cart } from '../index'
import './app.scss'

export const App = () => {

    //getting data with fetch service
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData().then(json => setData(json))
    }, [])

    //split data by groups
    const books = data.filter(item => item.group === 'Книги')
    const food = data.filter(item => item.group === 'Еда')
    const sports = data.filter(item => item.group === 'Спорт')
    const carParts = data.filter(item => item.group === 'Запчасти для машин')
    const souvenirs = data.filter(item => item.group === 'Сувениры')

    //init state for cart
    const [cartData, setCartData] = useState([])

    //Add and delete items to cart 
    const addToCart = (item) => {
        setCartData([
            ...cartData,
            item
        ])
    }
    
    const removeFromCart = (idx) => {
        setCartData([
            ...cartData.filter((item, index) => index !== idx)
        ])
    }

    //Total goods summ in cart
    const summ = cartData.reduce((summ, item) => summ + item.price, 0)

    return (
        <div className="container">
            <div className="app">
                <ItemLabel
                    data={data}
                    books={books}
                    food={food}
                    sports={sports}
                    carParts={carParts}
                    souvenirs={souvenirs}
                    setItem={addToCart}
                />
            </div>
            <Cart data={cartData} delItem={removeFromCart} />
            <div>
                Общая сумма:
                <span className="total-summ">{summ}</span>
            </div>
        </div>
    )
}