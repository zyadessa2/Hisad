import React from "react";
import ourGoalImg from "../../Assets/ourGoalsImg.svg";
import { motion } from "framer-motion";

const OurGoals = () => {
  return (
    <>
      <div className="outGoals  bg-[#F7FFF0]">
        <h3 className="text-center text-4xl text-[#484848] pb-2">
          اهداف الشركه
        </h3>
        <div className="relative  ">
          <img
            src={ourGoalImg}
            alt=" توفير حلول صديقة للبيئة تساهم في تحسين جودة التربة والمحاصيل. - ناء شبكة توزيع قوية لتغطية احتياجات المزارعين على مستوى أوسع داخل السوق المحلي والإقليمي. - ستيراد وتوزيع أفضل أنواع الأسمدة والمبيدات ومنظمات النمو من الشركات العالمية الموثوقة. - تقديم استشارات فنية وحلول زراعية متطورة لمساعدتهم في تحقيق أعلى إنتاجية بأقل التكاليف."
            className="w-full h-[500px]  sm:h-screen object-cover rounded-lg "
          />
          <div className="absolute inset-0  sm:h-screen bg-dark/15 bg-opacity-40 flex flex-col items-center justify-center rounded-lg">
            <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0 justify-center items-center w-full">
              <div className="h-0 sm:h-auto md:h-auto lg:h-0 md:hidden"></div>{" "}
              {/* المربع الفاضي */}
              <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:.8 , y:0}} transition={{duration:1 }} className="text-center  flex flex-col justify-center items-center w-full h-[250px] md:h-[90%]  bg-[#254C00] opacity-70 p-6">
                <h4 className="text-light pb-2 sm:text-lg">توفير منتجات عالية الجودة</h4>
                <p className="text-[#B3B3B3] lg:text-xl sm:text-lg mt-2">
                  استيراد وتوزيع أفضل أنواع الأسمدة والمبيدات ومنظمات النمو من
                  الشركات العالمية الموثوقة.
                </p>
              </motion.div>
              <div className="h-0 sm:h-auto md:h-auto lg:h-0 md:hidden"></div>{" "}
              {/* المربع الفاضي */}
              <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:.8 , y:0}} transition={{duration:1.5 }} className="text-center flex flex-col justify-center items-center w-full h-[250px] md:h-[90%] md:m-1 bg-[#254C00] opacity-70 p-6">
                <h4 className="text-light pb-2 sm:text-lg">دعم المزارعين</h4>
                <p className="text-[#B3B3B3] lg:text-xl  mt-2 sm:text-lg">
                  تقديم استشارات فنية وحلول زراعية متطورة لمساعدتهم في تحقيق
                  أعلى إنتاجية بأقل التكاليف.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0 justify-center items-center w-full">
              <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:.8 , y:0}} transition={{duration:2 }} className="text-center flex flex-col justify-center items-center w-full h-[250px] md:h-[90%]  bg-[#254C00] opacity-70 p-6">
                <h4 className="text-light pb-2 sm:text-lg">تعزيز الاستدامة الزراعية</h4>
                <p className="text-[#B3B3B3] lg:text-xl  mt-2 sm:text-lg">
                  توفير حلول صديقة للبيئة تساهم في تحسين جودة التربة والمحاصيل.
                </p>
              </motion.div>
              <div className="h-0 sm:h-auto md:h-auto lg:h-0 md:hidden"></div>{" "}
              {/* المربع الفاضي */}
              <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:.8 , y:0}} transition={{duration:2.5 }} className="text-center flex flex-col justify-center items-center w-full h-[250px] md:h-[90%] md:m-1 bg-[#254C00] opacity-70 p-6">
                <h4 className="text-light pb-2 sm:text-lg">التوسع في الأسواق</h4>
                <p className="text-[#B3B3B3] lg:text-xl  mt-2 sm:text-lg">
                  بناء شبكة توزيع قوية لتغطية احتياجات المزارعين على مستوى أوسع
                  داخل السوق المحلي والإقليمي.
                </p>
              </motion.div>
              <div className="h-0 sm:h-auto md:h-auto lg:h-0 md:hidden"></div>{" "}
              {/* المربع الفاضي */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurGoals;
