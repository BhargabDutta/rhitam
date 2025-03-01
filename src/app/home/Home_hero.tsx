"use client";
import React from 'react'
import hero from "@/components/hero.png";
import hero_phone from "@/components/hero_phone.png";
import Image from 'next/image';
import styles from "@/components/style/home_hero.module.css";
const Home_hero = () => {
  return (
    <div>
       <Image src={hero} alt="Hero Image" layout="responsive" className={styles.image}/>

       <Image src={hero_phone} alt="Hero Image" layout="responsive" className={styles.image_phone}/>
    </div>
  )
}

export default Home_hero;