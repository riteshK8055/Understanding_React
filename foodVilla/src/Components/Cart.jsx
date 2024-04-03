import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./foodItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const  cartItems = useSelector(store => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {

        dispatch(clearCart());
    }
    return (

        <div>
            <h1 className="font-bold text-lg">Cart Items - {cartItems.length}</h1>
            <button onClick={() => {

                handleClearCart();
            }}
            className="btn bg-green-100 p-2 m-5 rounded-lg shadow-inner">Clear Cart</button>
            <div className="flex justify-evenly flex-wrap">
               {cartItems.map(item  => <FoodItems key = {item.card.info.id} {...item.card.info} />)}
            </div>
        </div>
    );
};

export default Cart;