import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser,faCheck } from '@fortawesome/free-solid-svg-icons';
import Navbar from "./Navbar"; 
import Footer from "./Footer";
import "./HomePage.css";
import image1 from '../assets/display/office-chair.png';
import image2 from '../assets/display/otter-single.png';
import image3 from '../assets/display/sofa_chair.png';
import image4 from '../assets/display/table1.png';
import image5 from '../assets/display/table2.png';
import image6 from '../assets/bestseller/wardrobe.png';
import image7 from '../assets/ssss.jpeg';
import blog1 from '../assets/blogs/blog-1.jpg'
import blog2 from '../assets/blogs/blog-2.jpg'
import blog3 from '../assets/blogs/blog-3.jpg'
import logo1 from "../assets/parters/airbnb.png"
import logo2 from "../assets/parters/docker.png"
import logo3 from "../assets/parters/nike.png"
import logo4 from "../assets/parters/novartis.png"
import logo5 from "../assets/parters/novartis.png"
import logo6 from "../assets/parters/otto.png"
import logo7 from "../assets/parters/wayfair.png"
import test1 from "../assets/testimonial/test1.jpg"
import test2 from "../assets/testimonial/test2.png"
import test3 from "../assets/testimonial/test3.jpg"

const ProductCard = ({ title, imageSrc, isLarge = false, className = "" }) => (
  <div className={`product-card ${isLarge ? 'large' : 'small'} ${className}`}>
    <div className="text-content">
      <p>{title}</p>
      <a href="#">MORE+</a>
    </div>
    <img src={imageSrc} alt={title} className={isLarge ? "product-image-large" : "product-image"} />
  </div>
);

const CategoryList = ({ items }) => (
  <ul className="nav-list">
    {items.map(item => (
      <li key={item}>
        <a href="#">{item}</a>
      </li>
    ))}
  </ul>
);

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    "Furniture", "Home Decor", "Mattresses", "Sofas & Seatings", "Lamp and Lighting", "Furnishings", "Luxury"
  ];

  const products = [
    { title: "SHETU WANG FURNITURE", imageSrc: image4, isLarge: true },
    { title: "SHETU WANG FURNITURE 1", imageSrc: image3, className: "light-brown" },
    { title: "SHETU WANG FURNITURE 2", imageSrc: image1, className: "peach" },
    { title: "SHETU WANG FURNITURE 3", imageSrc: image5, className: "orange" },
    { title: "SHETU WANG FURNITURE 4", imageSrc: image2, className: "blue" },
  ];

  const bestsellerProducts = [
    { name: "Summers", category: "ARMCHAIR", price: "€1900.99", imageSrc: image6 },
    { name: "Blakey", category: "DINING CHAIR", price: "€1789.99", imageSrc: image2 },
    { name: "Plaimas", category: "ARMCHAIR", price: "€2300.99", imageSrc: image4 },
    { name: "Plaimas", category: "ARMCHAIR", price: "€2300.99", imageSrc: image3 },
    { name: "Plaimas", category: "ARMCHAIR", price: "€2300.99", imageSrc: image5 }
  ];

  const tabData = [
    {
      label: "Exclusive",
      title: "Elegant Office Chair",
      description: "Designed for ultimate style, comfort, and durability.",
      image: image7,
    },
    {
      label: "Limited Edition",
      title: "Stylish Ottoman",
      description: "A perfect fit for your living room.",
      image: image4,
    },
    {
      label: "Hot picks",
      title: "Modern Sofa Chair",
      description: "Bringing luxury to your home.",
      image: image3,
    },
    {
      label: "Must-Have",
      title: "Classic Wooden Table",
      description: "Minimalistic and durable design.",
      image: image5,
    },
  ];

  return (
    <div className="homepage">
       <Navbar categories={categories} />
      <section className="home-title">
        <h1>Design your space with HomeScape’s curated furniture.</h1>
        <button className="shop-now">
          SHOP NOW
          <span className="arrow">→</span>
        </button>
      </section>

      <section className="product-display">
      <div className="section-separator"></div>
        <h1 className="section-header">Product Display</h1>
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard key={index} title={product.title} imageSrc={product.imageSrc} isLarge={product.isLarge} className={product.className} />
          ))}
        </div>
      </section>

      <section className="bestseller-display">
      <div className="section-separator"></div>
        <h1 className="section-header">Our Best Sellers</h1>
        <div className="bestseller-grid">
          {bestsellerProducts.map((product, index) => (
            <div className="bestseller-card" key={index}>
              <img src={product.imageSrc} alt={product.name} />
              <p className="category">{product.category}</p>
              <h3 className="name">{product.name}</h3>
              <p className="price">{product.price}</p>
              <button className="cart-button">
                <FontAwesomeIcon icon={faShoppingCart} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="why-deals-section">
      <div className="section-separator"></div>
  <h1 className="section-header">Why Our Deals Are Best</h1>
  <p>Elevate your everyday routine with Eleanor lipsticks, where artistry meets elegance. Our lipsticks are more than just makeup; they're an expression of you.</p>

  <div className="deal-offerings">
    <div className="deal-box">
      <div className="deal-icon">
        <FontAwesomeIcon icon={faCheck} className="deal-check-icon" />
      </div>
      <h3>Exclusive Discounts</h3>
      <p>We offer exclusive discounts for our members, ensuring you get the best value for premium quality products.</p>
    </div>
    <div className="deal-box">
      <div className="deal-icon">
        <FontAwesomeIcon icon={faCheck} className="deal-check-icon" />
      </div>
      <h3>High-Quality Products</h3>
      <p>Our lipsticks are made with high-quality ingredients to ensure long-lasting wear and a smooth finish.</p>
    </div>
    <div className="deal-box">
      <div className="deal-icon">
        <FontAwesomeIcon icon={faCheck} className="deal-check-icon" />
      </div>
      <h3>Customer Satisfaction</h3>
      <p>We prioritize customer satisfaction, ensuring every purchase brings joy and confidence to your day.</p>
    </div>
  </div>
</section>


<section className="square-section">
  <h2 className="section-header">Discover Our Best Products</h2>
  <div className="square left-square">
    <img src={image7} alt="Product Image" className="product-image" />
    <div className="product-details">
      <h3 className="product-name">PureSpace Luxe Recliner</h3>
      <p className="product-detail">Sleek, elegant for your modern living space</p>
      <button className="view-product-button">View Product</button>
    </div>
    <div className="quote-overlay">
      <p className="quote-text">"Comfort and elegance combined for the perfect living experience."</p>
    </div>
  </div>
  <div className="square right-square">
    <div className="top-text">
      <p>Discover the Essence of Minimalist Furniture Design & Style</p>
    </div>

    <section className="tab-section">
        <div className="tab-buttons">
          {tabData.map((tab, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-content">
          <img
            src={tabData[activeTab].image}
            alt={tabData[activeTab].title}
            className="tab-image"
          />
          <div className="tab-text">
            <h3>{tabData[activeTab].title}</h3>
            <p>{tabData[activeTab].description}</p>
          </div>
        </div>
      </section>
  </div>
</section>

<section className="big-sale-section">
  <div className="big-sale-content">
    <h1>Big Sale</h1>
    <p>Elevate your space: Unveil Stylish Living with your Exiquisite Furniture Designs</p>
    <button className="buy-now-button">Buy Now</button>
  </div>
</section>



<section className="our-blogs">
  <div className="section-separator"></div>
  <h1 className="section-header">Our Blogs</h1>
  <div className="blogs-grid">
    {[
      {
        title: "Design Tips for Modern Homes",
        description: "Discover the best practices to create a stylish and functional living space.",
        date: "January 9,2024",
        image: blog1,
        link: "#",
      },
      {
        title: "The Art of Minimalist Furniture",
        description: "Learn how minimalist furniture can transform your home.",
        date: "January 9,2024",
        image: blog2,
        link: "#",
      },
      {
        title: "Choosing the Right Sofa",
        description: "Tips to select the perfect sofa for your living room.",
        date: "January 9,2024",
        image: blog3,
        link: "#",
      },
    ].map((blog, index) => (
      <div className="blog-card" key={index}>
        <img src={blog.image} alt={blog.title} className="blog-image" />
        <div className="blog-content">
          <h3>{blog.title}</h3>
          <p>{blog.date}</p>
          <p>{blog.description}</p>
          <a href={blog.link} className="read-more">Read More →</a>
        </div>
      </div>
    ))}
  </div>
</section>

{/* Partners Section */}
<section className="partners-section">
        <div className="section-separator"></div>
        <h1 className="section-header">Our Parnership</h1>
        <div className="partners-logos">
          <img src={logo1} alt="Partner 1" />
          <img src={logo2} alt="Partner 2" />
          <img src={logo3} alt="Partner 3" />
          <img src={logo4} alt="Partner 4" />
          <img src={logo5} alt="Partner 5" />
          <img src={logo6} alt="Partner 6" />
          <img src={logo7} alt="Partner 7" />
        </div>
      </section>

      <section className="testimonial-section">
  <div className="section-separator"></div>
  <h1 className="section-header">What Our Customers Say</h1>
  <div className="testimonials-container">
    <div className="testimonial-card">
      <div className="testimonial-content">
        <p className="testimonial-quote">"HomeScape has transformed my living room into a luxurious space! The furniture is both comfortable and stylish."</p>
        <div className="testimonial-author">
          <img src={test1} alt="Customer 1" className="testimonial-avatar" />
          <div className="author-info">
            <h3>John Doe</h3>
            <p>Interior Designer</p>
          </div>
        </div>
      </div>
    </div>
    <div className="testimonial-card">
      <div className="testimonial-content">
        <p className="testimonial-quote">"Excellent quality and customer service. Highly recommend HomeScape for anyone looking to upgrade their home!"</p>
        <div className="testimonial-author">
          <img src={test2} alt="Customer 2" className="testimonial-avatar" />
          <div className="author-info">
            <h3>Jane Smith</h3>
            <p>Architect</p>
          </div>
        </div>
      </div>
    </div>
    <div className="testimonial-card">
      <div className="testimonial-content">
        <p className="testimonial-quote">"The sofa I purchased from HomeScape is so comfy, and the quality is exceptional. Worth every penny!"</p>
        <div className="testimonial-author">
          <img src={test3} alt="Customer 3" className="testimonial-avatar" />
          <div className="author-info">
            <h3>Emily Johnson</h3>
            <p>Homeowner</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer />
    </div>
  );
};

export default HomePage;
