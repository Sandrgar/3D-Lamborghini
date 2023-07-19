import { motion } from "framer-motion"
import { styles } from "../styles"
import { background, logo } from "../assets"
import LamborghiniCanvas from "./canvas/Lamborghini"
import AventadorCanvas from "./canvas/Aventador"



const Hero = () => {
  return (
    <section
      className='relative w-full 
    h-screen '
    >
      <div
        className={`${styles.paddingX} absolute inset-0
        max-w-7xl flex flex-col top-[100px] gap-5`}
      >
        <div >
          <div className="h-[380px] w-[1000px] flex">
            <LamborghiniCanvas />
            <div div className="w-[330px]  mt-[80px]" >
              <p className='text-white text-[18px] font-bold cursor-pointer flex justify-center'>Lamborghini - Centenario</p>
            </div>
          </div>
        

          <div className=" h-[380px] w-[1000px] flex">
            <AventadorCanvas />
            <div className="w-[320px] mt-[80px]">
              <p className='text-white text-[18px] font-bold cursor-pointer  flex justify-center'>Lamborghini - Aventador</p>
            </div>
          </div>

        </div>


      </div>

    </section>
  )
}

export default Hero