"use client";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Navbar() {
  const cart = useSelector((state) => state.cart.list);
  const cartCount = cart.reduce((t, i) => t + i.quantity, 0);

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", background: "#eee" }}>
      <div className="nav-left">Mens Fashion Store</div>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/product">Product</Link>
        <Link href="/cart">Cart ({cartCount})</Link>
        <Link href="/feedback">Feedback</Link>
      </div>
    </nav>
  );
}
