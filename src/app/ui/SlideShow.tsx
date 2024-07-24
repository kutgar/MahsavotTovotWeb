'use client'
import {Carousel} from '../Components/Carousel'
import {slides} from '../Data/carouselData.json'
import React from 'react';


const SlideShow = () => {


  return (
<div className='flex justify-center'>
    <div className="md:w-10/12 w-96 flex justify-center">
<Carousel data={slides}/>
    </div>
</div>
  );
};

export default SlideShow;
