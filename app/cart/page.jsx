"use client";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../redux/cartSlice";
import Image from "next/image";
import styles from "./CartPage.module.css";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((t, i) => t + i.price * i.quantity, 0).toFixed(2);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.cartImage}>
                <Image src={item.Image} alt={item.name} width={120} height={80} />
              </div>
              <div className={styles.cartInfo}>
                <strong>{item.name}</strong>
                <span className={styles.cartPrice}>
                  {item.quantity} × Rs.{item.price.toFixed(2)} = Rs.{(item.price * item.quantity).toFixed(2)}
                </span>
                <div>
                  <button
                    className={styles.quantityButton}
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    -
                  </button>
                  <button
                    className={styles.quantityButton}
                    onClick={() => dispatch(addToCart(item))}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className={styles.totalPrice}>
            Total Price: Rs.{totalPrice}
          </div>

          <button className={styles.clearButton} onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
