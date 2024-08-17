'use client'
import React, { useState } from 'react'
import styles from './links.module.css'
import NavLink from './navLink/NavLink'
function Links() {
    const [open, setOpen] = useState(false)
    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
        { href: '/blog', label: 'Blog' },
    ]
    const session = true
    const isAdmin = true
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map(link => (
                    <NavLink key={link.label} link={link} />
                ))}
                {
                    session ? (
                        <>
                            {
                                isAdmin && <NavLink link={{ href: '/admin', label: 'Admin' }} />
                            }
                            <button className={styles.logout}>Logout</button>
                        </>
                    ) : (
                        <NavLink link={{ href: '/login', label: 'Login' }} />
                    )
                }
            </div>
            <button className={styles.menuButton} onClick={() => setOpen(open => !open)}>Menu</button>
            {
                open && (
                    <div className={styles.mobileLinks}>
                        {links.map(link => (
                            <NavLink key={link.label} link={link} />
                        ))}
                        {/* {
                            session ? (
                                <>
                                    {
                                        isAdmin && <NavLink link={{ href: '/admin', label: 'Admin' }} />
                                    }
                                    <button className={styles.logout}>Logout</button>
                                </>
                            ) : (
                                <NavLink link={{ href: '/login', label: 'Login' }} />
                            )
                        } */}
                    </div>
                )
            }
        </div>
    )
}

export default Links