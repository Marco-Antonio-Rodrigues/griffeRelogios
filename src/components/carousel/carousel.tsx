import './carousel.css'
import { motion } from "framer-motion"; 
import { useState, useEffect, useRef} from 'react';
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'

const images = [banner1,banner2,banner3]

function Carousel(){
  const [width,setWidth] = useState(0);
  const slide = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (slide?.current) {
      setWidth(slide.current?.scrollWidth - slide.current?.offsetWidth)
    }
  },[])

  return(
    <div className="carousel">
      <motion.div ref={slide} className="slide" whileTap={{cursor: "grabbing"}}>
        <motion.div 
        className="inner-slide" drag="x" 
        dragConstraints={{right:0, left:-width}} 
        initial={{x:100}} animate={{x:0}} 
        transition={{duration: 0.8}}>
          {images.map(image => (
            <motion.div className="inner-item" key={image}>
              <img src={image}></img>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
export default Carousel;