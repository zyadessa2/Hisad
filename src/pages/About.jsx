import React from "react";
import { Helmet } from "react-helmet";
import TransitionEffect from "../others/TransitionEffect";
import AnimatedText from "../others/AnimatedText";
import mainImg from "../Assets/hero section.webp";
import { Link, useLocation } from "react-router-dom";
import AboutSection from "../components/aboutSection/AboutSection";
import OurGoals from "../components/ourGoals/OurGoals";
import OurVision from "../components/ourvision/OurVision";

const About = () => {
    const location = useLocation();

  return (
    <>
      <Helmet>
        <title>
          معلومات عن شركه حصاد للتقنيه الزراعيه | عن حصاد للتقنيه الزراعيه{" "}
        </title>
        <meta
          name="description"
          content="تأسست شركة النماء الزراعي عام 2010 كمؤسسة متخصصة في تطوير حلول مبتكرة لدعم قطاع الزراعة وتحقيق التنمية الزراعية المستدامة. منذ ذلك الحين، أصبحت الشركة من الرواد في مجال توفير الحلول الزراعية المتكاملة التي تجمع بين التكنولوجيا الحديثة والطرق التقليدية لتحقيق أعلى إنتاجية وأفضل جودة في المحاصيل."
        />
      </Helmet>

      <TransitionEffect />

      <div className="about  relative overflow-x-hidden">
        <div className="hero relative h-screen  shadow-lg bg-light">
          <div className="absolute shadow-lg inset-0  bg-[#163720] bg-opacity-70 flex items-center justify-center  z-10"></div>

          <img
            className="absolute shadow-lg top-0 left-0 w-full h-full object-cover z-0 "
            src={mainImg}
            alt="حصاد للتقنيه الزراعيه المتطوره"
            loading="lazy"
          />

          <AnimatedText
            dir="rtl"
            text=" الشركه عن"
            ClassName="absolute top-[15%] lg:top-[15%] left-1/2 transform -translate-x-1/2 mt-6 lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-4xl sm:mb-8 text-white z-20"
          />

          <div className="text-xl absolute top-[50%] lg:top-[15%] left-1/2 transform -translate-x-1/2 mt-6 z-20">
            <ul className="flex items-center space-x-2">
              <li>
                <Link to={'/about'} className={`text-light  no-underline ${location.pathname === '/about' ? 'border-b-2 border-light' : ''}`}>
                  عن الشركه
                </Link>
              </li>
              <li>
                <span className="text-light">{"<"}--</span>
              </li>
              <li>
              <Link to={'/'} className={`text-light  no-underline ${location.pathname === '/' ? 'border-b-2 border-light' : ''}`}>
              الرئيسيه
                </Link>
              </li>
            </ul>
          </div>
        </div>


        <AboutSection/>
        <OurGoals/>
        <OurVision/>

      </div>
    </>
  );
};

export default About;
