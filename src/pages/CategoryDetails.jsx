import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import AnimatedText from "../others/AnimatedText";
import mainImg from "../Assets/hero section.webp";
import ex from "../Assets/ex.png";
import { fetchProducts } from "../airtable";

const CategoryDetails = () => {
  const { category } = useParams(); // جلب اسم القسم من الـ URL

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        // Filter products based on the selected category
        const filteredProducts = data.filter(
          (product) => product.Category === category
        );
        setProducts(filteredProducts);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category]);

  console.log(products);


  return (
    <>
      <Helmet>
        <title>{`حصاد - ${
          category === "fertilizers"
            ? "أسمدة"
            : category === "pesticides"
            ? "مبيدات"
            : "مكملات"
        }`}</title>
        <meta
          name="description"
          content={`استكشف منتجات ${
            category === "fertilizers"
              ? "الأسمدة"
              : category === "pesticides"
              ? "المبيدات"
              : "المكملات"
          } من حصاد لتعزيز الإنتاجية الزراعية.`}
        />
      </Helmet>

      <div className="categoryDetails bg-light">
        <div className="hero relative h-[70vh] overflow-hidden shadow-lg bg-light">
          <img
            className="absolute inset-0 w-full h-[100vh] object-cover z-0 shadow-lg"
            src={mainImg}
            alt="حصاد للتقنيه الزراعيه المتطوره"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#163720]/70 flex flex-col justify-center items-center z-10">
            <AnimatedText
              dir="rtl"
              text={
                category === "fertilizers"
                  ? "الأسمدة"
                  : category === "pesticides"
                  ? "المبيدات"
                  : "المكملات"
              }
              ClassName="text-center mt-6 lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-3xl text-white z-20"
            />
            <div className="w-full flex justify-center mt-4 z-20">
              <ul className="flex items-center gap-4 text-lg sm:text-xl">
                <li>
                  <Link to={"/"} className="text-light no-underline">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <span className="text-light">{"<"}--</span>
                </li>
                <li>
                  <Link
                    to={`/category/${category}`}
                    className="text-light no-underline border-b-2 border-light"
                  >
                    {category === "fertilizers"
                      ? "الأسمدة"
                      : category === "pesticides"
                      ? "المبيدات"
                      : "المكملات"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container z-50 relative -top-7">
          <div className="c mb-8">
           
            <div className="cardBody rounded-lg bg-white py-3">
              <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 lg:grid-cols-3 gap-5 p-4 justify-center items-center w-full">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.Name}`}
                    className="no-underline text-dark"
                  >
                    <div className="c p-3 m-3 shadow-md overflow-hidden rounded-xl text-center relative bg-light flex flex-col justify-center items-center">
                      <div className="label bg-[#254C00] py-0 rounded-br-[15px] rounded-tr-[15px] absolute top-0 left-0">
                        <p className="text-white py-0 px-2 text-lg">
                          {product.Weight}
                        </p>
                      </div>
                      <img
                        src={
                          product.Image &&
                          product.Image[0] &&
                          product.Image[0].url
                            ? product.Image[0].url
                            : ex
                        }
                        alt={`${product.Name} - ${product.Weight}`}
                      />
                      <h3 className="py-3 text-xl">{product.Name}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;
