import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import AnimatedText from "../others/AnimatedText";
import mainImg from "../Assets/hero section.webp";
import leaf from "../Assets/leaveAbout.svg";
import p1 from "../Assets/product1.svg";
import RecentProducts from "../components/recentProducts/RecentProducts";
import productsData from "../products.json"; 

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("نبذة");
  const { id } = useParams(); // جلب الـ id من الـ URL

  // جمع كل المنتجات في مصفوفة واحدة للبحث
  const allProducts = [
    ...productsData.fertilizers.liquid_foliar,
    ...productsData.fertilizers.suspension,
    ...productsData.fertilizers.liquid_powder,
    ...productsData.pesticides.liquid_foliar,
    ...productsData.pesticides.suspension,
    ...productsData.pesticides.liquid_powder,
    ...productsData.supplements.liquid_foliar,
    ...productsData.supplements.suspension,
    ...productsData.supplements.liquid_powder,
    ...productsData.latest_products,
  ];

  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return <div>المنتج غير موجود</div>;
  }

  return (
    <div className="productDetails">
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
            text={product.name}
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
                <Link to={`/category/${product.category || "products"}`} className="text-light no-underline border-b-2 border-light">
                  المنتجات
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="datails py-16 relative">
        <img
          className="absolute top-0 right-0 rotate-6 sm:w-[80px] animate-leaf"
          src={leaf}
          alt=""
        />
        <div className="container">
          <div className="m-auto row justify-center items-center max-w-5xl mx-auto w-full">
            <div className="col-md-7">
              <div dir="rtl" className="content text-right">
                <h2 className="text-4xl text-dark font-bold">{product.name}</h2>
                <div className="n flex justify-around items-center text-lg my-10 bg-[#ebebeb] p-3">
                  <span
                    className={`px-3 py-1 rounded-md cursor-pointer ${
                      activeTab === "نبذة" ? "bg-[#d1d1d1] font-bold" : "bg-transparent"
                    }`}
                    onClick={() => setActiveTab("نبذة")}
                  >
                    نبذة
                  </span>
                  <span
                    className={`px-3 py-1 rounded-md cursor-pointer ${
                      activeTab === "معدلات الاستخدام" ? "bg-[#d1d1d1] font-bold" : "bg-transparent"
                    }`}
                    onClick={() => setActiveTab("معدلات الاستخدام")}
                  >
                    معدلات الاستخدام
                  </span>
                  <span
                    className={`px-3 py-1 rounded-md cursor-pointer ${
                      activeTab === "المواد الفعالة" ? "bg-[#d1d1d1] font-bold" : "bg-transparent"
                    }`}
                    onClick={() => setActiveTab("المواد الفعالة")}
                  >
                    المواد الفعالة
                  </span>
                </div>
                <p className="border-s-2 ps-2 text-lg leading-loose">
                  {product.tabs[activeTab]}
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="image flex flex-col justify-center align-items-center text-center">
                <img
                  className="w-75"
                  src={p1}
                  alt={`${product.name} - ${product.weight}`}
                />
                <p className="bg-[#254C00] w-75 py-2 rounded-tr-lg rounded-tl-lg rounded-br-lg text-lg text-white">
                  {product.weight}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RecentProducts />
    </div>
  );
};

export default ProductDetails;