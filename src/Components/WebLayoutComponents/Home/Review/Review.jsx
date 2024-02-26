"use client"

import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import ReviewCard from './ReviewCard';

const Review = () => {
   const arr = ["aditya", "paul"]
   const [reviews, setReviews] = useState([]);
   useEffect(() => {
      const fetchData = async () => {
         const res = await fetch('/review.json');
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
                     <ReviewCard name={data.name} image={data.image} designation={data.designation} description={data.description}></ReviewCard>
                  </div>
               )
            }
         </Marquee>


      </div>
   );
};

export default Review;
