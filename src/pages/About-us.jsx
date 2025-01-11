import React from "react";
import Navbar from "./Navbar"; 
import Footer from "./Footer";
import "./AboutUs.css";
import bannerImage from "../assets/about-banner.jpg";
import aboutTop from "../assets/about-top-image.jpg"; // Replace with actual image path
import aboutBottom from "../assets/about-bottom-image.jpg"; // Replace with actual image path

const categories = [
  "Furniture",
  "Home Decor",
  "Mattresses",
  "Sofas & Seatings",
  "Lamp and Lighting",
  "Furnishings",
  "Luxury",
];

function AboutUs() {
  return (
    <div>
      <Navbar categories={categories} /> {/* Pass the categories prop */}
      <div className="about-us">
        {/* Top Banner Section */}
        <div className="banner">
          <img src={bannerImage} alt="About Us Banner" className="banner-image" />
          <div className="banner-content">
            <h1>About Us</h1>
            <p>
              Learn more about our mission, vision, and values. We are here to make a difference by fostering innovation, 
              empowering communities, and creating lasting positive impacts.
            </p>
          </div>
        </div>

        {/* Overview Section */}
        <div className="overview">
          <h2>Overview</h2>
          <p>
            At HomeScape, we are dedicated to creating elegant, functional, and inspiring spaces that bring comfort and 
            joy to your home. Our goal is to offer high-quality furniture and decor solutions tailored to fit every style 
            and need. We take pride in curating a diverse collection of products that blend timeless design with modern 
            trends, ensuring that each piece enhances the beauty and functionality of your living spaces. From cozy sofas to 
            statement pieces, our mission is to provide stylish, durable, and affordable options that help you create the perfect home.
          </p>
        </div>

        {/* About Content Section */}
        <div className="about-content">
          {/* First Row (Left: Content, Right: Image) */}
          <div className="content-image-row">
            <div className="left-content">
              <h3>Careful Considerated Details & Perfection</h3>
              <p>
                HomeScape began with a passion for creating homes that truly reflect the personality and tastes of the people who live in them.
               
              </p>
              <button>Learn More</button>
            </div>
            <div className="right-image">
              <img src={aboutTop} alt="Our Story" />
            </div>
          </div>

          {/* Second Row (Left: Image, Right: Content) */}
          <div className="content-image-row reversed">
 
              <div className="right-content">
                <h3>Careful Considerated Details & Perfection</h3>
                <p>
                  At HomeScape, we believe in delivering high-quality products that bring elegance and comfort to every home.
                 
                </p>
                <button>Learn More</button>
              </div>
              <div className="left-image">
                <img src={aboutBottom} alt="Quality Furniture" />
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default AboutUs;
