import React from "react";
import aboutImg1 from "../../Assets/aboutImg.svg";
import leaveAbout from "../../Assets/leaveAbout.svg";
import bigLeaveAbout from "../../Assets/bigLeaveAbout.svg";
import smallLeaveAbout from "../../Assets/smallLeaveAbout.svg";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <>
      <div className="aboutSection relative py-16 bg-[#F7FFF0] ">
        <img
          className="absolute right-0 -top-1 w-[9%] animate-leaf"
          src={leaveAbout}
          alt=""
        />
        <div className="container ">
          <div className="row  justify-center align-items-center ">
            <div className="col-md-6 ">
              <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:1 , y:0}} transition={{duration:1.5 }} className="relative w-full h-auto">
                {/* ورقة الشجر الكبيرة (في الخلف) */}
                <img
                  className="absolute inset-0 w-[60%] z-0 animate-leaf"
                  src={bigLeaveAbout}
                  alt="ورقة شجر كبيرة"
                />

                {/* الصورة الرئيسية (في المنتصف) */}
                <img
                  className="relative rounded-full w-[75%] mx-auto z-10 "
                  src={aboutImg1}
                  alt="حصاد للتقنيه الزراعيه المطوره"
                />

                {/* ورقة الشجر الصغيرة (في الأعلى) */}
                <img
                  className="absolute top-0 right-0 w-[30%] z-20 animate-leaf"
                  src={smallLeaveAbout}
                  alt="ورقة شجر صغيرة"
                />
              </motion.div>
            </div>
            <div className="col-md-6 text-right sm:text-center" dir="rtl">
              <motion.h2 initial={{opacity:0 , y:50}} whileInView={{opacity:1 , y:0}} transition={{duration:1.5 }} className="text-[#484848] pb-3 sm:pt-6">
                حصاد للتقنيه الزراعيه المطوره
              </motion.h2>
              <motion.p initial={{opacity:0 , y:50}} whileInView={{opacity:1 , y:0}} transition={{duration:2 }} className="text-[#6E6E6E] leading-relaxed text-lg ">
              شركة حصاد للتقنية الزراعية المتطورة  هي إحدى الشركات الرائدة في المجال الزراعي، حيث بدأت نشاطها في عام 2015، متخصصة في استيراد وتوزيع الأسمدة والمبيدات الزراعية من كبرى الشركات العالمية. 
كما تستورد الشركة المواد الخام اللازمة لصناعة الأسمدة والمبيدات ومنظمات النمو، مما يتيح لها تقديم حلول متكاملة تلبي احتياجات القطاع الزراعي.

              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
