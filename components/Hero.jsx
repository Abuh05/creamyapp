import css from '../styles/Hero.module.css'
import Cherry from '../assets/Cherry.png'
import HeroImage from '../assets/HeroImage.png'
import Pizzal from '../assets/p1.jpg'
import Image from 'next/image'
import { FaPhone } from 'react-icons/fa'

export default function Hero() {
    return (
        <div className={css.container}>

        {/* left side */}
        <div className={css.left}>
        <div className={css.cherryDiv}>
            <span>More Than Fast </span>
            <Image src={Cherry} alt="cherry" width={40} height={40} />
        </div>
  

        <div className={css.heroText}>
            <span>Bee Fastest</span>
            <span>In Delivery</span>
            <span>
                Your <span style={{color: "var(--themeRed)"}}>Pizza</span> 
            </span>
        </div>

        <span className={css.miniText}>
            Our Mission is to be filling your tummy with delicious food and with  
        </span>

        <button className={`btn ${css.btn}`}>
            Get Started 
        </button>
        </div>
        {/* Right side */}
        <div className={css.right}>
            <div className={css.imageContainer}>
            <Image src={HeroImage} alt="" layout='intrinsic' />
            </div>

            <div className={css.ContactUs}>
                <span>Contact us</span>
                <div>
                    <FaPhone color="white"/>
                </div>
            </div>

            <div className={css.Pizza}>
                <div>
                    <Image src={Pizzal} alt="pizzal" objectFit='cover' layout='intrinsic' />
                </div>
                <div className={css.details}>
                    <span>Italian Pizza</span>
                    <span><span style={{color: "var(--themeRed)"}}>$</span> 7.4</span>
                </div>
            </div>
        </div>
        </div>
    )
}