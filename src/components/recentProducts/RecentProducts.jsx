import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import image from "../../Assets/category.jpg";
import p1 from "../../Assets/product1.svg";
import productsData from "../../products.json";

const RecentProducts = () => {
  const settings = {
    dots: false,
    autoplay: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const latestProducts = productsData.latest_products;

  return (
    <>
      <div className="relative my-10">
        <img
          src={image}
          alt="Sample"
          className="w-full h-[232px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-[#163720] bg-opacity-70 flex flex-col items-center justify-center rounded-lg">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-light pb-3 text-5xl"
          >
            أحدث المنتجات
          </motion.h2>
        </div>
      </div>

      <Slider className="my-16" {...settings}>
        {latestProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="no-underline">
            <div className="c p-3 m-3 shadow-md overflow-hidden rounded-xl text-center relative bg-light flex flex-col justify-center align-items-center">
              <div className="label bg-[#254C00] py-0 rounded-br-[15px] rounded-tr-[15px] absolute top-0 left-0">
                <p className="text-white py-0 px-2 text-lg">{product.weight}</p>
              </div>
              <img src={p1} alt={product.name} />
              <h3 className="py-3 text-xl text-dark">{product.name}</h3>
            </div>
          </Link>
        ))}
      </Slider>
    </>
  );
};

export default RecentProducts;