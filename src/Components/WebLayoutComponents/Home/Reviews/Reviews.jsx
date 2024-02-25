"use client"

import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import ReviewCrd from './ReviewCrd';

const Reviews = () => {
   const arr = ["aditya", "paul"]
   const [reviews, setReviews] = useState([]);
   useEffect(() => {
      const fetchData = async () => {
         const res = await fetch('/reviews.json');
         const data = await res.json();
         setReviews(data);
      };

      fetchData();
   }, []);

   return (
      <div className=''>
         <Marquee >
            {
               reviews.map(data =>
                  <div key={data.name}>
                     <ReviewCrd name={data.name} image={data.image} designation={data.designation} description={data.description}></ReviewCrd>
                  </div>
               )
            }
         </Marquee>


      </div>
   );
};

export default Reviews;
