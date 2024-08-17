'use client'
import Link from 'next/link'
import React from 'react'
import styles from './navLink.module.css'
import { usePathname } from 'next/navigation'
function NavLink({ link }) {
    const pathName = usePathname()
    return (
        <Link
            className={`${styles.container} ${pathName === link.href ? styles.active : ''}`}
            key={link.href} href={link.href}
        >
            {link.label}
        </Link>
    )
}

export default NavLink