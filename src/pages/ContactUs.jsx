import React from "react";
import AnimatedText from "../others/AnimatedText";
import TransitionEffect from "../others/TransitionEffect";
import mainImg from "../Assets/hero section.webp";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaMapLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

const ContactUs = () => {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>تواصل مع حصاد للتقنية الزراعية | استفسارات ودعم فني</title>
        <meta
          name="description"
          content="تواصل مع شركة حصاد للاستفسار عن المنتجات الزراعية أو طلب دعم فني لتحسين إنتاجية المحاصيل."
        />
        <meta
          name="keywords"
          content="تواصل مع حصاد, دعم فني زراعي, استفسارات زراعية, اتصل بنا, حصاد للتقنية"
        />
      </Helmet>

      <TransitionEffect />

      <div className="contactUs relative">
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
              text="معنا تواصل "
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
                    تواصل معنا
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

        <div className="contact  py-16">
          <div className="container">
            <div className="cards relative z-[999px]">
              <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 lg:grid-cols-3 gap-4 justify-center items-center w-full">
                <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:.8 , y:0}} transition={{duration:1.5 }} className="c shadow-lg p-4 flex flex-col justify-center align-items-center rounded-lg ">
                  <FiPhoneCall className="text-6xl " />
                  <h4 className="py-3">تواصل معنا</h4>
                  <div className="numbers text-center grid xl:grid-cols-2 md:grid-cols-1  gap-0 justify-center items-center w-full">
                    <p className="text-[#254C00] fw-bold p-0 m-0">
                      045 263 8818
                    </p>
                    <p className="text-[#254C00] fw-bold p-0 m-0">
                      015 5465 1229
                    </p>
                    <p className="text-[#254C00] fw-bold p-0 m-0">
                      010 3289 8054
                    </p>
                    <p className="text-[#254C00] fw-bold p-0 m-0">
                      010 0616 8763
                    </p>
                    <p className="text-[#254C00] fw-bold p-0 mx-auto">
                      010 1391 1732
                    </p>
                  </div>
                </motion.div>
                <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:.8 , y:0}} transition={{duration:1.7 }} className="c shadow-lg p-5 py-10 flex flex-col justify-center align-items-center rounded-lg ">
                  <HiOutlineMailOpen className="text-6xl " />
                  <h4 className="py-2"> البريد الالكترونى</h4>
                  <div className="mail text-center  ">
                    <p className="text-[#254C00] fw-bold">
                      7asad.argric.tech@gmail.com
                    </p>
                  </div>
                </motion.div>
                <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:.8 , y:0}} transition={{duration:1.9 }} className="c shadow-lg p-4 flex flex-col justify-center align-items-center rounded-lg ">
                  <FaMapLocationDot className="text-6xl " />
                  <h4 className="py-2">مكان تواجدنا </h4>
                  <div className="text text-center w-full">
                    <p className="text-[#254C00] fw-bold">
                      {" "}
                      مول ديزرت روز بجوار البنك الاهلي، طريق القاهرة -
                      الإسكندرية الصحراوي، النوبارية الجديدة، محافظة البحيرة
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="map pt-12">
              <iframe
              title="hasaad | حصاد للتقنيه الزراعيه المتطوره"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109809.34215232616!2d30.143090914939975!3d30.675024615832477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145f55cbee7dcaf3%3A0xef1955d503dc345e!2z2K3Ytdin2K8g2YTZhNiq2YLZhtmK2Kkg2KfZhNiy2LHYp9i52YrYqSDYp9mE2YXYqti32YjYsdip!5e0!3m2!1sar!2seg!4v1741961656392!5m2!1sar!2seg"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
