import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import AnimatedText from "../others/AnimatedText";
import mainImg from "../Assets/hero section.webp";
import p1 from "../Assets/product1.svg";
import productsData from "../products.json";

const CategoryDetails = () => {
  const [activeTab, setActiveTab] = useState("سائلة بودرة");
  const { category } = useParams(); // جلب اسم القسم من الـ URL

  // تحديد داتا القسم بناءً على الـ category
  const categoryData = productsData[category] || {};
  const tabs = {
    "سائلة بودرة": categoryData.liquid_powder || [],
    "معلقة": categoryData.suspension || [],
    "ورقية سائلة": categoryData.liquid_foliar || [],
  };

  if (!categoryData) {
    return <div>القسم غير موجود</div>;
  }

  return (
    <>
      <Helmet>
        <title>{`حصاد - ${category === "fertilizers" ? "أسمدة" : category === "pesticides" ? "مبيدات" : "مكملات"}`}</title>
        <meta
          name="description"
          content={`استكشف منتجات ${category === "fertilizers" ? "الأسمدة" : category === "pesticides" ? "المبيدات" : "المكملات"} من حصاد لتعزيز الإنتاجية الزراعية.`}
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
              text={category === "fertilizers" ? "الأسمدة" : category === "pesticides" ? "المبيدات" : "المكملات"}
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
                  <Link to={`/category/${category}`} className="text-light no-underline border-b-2 border-light">
                    {category === "fertilizers" ? "الأسمدة" : category === "pesticides" ? "المبيدات" : "المكملات"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container z-50 relative -top-7">
          <div className="c mb-8">
            <div className="cardNav text-center bottom-2 rounded-tr-lg rounded-tl-lg grid grid-cols-4 sm:grid-cols-3 md:grid-cols-3 xs:grid-cols-3 lg:grid-cols-4 gap-0 justify-around items-center p-3 md:p-0 w-full bg-light">
              <span
                className={`px-4 mx-3 md:mx-1 md:px-1 rounded-lg text-lg text-dark cursor-pointer ${
                  activeTab === "سائلة بودرة" ? "bg-dark/50 font-bold" : "bg-dark/15"
                }`}
                onClick={() => setActiveTab("سائلة بودرة")}
              >
                سائلة بودرة
              </span>
              <span
                className={`px-4 mx-3 md:mx-1 md:px-1 rounded-lg text-lg text-dark cursor-pointer ${
                  activeTab === "معلقة" ? "bg-dark/50 font-bold" : "bg-dark/15"
                }`}
                onClick={() => setActiveTab("معلقة")}
              >
                معلقة
              </span>
              <span
                className={`px-4 mx-3 md:mx-1 md:px-1 rounded-lg text-lg text-dark cursor-pointer ${
                  activeTab === "ورقية سائلة" ? "bg-dark/50 font-bold" : "bg-dark/15"
                }`}
                onClick={() => setActiveTab("ورقية سائلة")}
              >
                ورقية سائلة
              </span>
              <h3 className="text-[#254C00] text-center md:hidden">الأصناف</h3>
            </div>
            <div className="cardBody bg-white py-3">
              <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 lg:grid-cols-3 gap-5 p-4 justify-center items-center w-full">
                {tabs[activeTab].map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="no-underline text-dark">
                    <div className="c p-3 m-3 shadow-md overflow-hidden rounded-xl text-center relative bg-light flex flex-col justify-center items-center">
                      <div className="label bg-[#254C00] py-0 rounded-br-[15px] rounded-tr-[15px] absolute top-0 left-0">
                        <p className="text-white py-0 px-2 text-lg">{product.weight}</p>
                      </div>
                      <img src={p1} alt={product.name} />
                      <h3 className="py-3 text-xl">{product.name}</h3>
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