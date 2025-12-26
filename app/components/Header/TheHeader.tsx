import style from './style.module.scss'
import {Navigation} from "@/app/components/Navigation/Navigation";

const navItems = [
    {label: 'Домой', href: '/'},
    {label: 'Специалисты по размещению', href: '/razmeshenie'},
    // {label: 'About', href: '/about'},
];


const TheHeader = () => {
    return (
        <header className={style.headFoot}>
            <div className={`${style.container} ${style.headFootWrapper} ${style.flex}`}>
                <Navigation navLinks={navItems} />
            </div>
        </header>
    )
}

export {TheHeader}