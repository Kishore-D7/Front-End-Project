"use client";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./ProductPage.module.css";

export default function ProductPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.list);
  const router = useRouter();

  const products = [
    { id: 1, name: "TShirts", price: 899.99, Image: "/img.jpg" },
    { id: 2, name: "Shirts", price: 699.99, Image: "/img4.jpg" },
    { id: 3, name: "Pants", price: 599.99, Image: "/img5.jpg" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Products</h1>

      <button
        className={styles.cartButton}
        onClick={() => router.push("/cart")}
      >
        Go to Cart ({cart.reduce((t, i) => t + i.quantity, 0)})
      </button>

      <div className={styles.productsGrid}>
        {products.map((product) => {
          const cartItem = cart.find((i) => i.id === product.id);
          return (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImage}>
                <Image
                  src={product.Image}
                  alt={product.name}
                  width={220}
                  height={160}
                />
              </div>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>Rs.{product.price}</p>

              {!cartItem ? (
                <button
                  className={styles.addButton}
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </button>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <button
                    className={styles.quantityButton}
                    onClick={() => dispatch(removeFromCart(product.id))}
                  >
                    -
                  </button>
                  <span className={styles.quantityDisplay}>
                    {cartItem.quantity}
                  </span>
                  <button
                    className={styles.quantityButton}
                    onClick={() => dispatch(addToCart(product))}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
