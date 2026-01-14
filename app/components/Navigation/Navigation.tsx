"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from './style.module.scss'
import {useSession, signIn, signOut} from "next-auth/react";

interface NavLink {
    label: string;
    href: string;
}

interface INavProps {
    navLinks: NavLink[];
}


const Navigation = ({navLinks}: INavProps) => {
    const pathname = usePathname();
    const {data: session, status} = useSession();

    if (status === "loading") {
        return <div>Загрузка...</div>
    }

    return (
        <>
            {navLinks.map((link) => {
                const isActive = pathname === (link.href);

                return (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={
                        `${isActive && `${style.active}`}
                        ${!isActive && `${style.labelColor}`}`}
                    >
                        {link.label}
                    </Link>
                )
            })}

            {session && (
              <Link
                href="/razmeshenie"
                className={`${pathname === "/razmeshenie" && `${style.active}`} ${
                  pathname !== "/razmeshenie" && `${style.labelColor}`
                }`}
              >
                  Специалисты по размещению
              </Link>
            )}
            {session ? (
              <Link
                href="#"
                onClick={() => signOut({callbackUrl: "/"})}
                className={style.labelColor}
              >
                  Выйти
              </Link>
            )
            :
              <Link
                href={"/auth/signin"}
                className={style.labelColor}
              >
                  Войти
              </Link>
            }
        </>
    )
};

export { Navigation };