import Image from 'next/image';
import img1 from "../../../../../public/img8.jpg"
import { GoDotFill } from "react-icons/go";
import { LuMoveRight } from "react-icons/lu";
import ShareButton from './ShareButton';
import "./divider.css"
import Section from '@/Components/Utils/Section';

const Blog = () => {
   const initialText = 'Sales Training: Practical Techniques';
   return (
      <div className='max-w-screen-xl mx-auto'>
         {/* Header for Blog Section */}
         <Section>
            <div className='flex flex-col items-center pb-12'>
               <h5 className='py-1 px-3 bg-[#2a5a1e] rounded text-white'>News feeds</h5>
               <h3 className='text-3xl md:text-4xl font-bold pt-2'>Latest News & Articles</h3>
               <span className="section-divider"></span>
            </div>
            {/* Blog Card */}
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-3 px-[2.5px] lg:px-[8%] xl:px-0'>
               <div className='min-w-[370px] max-w-[420px] h-[446px] shadow hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded overflow-hidden hover:-translate-y-1 duration-700'>
                  <div className='relative'>
                     <Image src={img1} alt='Blog Image' height="fill" width="fill" className='rounded-t' />
                     <p className='absolute py-1 px-3 bg-primary text-white rounded-md top-3 left-3'>Feb 20, 2024</p>
                  </div>
                  <div className='p-5 flex flex-col justify-between'>
                     <h2 className='text-xl font-bold mb-5'>{initialText.slice(0, 38)}...</h2>
                     <div className='flex  justify-between items-center'>
                        <p>BySohanPerves</p>
                        <GoDotFill className='w-3 h-3' />
                        <p>0 Comments</p>
                        <GoDotFill className='w-3 h-3' />
                        <p>100 Likes</p>
                     </div>
                     <div className='flex justify-between items-center pt-[7%]'>
                        <button className='flex items-center gap-2 shadow-md py-1 px-3 hover:bg-primary rounded-md hover:text-white hover:duration-500'>Read More <span><LuMoveRight /></span></button>
                        <ShareButton />
                     </div>
                  </div>
               </div>
               <div className='min-w-[370px] max-w-[420px] h-[446px] shadow hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded overflow-hidden hover:-translate-y-1 duration-700'>
                  <div className='relative'>
                     <Image src={img1} alt='Blog Image' height="fill" width="fill" className='rounded-t' />
                     <p className='absolute py-1 px-3 bg-primary text-white rounded-md top-3 left-3'>Feb 20, 2024</p>
                  </div>
                  <div className='p-5 flex flex-col justify-between'>
                     <h2 className='text-xl font-bold mb-5'>{initialText.slice(0, 38)}...</h2>
                     <div className='flex  justify-between items-center'>
                        <p>BySohanPerves</p>
                        <GoDotFill className='w-3 h-3' />
                        <p>0 Comments</p>
                        <GoDotFill className='w-3 h-3' />
                        <p>100 Likes</p>
                     </div>
                     <div className='flex justify-between items-center pt-[7%]'>
                        <button className='flex items-center gap-2 shadow-md py-1 px-3 hover:bg-primary rounded-md hover:text-white hover:duration-500'>Read More <span><LuMoveRight /></span></button>
                        <ShareButton />
                     </div>
                  </div>
               </div>
               <div className='min-w-[370px] max-w-[420px] h-[446px] shadow hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded overflow-hidden hover:-translate-y-1 duration-700'>
                  <div className='relative'>
                     <Image src={img1} alt='Blog Image' height="fill" width="fill" className='rounded-t' />
                     <p className='absolute py-1 px-3 bg-primary text-white rounded-md top-3 left-3'>Feb 20, 2024</p>
                  </div>
                  <div className='p-5 flex flex-col justify-between'>
                     <h2 className='text-xl font-bold mb-5'>{initialText.slice(0, 38)}...</h2>
                     <div className='flex  justify-between items-center'>
                        <p>BySohanPerves</p>
                        <GoDotFill className='w-3 h-3' />
                        <p>0 Comments</p>
                        <GoDotFill className='w-3 h-3' />
                        <p>100 Likes</p>
                     </div>
                     <div className='flex justify-between items-center pt-[7%]'>
                        <button className='flex items-center gap-2 shadow-md py-1 px-3 hover:bg-primary rounded-md hover:text-white hover:duration-500 '>Read More <span><LuMoveRight /></span></button>
                        <ShareButton />
                     </div>
                  </div>
               </div>
            </div>
            {/* See More Button */}
            <div className='flex justify-center my-12'>
               <button className='text-2xl font-semibold flex items-center gap-2 shadow py-1 px-3 bg-primary rounded-md hover:bg-white hover:text-primary hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] text-white hover:duration-300'>See More <span><LuMoveRight /></span></button>
            </div>
         </Section>
      </div>
   );
};

export default Blog;