import style from './style.module.scss'
import {Navigation} from "@/app/components/Navigation/Navigation";
import Image from "next/image";
import Kosmo from '../../../public/pictures/kosmo.webp'
import Link from "next/link";

const navItems = [
    {label: 'Домой', href: '/'},
    // {label: 'Специалисты по размещению', href: '/razmeshenie'},
    // {label: 'About', href: '/about'},
];


const TheHeader = () => {
    return (
        <header className={style.headFoot}>
            <div className={`${style.container} ${style.headFootWrapper} ${style.flex}`}>
							<Link href='/'>
								<Image
									src={Kosmo}
									alt="Kosmo"
									width="60"
									height="60"
									className={style.img}
								/>
							</Link>
							<div className={`${style.flex} ${style.flexCol}`}>
								<Navigation navLinks={navItems} />
							</div>
            </div>
        </header>
    )
}

export {TheHeader}