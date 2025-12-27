"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from './style.module.scss'
// import {useSession, signIn, signOut} from "next-auth/react";

interface NavLink {
    label: string;
    href: string;
}

interface INavProps {
    navLinks: NavLink[];
}


const Navigation = ({navLinks}: INavProps) => {
    const pathname = usePathname();
    // const session = useSession();

    // console.log(session)

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

            {/*{session?.data && (*/}
            {/*   <Link href='/profile'>Profile</Link>*/}
            {/*)}*/}

            {/*{session?.data ?*/}
            {/*    <Link href="#" onClick={() => signOut({*/}
            {/*        callbackUrl: "/"*/}
            {/*    })}>Sign Out</Link>*/}
            {/*    :*/}
            {/*    <Link href={`/api/auth/signin?callbackUrl=${encodeURIComponent(pathname)}`}>*/}
            {/*        Sign In*/}
            {/*    </Link>*/}

            {/*    // <Link href="/api/auth/signin">Sign In</Link>*/}
            {/*}*/}
        </>
    )
};

export { Navigation };