import Image from 'next/image';
import React from 'react';

const ReviewCrd = ({ name, image, designation, description }) => {
   return (
      <div className='flex flex-col justify-center items-center pr-4 pt-8'>
         <div className='flex justify-center items-center border-2 w-[400px] md:w-[600px] bg-white shadow-md rounded-lg'>
            <div className='p-4 flex items-center justify-center'>
               <Image className='rounded-lg h-48 w-96' src={image} height="48" width="96" alt="" />
            </div>
            <div className='py-4 '>
               <div className='flex flex-col items-start'>
                  {/*Name*/}
                  <h1 className='text-xl font-mono '>{name}</h1>
                  {/* Designation */}
                  <p className='text-lg text-pink-400 font-medium'>{designation}</p>
               </div>
               {/* Descriiption */}
               <div className='flex flex-col items-center justify-center'>
                  <p>{description}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ReviewCrd;
