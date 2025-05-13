import React from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import AnimatedText from "../others/AnimatedText";
import mainImg from "../Assets/hero section.webp";
import { RiPlantLine } from "react-icons/ri";
import { GiNuclearPlant } from "react-icons/gi";
import { motion } from "framer-motion";
import RecentProducts from "../components/recentProducts/RecentProducts";
// import productsData from "../products.json"; // استيراد الـ JSON

const Products = () => {
  const location = useLocation();

  const categories = [
    { name: "مكملات", icon: <RiPlantLine className="w-full"/>, key: "supplements" },
    { name: "مبيدات", icon: <RiPlantLine  className="w-full"/>, key: "pesticides" },
    { name: "أسمدة", icon: <GiNuclearPlant className="w-full"/>, key: "fertilizers" },
  ];
  

  return (
    <>
      <Helmet>
        <title>منتجات حصاد للتقنية الزراعية | أسمدة ومبيدات متطورة</title>
        <meta
          name="description"
          content="استكشف منتجات حصاد من أسمدة، مبيدات، ومنظمات نمو مستوردة لتعزيز الزراعة المستدامة والإنتاجية."
        />
        <meta
          name="keywords"
          content="منتجات حصاد, أسمدة زراعية, مبيدات زراعية, منظمات نمو, زراعة مستدامة, حصاد للتقنية"
        />
      </Helmet>

      <div className="products">
        <div className="hero relative h-[70vh] overflow-hidden shadow-lg bg-light">
          {/* صورة الخلفية */}
          <img
            className="absolute inset-0 w-full h-[100vh] object-cover z-0 shadow-lg"
            src={mainImg}
            alt="حصاد للتقنيه الزراعيه المتطوره"
            loading="lazy"
          />

          {/* طبقة الأوفرلاي */}
          <div className="absolute inset-0 bg-[#163720]/70 flex flex-col justify-center items-center z-10">
            {/* النص المتحرك */}
            <AnimatedText
              dir="rtl"
              text="المنتجات "
              ClassName="text-center mt-6 lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-3xl text-white z-20"
            />

            {/* الروابط (البريد كرومبس) */}
            <div className="w-full flex justify-center mt-4 z-20">
              <ul className="flex items-center gap-4 text-lg sm:text-xl">
                <li>
                  <Link
                    to={"/contactUs"}
                    className={`text-light no-underline ${
                      location.pathname === "/contactUs"
                        ? "border-b-2 border-light"
                        : ""
                    }`}
                  >
                    المنتجات
                  </Link>
                </li>
                <li>
                  <span className="text-light">{"<"}--</span>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className={`text-light no-underline ${
                      location.pathname === "/" ? "border-b-2 border-light" : ""
                    }`}
                  >
                    الرئيسيه
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          {/* <div className="cards border-b-2 my-16 py-4">
            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 lg:grid-cols-3 gap-4 justify-center items-center w-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="c hover:bg-light p-4 text-center border-e-2"
              >
                <RiPlantLine className="text-8xl text-[#45B07E] m-auto" />
                <h2 className="text-[#254C00]">مكملات</h2>
                <Link
                  to={"/categoryDetails"}
                  className="btn !bg-[#45B07E] hover:!bg-[#389167] !px-6 text-light !text-xl font-bold mt-6"
                >
                  اعرف اكثر
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="c hover:bg-light p-4 text-center border-e-2"
              >
                <RiPlantLine className="text-8xl text-[#45B07E] m-auto" />
                <h2 className="text-[#254C00]">مبيدات</h2>
                <Link
                  to={"/categoryDetails"}
                  className="btn !bg-[#45B07E] hover:!bg-[#389167] !px-6 text-light !text-xl font-bold mt-6"
                >
                  اعرف اكثر
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="c hover:bg-light p-4 text-center "
              >
                <GiNuclearPlant className="text-8xl text-[#45B07E] m-auto" />
                <h2 className="text-[#254C00]">اسمده</h2>
                <Link
                  to={"/categoryDetails"}
                  className="btn !bg-[#45B07E] hover:!bg-[#389167] !px-6 text-light !text-xl font-bold mt-6"
                >
                  اعرف اكثر
                </Link>
              </motion.div>
            </div>
          </div> */}
          <div className="cards border-b-2 my-16 py-4">
            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 lg:grid-cols-3 gap-4 justify-center items-center w-full">
              {categories.map((category) => (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                  className="c hover:bg-light p-4 text-center border-e-2 last:border-e-0"
                >
                  {category.icon && (
                    <span className="text-8xl text-[#45B07E] m-auto">
                      {category.icon}
                    </span>
                  )}
                  <h2 className="text-[#254C00]">{category.name}</h2>
                  <Link
                    to={`/category/${category.key}`} // تمرير اسم القسم في الـ URL
                    className="btn !bg-[#45B07E] hover:!bg-[#389167] !px-6 text-light !text-xl font-bold mt-6"
                  >
                    اعرف اكثر
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <RecentProducts />
      </div>
    </>
  );
};

export default Products;
//kk