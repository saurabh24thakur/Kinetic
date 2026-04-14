"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

const SOLUTIONS = [
    {
        title: "Retail",
        description: "Collaboration tools for the retail value chain.",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3.5 14.5 3-3V3H2v3l3-3" /><path d="M19 16c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" /><path d="M7 16c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" /><path d="M17 16H9" /><path d="M19 16h1l1.33-4.33A2 2 0 0 0 19.41 9H6.42" /><path d="M10 9l-1 4" /></svg>
        ),
    },
    {
        title: "Media and Entertainment",
        description: "Solutions for content production and distribution operations.",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="12" x="3" y="6" rx="2" /><path d="M9 12l4-2v4l-4-2Z" /></svg>
        ),
    },
    {
        title: "Telecommunications",
        description: "Hybrid and multi-cloud services to deploy and monetize 5G.",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
        ),
    },
    {
        title: "Government",
        description: "Data storage, AI, and analytics solutions for government agencies.",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v18Z" /><path d="M6 12H2v8c0 1.1.9 2 2 2h2" /><path d="M18 12h4v8c0 1.1.9 2 2 2h-2" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" /></svg>
        ),
    },
    {
        title: "Gaming",
        description: "AI-driven solutions to build and scale games faster.",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="10" y1="12" y2="12" /><line x1="8" x2="8" y1="10" y2="14" /><rect width="20" height="12" x="2" y="6" rx="2" /><circle cx="15.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="12.5" r=".5" fill="currentColor" /></svg>
        ),
    },
    {
        title: "Education",
        description: "Teaching tools to provide more engaging learning experiences.",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" /></svg>
        ),
    },
];

export default function Navbar() {
    return (
        <nav className={styles.navContainer}>
            <div className={styles.navbar}>
                <div className={styles.leftSection}>
                    <div className={styles.logo}>Kinetic</div>
                    <div className={styles.navLinks}>
                       
                        <Link href="#" className={styles.navItem}>About</Link>
                        <Link href="#" className={styles.navItem}>Contact</Link>
                       
                    </div>
                </div>

                <div className={styles.rightSection}>
                    
                    <div className={styles.userProfile}>
                        <img src="https://i.pravatar.cc/150?u=saurabh" alt="Profile" />
                    </div>
                </div>
            </div>
        </nav>
    );
}
