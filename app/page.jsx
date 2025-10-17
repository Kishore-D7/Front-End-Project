"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const offers = [
  { id: 1, img: "/pic1.jpg", title: "Everyday Essentials – Buy 1 Get 1 on Basic Tees" },
  { id: 2, img: "/pic2.jpg", title: "New Arrival – Soft Cotton Shirt ₹999 Only" },
  { id: 3, img: "/pic3.jpg", title: "Elegant Formal Wear – Classic Grey Suit 30% Off" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % offers.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ textAlign: "center", marginTop: "20px" }}>
      <div style={{ width: "80%", maxWidth: "800px", margin: "0 auto", position: "relative" }}>
        {offers.map((offer, index) => (
          <div key={offer.id} style={{ display: index === current ? "block" : "none", transition: "all 0.5s" }}>
            <div style={{ position: "relative", width: "100%", height: "400px" }}>
              <Image src={offer.img} alt={offer.title} fill style={{ borderRadius: "10px", objectFit: "cover" }} />
            </div>
            <h2 style={{ marginTop: "10px" }}>{offer.title}</h2>
          </div>
        ))}
      </div>

      <div style={{ margin: "20px" }}>
        <p>Look good. Feel better. Shop smart, wear confident — fashion that fits your life.</p>
        <p>Where comfort meets class. From daily wear to formal flair — find your perfect outfit today.</p>
        <p>Discover everyday essentials and new arrivals — quality fashion at unbeatable prices.</p>
      </div>

      <button
        style={{ padding: "10px 20px", marginTop: "10px", cursor: "pointer" }}
        onClick={() => router.push("/product")}
      >
        Show me the Products
      </button>
    </section>
  );
}
