import React from "react";
import aboutImg1 from "../../Assets/aboutImg.svg";
import leaveAbout from "../../Assets/leaveAbout.svg";
import bigLeaveAbout from "../../Assets/bigLeaveAbout.svg";
import smallLeaveAbout from "../../Assets/smallLeaveAbout.svg";

const AboutSection = () => {
  return (
    <>
      <div className="aboutSection relative py-16 bg-[#F7FFF0] ">
        <img
          className="absolute right-0 top-0 w-[10%]"
          src={leaveAbout}
          alt=""
        />
        <div className="container ">
          <div className="row  justify-center align-items-center ">
            <div className="col-md-6 ">
              <div className="relative w-full h-auto">
                {/* ورقة الشجر الكبيرة (في الخلف) */}
                <img
                  className="absolute inset-0 w-[60%] z-0"
                  src={bigLeaveAbout}
                  alt="ورقة شجر كبيرة"
                />

                {/* الصورة الرئيسية (في المنتصف) */}
                <img
                  className="relative rounded-full w-[75%] mx-auto z-10"
                  src={aboutImg1}
                  alt="حصاد للتقنيه الزراعيه المطوره"
                />

                {/* ورقة الشجر الصغيرة (في الأعلى) */}
                <img
                  className="absolute top-0 right-0 w-[30%] z-20"
                  src={smallLeaveAbout}
                  alt="ورقة شجر صغيرة"
                />
              </div>
            </div>
            <div className="col-md-6 text-right sm:text-center" dir="rtl">
              <h2 className="text-[#484848] pb-3 sm:pt-6">
                حصاد للتقنيه الزراعيه المطوره
              </h2>
              <p className="text-[#6E6E6E] leading-relaxed text-lg ">
                تأسست شركة النماء الزراعي عام 2010 كمؤسسة متخصصة في تطوير حلول
                مبتكرة لدعم قطاع الزراعة وتحقيق التنمية الزراعية المستدامة. منذ
                ذلك الحين، أصبحت الشركة من الرواد في مجال توفير الحلول الزراعية
                المتكاملة التي تجمع بين التكنولوجيا الحديثة والطرق التقليدية
                لتحقيق أعلى إنتاجية وأفضل جودة في المحاصيل.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
