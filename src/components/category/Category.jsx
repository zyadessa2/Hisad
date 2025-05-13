import React from "react";
import image from "../../Assets/category.jpg";
import img1 from "../../Assets/الاسمده.svg";
import img2 from "../../Assets/مكملات غذائيه.svg";
import img3 from "../../Assets/مبيدات حشريه.svg";
import img4 from "../../Assets/مبيدات فطريه.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
//kk

const Category = () => {
  
  return (
    <>
      <div className="relative  ">
        <img
          src={image}
          alt="Sample"
          className="w-full h-[500px] object-cover rounded-lg"
        />

        <div className="absolute inset-0 bg-[#163720] bg-opacity-70 flex flex-col items-center justify-center  rounded-lg">
          <div className="content absolute text-center  top-16">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 1.5 }}
              className="text-light pb-3 text-5xl"
            >
              المنتجات
            </motion.h2>
            <p className="w-[65%] sm:w-[90%] m-auto py-3 leading-relaxed text-center text-white text-lg ">
              نقدم لك مجموعة من الحلول الزراعية المبتكرة التي تدعم تطوير الإنتاج
              الزراعي وتساهم في تحقيق استدامة بيئية، لتعزيز الإنتاجية وتحقيق
              الأمن الغذائي.
            </p>
            <Link
              to={"/products"}
              className="btn !bg-[#45B07E] hover:!bg-[#389167] !px-10 text-light !text-xl font-bold mt-6"
            >
              لمعلومات اكثر
            </Link>
          </div>
        </div>
      </div>

      <div className="categoryCard relative -top-40 sm:-top-28">
        <div className="container bg-white shadow-lg p-6 rounded-lg">
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="text-center"
            >
              <img src={img1} alt="الاسمده" className="mx-auto" />
              <h3 className="text-[#254C00] lg:text-xl sm:text-2xl mt-2">
                الاسمده
              </h3>
              <Link
                className="no-underline btn !bg-[#45B07E] hover:!bg-[#389167] !px-6 text-light !text-lg font-semibold mt-2"
                to={"/category/fertilizers"}
              >
                اعرف اكثر
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="text-center"
            >
              <img src={img2} alt="مكملات غذائيه" className="mx-auto" />
              <h3 className="text-[#254C00] lg:text-xl sm:text-2xl mt-2">
                مكملات غذائيه
              </h3>
              <Link
                className="no-underline btn !bg-[#45B07E] hover:!bg-[#389167] !px-6 text-light !text-lg font-semibold mt-2"
                to={"/category/supplements"}
              >
                اعرف اكثر
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8 }}
              className="text-center"
            >
              <img src={img3} alt="مبيدات حشريه" className="mx-auto" />
              <h3 className="text-[#254C00] lg:text-xl sm:text-2xl mt-2">
                مبيدات حشريه
              </h3>
              <Link
                className="no-underline btn !bg-[#45B07E] hover:!bg-[#389167] !px-6 text-light !text-lg font-semibold mt-2"
                to={"/category/pesticides"}
              >
                اعرف اكثر
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8 }}
              className="text-center"
            >
              <img src={img4} alt="مبيدات فطريه" className="mx-auto" />
              <h3 className="text-[#254C00] lg:text-xl sm:text-2xl mt-2">
                مبيدات فطريه
              </h3>
              <Link
                className="no-underline btn !bg-[#45B07E] hover:!bg-[#389167] !px-6 text-light !text-lg font-semibold mt-2"
                to={"/category/pesticides"}
              >
                اعرف اكثر
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
