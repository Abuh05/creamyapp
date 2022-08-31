import css from '../styles/Menu.module.css'
import client, { urlFor } from '../lib/client'
import Image from 'next/image'
import Link from 'next/link'
export default function  Menu({pizzas}) {
return (
    <div className={css.container}>
        <div className={css.heading}>
            <span>Our Menu</span>
            <span>Menu thats always</span>
            <span>Make you fall in Love</span>
        </div>

        {/* pizzas */}
        <div className={css.menu}>

        {pizzas.map((pizza, id) => {

            const src = urlFor(pizza.image).url()
            return (
                
                     <div className={css.pizza} key={id}>

                        <Link href={`./pizza/${pizza.slug.current}`}>
                    <div className={css.ImageWrapper}>
                        <Image
                        loader = {() => src}
                        src={src} alt="src" 
                        objectFit="cover" layout="fill"/>
                    </div>              
                        
                    </Link>

                    <span>{pizza.name}</span>
                    <span><span style={{color:"var(--themeRed"}}>$</span> {pizza.price[1]}</span>
                </div>

               
               
            )
        })}
         </div>
    </div>
)
}