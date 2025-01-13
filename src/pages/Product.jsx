import React, { useState, useEffect } from "react";
import "./Product.css"; // Ensure this file exists and is linked
import Navbar from "./Navbar";
import productbanner1 from "../assets/product-banner.jpeg";
import productbanner2 from "../assets/product-banner-2.png";
import productbanner3 from "../assets/product-banner-3.jpg";
import product1 from "../assets/products/sofa-chair/sofa-chair1.png";
import product2 from "../assets/products/sofa-chair/sofa-chair2.png";
import product3 from "../assets/products/sofa-chair/sofa-chair3.png";
import product4 from "../assets/products/sofa-chair/sofa-chair4.png";
import product5 from "../assets/products/sofa-chair/sofa-chair5.png";

const categories = [
    "Furniture", "Home Decor", "Mattresses", "Sofas & Seatings", "All Products", "About Us", "FAQs"
  ];

const Product = () => {
  const banners = [productbanner1, productbanner2, productbanner3];
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    { id: 1, name: "Minimal Chair", price: "₹5000", image: product1 },
    { id: 2, name: "Modern Table", price: "₹7500", image: product2 },
    { id: 3, name: "Stylish Lamp", price: "₹1500", image: product3 },
    { id: 4, name: "Comfort Sofa", price: "₹25000", image: product4 },
    { id: 5, name: "Wall Shelf", price: "₹3500", image: product5 },
    { id: 6, name: "Wall Shelf", price: "₹3500", image: product2 },
    { id: 7, name: "Wall Shelf", price: "₹3500", image: product3 },
    { id: 8, name: "Wall Shelf", price: "₹3500", image: product1 },
    { id: 9, name: "Wall Shelf", price: "₹3500", image: product5 },
  ];

  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 10000);

    return () => clearInterval(slideInterval);
  }, [banners.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <Navbar categories={categories} />
      <div className="product-page">
        {/* Banner Slider */}
        <div className="banner-slider">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`banner-image ${index === currentSlide ? "active" : ""}`}
            >
              {index === currentSlide && (
                <>
                  <img src={banner} alt={`Banner ${index + 1}`} className="full-banner" />
                  <div className="banner-content">
                    <h3 className="banner-title">New Arrivals</h3>
                    <p className="banner-subtitle">Decor Inspiration.</p>
                    <button className="btn shop-now">Shop Now</button>
                  </div>
                </>
              )}
            </div>
          ))}

          {/* Dots Navigation */}
          <div className="dots-navigation">
            {banners.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="products-section">
          <h2 className="products-title">Featured Products</h2>
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                {/* Wishlist Icon */}
                <div
                  className={`wishlist-icon ${wishlist.includes(product.id) ? "active" : ""}`}
                  onClick={() => toggleWishlist(product.id)}
                ></div>
                <img src={product.image} alt={product.name} className="product-image" />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
