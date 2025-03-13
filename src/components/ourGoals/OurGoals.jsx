import React from "react";
import ourGoalImg from "../../Assets/ourGoalsImg.svg";
import { motion } from "framer-motion";

const OurGoals = () => {
  return (
    <>
      <div className="outGoals bg-[#F7FFF0]">
        <h3 className="text-center text-4xl text-[#484848] pb-2">
          اهداف الشركه
        </h3>
        <div className="relative  ">
          <img
            src={ourGoalImg}
            alt=" توفير حلول صديقة للبيئة تساهم في تحسين جودة التربة والمحاصيل. - ناء شبكة توزيع قوية لتغطية احتياجات المزارعين على مستوى أوسع داخل السوق المحلي والإقليمي. - ستيراد وتوزيع أفضل أنواع الأسمدة والمبيدات ومنظمات النمو من الشركات العالمية الموثوقة. - تقديم استشارات فنية وحلول زراعية متطورة لمساعدتهم في تحقيق أعلى إنتاجية بأقل التكاليف."
            className="w-full h-[500px] object-cover rounded-lg"
          />
          <div className="absolute inset-0  bg-dark/15 bg-opacity-40 flex flex-col items-center justify-center rounded-lg">
            <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:1 , y:0}} transition={{duration:1.5 }} className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0 justify-center items-center w-full">
              <div className="h-0 sm:h-auto md:h-auto lg:h-0"></div>{" "}
              {/* المربع الفاضي */}
              <div className="text-center flex flex-col justify-center items-center w-full h-[250px] bg-[#254C00] opacity-70 p-6">
                <h4 className="text-light pb-2">توفير منتجات عالية الجودة</h4>
                <p className="text-[#B3B3B3] lg:text-xl sm:text-2xl mt-2">
                  استيراد وتوزيع أفضل أنواع الأسمدة والمبيدات ومنظمات النمو من
                  الشركات العالمية الموثوقة.
                </p>
              </div>
              <div className="h-0 sm:h-auto md:h-auto lg:h-0"></div>{" "}
              {/* المربع الفاضي */}
              <div className="text-center flex flex-col justify-center items-center w-full h-[250px] bg-[#254C00] opacity-70 p-6">
                <h4 className="text-light pb-2">دعم المزارعين</h4>
                <p className="text-[#B3B3B3] lg:text-xl sm:text-2xl mt-2">
                  تقديم استشارات فنية وحلول زراعية متطورة لمساعدتهم في تحقيق
                  أعلى إنتاجية بأقل التكاليف.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0 justify-center items-center w-full">
              <div className="text-center flex flex-col justify-center items-center w-full h-[250px] bg-[#254C00] opacity-70 p-6">
                <h4 className="text-light pb-2">تعزيز الاستدامة الزراعية</h4>
                <p className="text-[#B3B3B3] lg:text-xl sm:text-2xl mt-2">
                  توفير حلول صديقة للبيئة تساهم في تحسين جودة التربة والمحاصيل.
                </p>
              </div>
              <div className="h-0 sm:h-auto md:h-auto lg:h-0"></div>{" "}
              {/* المربع الفاضي */}
              <div className="text-center flex flex-col justify-center items-center w-full h-[250px] bg-[#254C00] opacity-70 p-6">
                <h4 className="text-light pb-2">التوسع في الأسواق</h4>
                <p className="text-[#B3B3B3] lg:text-xl sm:text-2xl mt-2">
                  بناء شبكة توزيع قوية لتغطية احتياجات المزارعين على مستوى أوسع
                  داخل السوق المحلي والإقليمي.
                </p>
              </div>
              <div className="h-0 sm:h-auto md:h-auto lg:h-0"></div>{" "}
              {/* المربع الفاضي */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurGoals;
