'use client'
import {shareWords} from '@/app/Data/he.json'
import Image from "next/image";
import SlideShow from "@/app/ui/SlideShow";
import '@/app/ui/globals.css';
import styles from '@/app/ui/home.module.css';

export function FirstSectionMainPage () {
    return (
        <section className="bg-cyan-300 px-10">
          <div className="md:flex md:flex-row md:flex-row-reverse items-center">
            <div className="flex-auto text-center">
              <h1 className="font-serif text-5xl md:text-9xl text-blue-500">{shareWords.MainTittle}</h1>
              <p className="text-pretty text-xl md:text-3xl"> {shareWords.MainPrhase}</p>
            </div>
            <div>
              <video className="mx-auto py-4 px-4" autoPlay loop muted controls preload="none">
                <source src="/intro.mp4" type="video/mp4" />
                <track
                  src="/intro.mp4"
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
    );
  }

export function SecondSectionMainPage () {
  return (
    <section className="md:flex md:flex-row md:flex-row-reverse md:items-center w-full bg-emerald-200 px-10">
      <div dir="rtl" className="md:w-2/4 text-center">
          <h2 className="font-serif text-blue-900	text-5xl md:text-9xl md:mb-16 mb-8"> {shareWords.SecondTittleStart} <br></br> {shareWords.SecondTittleEnd} </h2> 
          <div className="text-orange-900 md:text-2xl text-1xl md:mb-16 mb-8">
            <p className="md:mb-16 mb-8"> {shareWords.yakovSpeach.prhase_one}</p>
            <p className="md:mb-16 mb-8"> {shareWords.yakovSpeach.prhase_two}</p>
            <p className="md:mb-16 mb-8"> {shareWords.yakovSpeach.prhase_tree}</p>
            <p> {shareWords.yakovSpeach.prhase_four}</p>
          </div>
      </div>
      <div className="md:w-2/4 md:mr-20">
          <Image
                src="/hero.JPG"
                width={1000}
                height={760}
                alt=""
                className="rounded-lg"
              />
      </div>
    </section> 
  );
}

export function ThirdSectionMainPage () {
  return (
    <section className="bg-cyan-300 px-10">
      <SlideShow></SlideShow>

    </section>
  );
}

export function FoursSectionMainPage () {
  return (
    <section className="bg-black px-10">
    <footer className={styles.footer}>
      <p className='text-white'>© {new Date().getFullYear()} Donation Site. All rights reserved.</p>
    </footer>
  </section>
  );
}