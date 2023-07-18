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
        max-w-7xl flex flex-col top-[120px] gap-5`}
      >
        <div
          className="flex justify-center items-center "
        >
          {/* <img src={logo} alt="logo"
            className=" h-45 w-60"
          /> */}


        </div>
        <div >
          <LamborghiniCanvas />
        </div>

        <div>
          <AventadorCanvas />
        </div>

       
      </div>

    </section>
  )
}

export default Hero