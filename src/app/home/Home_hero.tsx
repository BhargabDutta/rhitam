"use client";
import React from 'react'
import hero from "@/components/hero.png";
import Image from 'next/image';
import styles from "@/components/style/home_hero.module.css";
const Home_hero = () => {
  return (
    <div>
       <Image src={hero} alt="Hero Image" layout="responsive" className={styles.image}/>
    </div>
  )
}

export default Home_hero;