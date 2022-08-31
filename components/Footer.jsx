
import { UilFacebook, UilGithub, UilIstagram } from '@iconscout/react-unicons'
import css from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <div className={css.container}>
            <span>ALL RIGHT RESERVED</span>
            <div className={css.social}>
                <UilFacebook />
                <UilGithub />
                <UilIstagram />
            </div>
        </div>
    )
} 