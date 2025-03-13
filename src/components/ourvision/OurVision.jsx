import React from 'react'
import AnimatedText from '../../others/AnimatedText'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'
import leave1 from '../../Assets/leave.svg'
import leave2 from '../../Assets/leave2.svg'

const OurVision = () => {
  return <>
  
    <div className="ourVision py-20 relative">
        <img className='absolute animate-leaf top-0 -left-4 ' src={leave1} alt="حصاد افضل شركه مبيدات ومحاصيل زراعيه " />
        <div className="container text-center w-75">
          <h2 className='text-[#484848] text-4xl py-2'>رؤيه الشركه</h2>
          <div className="text relative">
          <RiDoubleQuotesR className='text-[#6E6E6E] absolute -right-2 -top-3 text-4xl '/>
          <p className='text-[#6E6E6E] relative leading-loose text-lg px-4 mt-5'> تسعى شركة حصاد للتقنية الزراعية المتطورة إلى أن تكون شريك النجاح الأول للمزارعين من خلال توفير حلول زراعية مبتكرة ومستدامة، تساهم في زيادة الإنتاجية وتحسين جودة المحاصيل، مع الالتزام بالمعايير البيئية والصحية العالمية.</p>
          <RiDoubleQuotesL className=' text-[#6E6E6E] absolute left-[11%] bottom-0 text-4xl '/>

          </div>
        </div>
        <img className='absolute right-0 animate-leaf' src={leave2} alt="افضل شركه متخصصه فى التقنيات الزراعيه شركه حصاد للتقنيه المتطوره" />
    </div>

  </>
}

export default OurVision