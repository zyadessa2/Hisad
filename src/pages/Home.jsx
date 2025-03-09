import React from 'react';
import AnimatedText from '../others/AnimatedText';
import HomeImg from '../Assets/hero section.webp';
import leave from '../Assets/leave.svg';
import leave2 from '../Assets/leave2.svg';
import Category from '../components/category/Category';

const Home = () => {
  return (
    <div className="home overflow-x-hidden">
      <div className="hero relative h-screen rounded-br-[200px] shadow-lg bg-light">
  {/* Overlay */}
  <div className="absolute shadow-lg inset-0 bg-[#163720] bg-opacity-70 flex items-center justify-center rounded-br-[50px] z-10"></div>

  {/* الخلفية */}
  <img
    className="absolute shadow-lg top-0 left-0 w-full h-full object-cover z-0 rounded-br-[50px]"
    src={HomeImg}
    alt="حصاد للتقنيه الزراعيه المتطوره"
    loading="lazy"
  />

  {/* النصوص المتحركة */}
  <AnimatedText
    dir="rtl"
    text="مستدامة زراعة نحو "
    ClassName="absolute top-[15%] lg:top-[15%] left-1/2 transform -translate-x-1/2 mt-6 lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-4xl sm:mb-8 text-white z-20"
  />
  <AnimatedText
    dir="rtl"
    text="الاقتصاد وتنمي الغذائي الأمن تعزز "
    ClassName="absolute top-[35%] lg:top-[30%] left-1/2 transform -translate-x-1/2 mt-6 lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-4xl sm:mb-8 text-white z-20"
  />

  {/* الزر */}
  <button className="btn !bg-[#45B07E] hover:!bg-[#389167] !px-9 text-light !text-xl absolute top-[55%] left-1/2 transform -translate-x-1/2 mt-6 sm:mb-8 z-20">
    للتواصل معنا
  </button>
</div>


      <div className="aboutContent relative  text-center py-20">
        <div className="container">
          <img className='w-[114px] lg:w-[90px] md:w-[850px] sm:w-[70px] xs:w-[70px] absolute left-0 sm:top-2' src={leave} alt="" />
          <h2 className='text-[#445F2D] text-bold text-6xl lg:!text-5xl md:!text-5xl sm:!text-4xl xs:!text-4xl py-5'>حصاد للتقنيه الزراعيه المطوره</h2>
          <p className='leading-relaxed  m-auto text-center text-2xl !w-[100%] text-dark/75'>تأسست شركة النماء الزراعي عام 2010 كمؤسسة متخصصة في تطوير حلول مبتكرة لدعم قطاع الزراعة وتحقيق التنمية الزراعية المستدامة. منذ ذلك الحين، أصبحت الشركة من الرواد في مجال توفير الحلول الزراعية المتكاملة التي تجمع بين التكنولوجيا الحديثة والطرق التقليدية لتحقيق أعلى إنتاجية وأفضل جودة في المحاصيل.</p>
          <button className="btn !bg-[#45B07E] hover:!bg-[#389167] !px-10 text-light !text-xl font-bold mt-6">
            اعرف اكثر        
          </button>
          <img className='w-[114px] absolute right-0 bottom-2' src={leave2} alt="" />
        </div>
      </div>

      <Category/>

    </div>
  );
};

export default Home;