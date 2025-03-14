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
        <title>عن شركة حصاد للتقنية الزراعية المتطورة | من نحن</title>
        <meta
          name="description"
          content="شركة حصاد، رائدة في استيراد وتوزيع الأسمدة والمبيدات الزراعية منذ 2015، تقدم حلول زراعية مبتكرة بجودة عالية."
        />
        <meta
          name="keywords"
          content="عن حصاد, شركة زراعية, أسمدة مستوردة, مبيدات زراعية, تقنيات زراعية, جودة زراعية"
        />
      </Helmet>

      <TransitionEffect />

      <div className="about  relative overflow-x-hidden">
      <div className="hero relative h-[70vh] overflow-hidden shadow-2xl bg-light">

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
    text="الشركه عن"
    ClassName="text-center mt-6 lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-3xl text-white z-20"
  />

  {/* الروابط (البريد كرومبس) */}
  <div className="w-full flex justify-center mt-4 z-20">
    <ul className="flex items-center gap-4 text-lg sm:text-xl">
      <li>
        <Link
          to={'/about'}
          className={`text-light no-underline ${location.pathname === '/about' ? 'border-b-2 border-light' : ''}`}
        >
          عن الشركه
        </Link>
      </li>
      <li>
        <span className="text-light">{'<'}--</span>
      </li>
      <li>
        <Link
          to={'/'}
          className={`text-light no-underline ${location.pathname === '/' ? 'border-b-2 border-light' : ''}`}
        >
          الرئيسيه
        </Link>
      </li>
    </ul>
  </div>

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
