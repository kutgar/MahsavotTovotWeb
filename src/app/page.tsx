import Image from "next/image";
import Head from 'next/head';
import Link from 'next/link';
import '@/app/ui/globals.css';
import styles from '@/app/ui/home.module.css';
import Header from "./ui/header";
import { lusitana } from '@/app/ui/fonts';
import SlideShow from "./ui/SlideShow";
import {shareWords} from './Data/he.json'
import {FirstSectionMainPage,SecondSectionMainPage,ThirdSectionMainPage,FoursSectionMainPage} from './Components/SectionsMainPage'


export default function Home() {
  return (
    <main>
      <FirstSectionMainPage></FirstSectionMainPage>
      <SecondSectionMainPage></SecondSectionMainPage>
      <ThirdSectionMainPage></ThirdSectionMainPage>
      <FoursSectionMainPage></FoursSectionMainPage>
    </main>   
  );
}


    // <main>
    //   <div className={`${lusitana.className} `}>
    //     <h1 className="text-5xl text-blue-500"> מחשבות טובות</h1>
    //     <Image
    //       src="/GroupImage.JPG"
    //       width={1000}
    //       height={760}
    //       className="hidden md:block"
    //       alt="Screenshots of the group"
    //     />
    //   </div>
    // </main>
