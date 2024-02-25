import Image from "next/image";
import Section from "@/Components/Utils/Section";
import img1 from "@/Assets/BlogImage/img1.jpg";
import Container from "@/Components/Utils/Container";
import Link from "next/link";
import { FaRegCalendarDays, FaStarOfLife } from "react-icons/fa6";
import { LiaCommentSolid } from "react-icons/lia";
import { FaSearch } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const BlogDetails = ({ params }) => {
   const { id } = params;
   console.log(id)
   const title = "Learn Webs Applications Development from Experts";
   const description =
      "Enhance your sales prowess with practical techniques focused on communication, negotiation, and customer relations. This course offers actionable insights for achieving greater success in sales.";
   return (
      <Container>
         <Section>
            <div className="p-[2.5px] grid grid-cols-1 lg:grid-cols-12 gap-3 2xl:p-0">
               <div className="lg:col-span-8">
                  <div className="gap-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                     {/* blog Detail */}
                     <div className="rounded overflow-hidden duration-700 group">
                        <div className="relative ">
                           <Image src={img1} alt="Blog Image" height="fill" width="fill" className="rounded-t transition duration-500 w-full max-h-[540px]" />
                        </div>
                        <div className="p-5 flex flex-col justify-between bg-white">
                           <div className="flex flex-col md:flex-row items-start gap-2 md:gap-5">
                              <div className="flex items-center gap-3">
                                 <Image src={img1} alt="Blog Image" height="fill" width="fill" className="w-7 h-7 rounded-full" />
                                 <p>Sohan Perves</p>
                              </div>
                              <p className="flex justify-center items-center gap-2"><span><FaRegCalendarDays className="text-xl" /></span>24 February, 2024</p>
                              <p className="flex justify-center items-center gap-1"><span><LiaCommentSolid className="text-xl" /></span>No Comments</p>
                           </div>
                           <h1 className="text-xl md:text-2xl font-bold my-5 text-title">{title}</h1>
                           <p className=" mb-5 text-description">
                              When working on a new piece of software, it’s essential to craft a software design document to create a clear and precise vision of the client’s problem and your proposed solution. Software design documents are important for detailing expectations between the software engineer and the client. They help to streamline the coding process before any code is written.
                              <br /><br />
                              Read on to learn how to write great software design documents that improve communication between you and your client, ensuring that everyone is on the same page when working on a project together.
                              <br /><br />
                              What Is a Software Design Document?
                              <br /><br />
                              Before starting a new project with the client, the planning stage involves having a clear vision and agreeing upon design goals. These goals should be laid out in a technical specification document called a software design document.
                              <br /><br />
                              A software developer is usually responsible for creating the software design document. The developer will gather information from a client who wants a new piece of software built and then they will make a document that details the proposed solutions to the client’s problems.
                              <br /><br />
                              What to Include in Your Software Design Document
                              <br /><br />
                              Problems within the coding world tend to vary, and engineering teams and developers often write design documents differently. However, there is a certain software design document template that you can follow to help you include all of the essential pieces of information.
                           </p>

                           <div className="pt-[6%]">
                              <h5 className="text-2xl font-bold mb-5">Tags</h5>
                              <div className="flex flex-wrap gap-5">
                                 <button className="py-1 px-3 rounded bg-primary hover:bg-secondary text-white">Css</button>
                                 <button className="py-1 px-3 rounded bg-primary hover:bg-secondary text-white">HTML</button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Blog Comment Section */}
                  <div className="p-5 bg-white rounded-md mt-5 space-y-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                     <h5 className="text-2xl font-bold mb-5">Leave Comments</h5>
                     <div>
                        <form>
                           <div className="space-y-3">
                              <div>
                                 <label htmlFor="comment" className="flex gap-1">Your Comment <FaStarOfLife className="text-red-600 text-[8px]" /></label>
                                 {/* <textarea class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' required></textarea> */}
                                 <textarea rows={5} cols={5} type="text" name="" id="comment" className="w-full   rounded-md border border-description focus:outline-none" />
                              </div>
                              <div>
                                 <label htmlFor="name" className="flex gap-1">Name <FaStarOfLife className="text-red-600 text-[8px]" /></label>
                                 <input type="text" name="" id="name" className="w-full  rounded-md" />
                              </div>
                              <div>
                                 <label htmlFor="email" className="flex gap-1">Email <FaStarOfLife className="text-red-600 text-[8px]" /></label>
                                 <input type="text" name="" id="email" className="w-full   rounded-md" />
                              </div>
                              <div className="flex items-center gap-3">
                                 <input type="checkbox" name="" id="check" className="rounded-sm outline-none" />
                                 <label htmlFor="check">Save My name, email and website in this browser for the next time I commnet. </label>
                              </div>
                              <div>
                                 <button className="py-2 px-4 rounded-md bg-primary text-white hover:bg-secondary text-xl font-medium">Post Comment</button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
               {/* Filter Layout Start */}
               <div className="rounded-md col-span-1 lg:col-span-4 ">
                  {/* Blog Search Section */}
                  <div className="p-5 flex items-center bg-white rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                     <input class="bg-gray-200 appearance-none border border-gray-100 rounded-l-md w-full p-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-secondary" id="inline-full-name" type="text" value="" placeholder="Search Here..." />
                     <button className="bg-primary text-white py-4 rounded-r-md px-5 hover:bg-secondary"><FaSearch /></button>
                  </div>
                  {/* Recent Blog Section */}
                  <div className="p-5 bg-white rounded-md mt-5 space-y-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                     <h5 className="text-2xl font-bold mb-5">Recent Posts</h5>
                     {/* 1st */}
                     <Link href="#" className="flex items-center gap-3 shadow hover:shadow-[0_2px_5px_rgb(0,0,0,0.2)] rounded">
                        <Image src={img1} alt="Blog Image" height="fill" width="fill" className="w-20 h-14 rounded-t group-hover:scale-105 transition duration-500" />
                        <div className="space-y-1">
                           <h3 className="text-sm md:text-[15px] xl:text-base font-medium leading-5">Expand Your Career Opportunities…</h3>
                           <p className="text-[13px]">January 18, 2023</p>
                        </div>
                     </Link>
                     {/* 2nd */}
                     <Link href="#" className="flex items-center gap-3 shadow hover:shadow-[0_2px_5px_rgb(0,0,0,0.2)] rounded">
                        <Image src={img1} alt="Blog Image" height="fill" width="fill" className="w-20 h-14 rounded-t group-hover:scale-105 transition duration-500" />
                        <div className="space-y-1">
                           <h3 className="text-sm md:text-[15px] xl:text-base font-medium leading-5">Expand Your Career Opportunities…</h3>
                           <p className="text-[13px]">January 18, 2023</p>
                        </div>
                     </Link>
                     {/* 3rd */}
                     <Link href="#" className="flex items-center gap-3 shadow hover:shadow-[0_2px_5px_rgb(0,0,0,0.2)] rounded">
                        <Image src={img1} alt="Blog Image" height="fill" width="fill" className="w-20 h-14 rounded-t group-hover:scale-105 transition duration-500" />
                        <div className="space-y-1">
                           <h3 className="text-sm md:text-[15px] xl:text-base font-medium leading-5">Expand Your Career Opportunities…</h3>
                           <p className="text-[13px]">January 18, 2023</p>
                        </div>
                     </Link>
                     {/* 4th */}
                     <Link href="#" className="flex items-center gap-3 shadow hover:shadow-[0_2px_5px_rgb(0,0,0,0.2)] rounded">
                        <Image src={img1} alt="Blog Image" height="fill" width="fill" className="w-20 h-14 rounded-t group-hover:scale-105 transition duration-500" />
                        <div className="space-y-1">
                           <h3 className="text-sm md:text-[15px] xl:text-base font-medium leading-5">Expand Your Career Opportunities…</h3>
                           <p className="text-[13px]">January 18, 2023</p>
                        </div>
                     </Link>
                     {/* 5th */}
                     <Link href="#" className="flex items-center gap-3 shadow hover:shadow-[0_2px_5px_rgb(0,0,0,0.2)] rounded">
                        <Image src={img1} alt="Blog Image" height="fill" width="fill" className="w-20 h-14 rounded-t group-hover:scale-105 transition duration-500" />
                        <div className="space-y-1">
                           <h3 className="text-sm md:text-[15px] xl:text-base font-medium leading-5">Expand Your Career Opportunities…</h3>
                           <p className="text-[13px]">January 18, 2023</p>
                        </div>
                     </Link>
                  </div>
                  {/* Blog Categories Section */}
                  <div className="p-5 bg-white rounded-md mt-5 space-y-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                     <h5 className="text-2xl font-bold mb-5">Categories</h5>
                     <div>
                        <ul className="space-y-2">
                           <Link href="#" className="flex items-center gap-2 text-base hover:text-primary hover:bg-white rounded-md max-w-max hover:pr-4"><GoDotFill className="text-primary" /> Development</Link>
                           <Link href="#" className="flex items-center gap-2 text-base hover:text-primary hover:bg-white rounded-md max-w-max hover:pr-4"><GoDotFill className="text-primary" /> Business</Link>
                           <Link href="#" className="flex items-center gap-2 text-base hover:text-primary hover:bg-white rounded-md max-w-max hover:pr-4"><GoDotFill className="text-primary" /> Courses</Link>
                           <Link href="#" className="flex items-center gap-2 text-base hover:text-primary hover:bg-white rounded-md max-w-max hover:pr-4"><GoDotFill className="text-primary" /> Education</Link>
                           <Link href="#" className="flex items-center gap-2 text-base hover:text-primary hover:bg-white rounded-md max-w-max hover:pr-4"><GoDotFill className="text-primary" /> Graphics Design</Link>
                           <Link href="#" className="flex items-center gap-2 text-base hover:text-primary hover:bg-white rounded-md max-w-max hover:pr-4"><GoDotFill className="text-primary" /> Digital Marketing</Link>
                        </ul>
                     </div>
                  </div>
                  {/* Blog Archives Section */}
                  <div className="p-5 bg-white rounded-md mt-5 space-y-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                     <h5 className="text-2xl font-bold mb-5">Archives</h5>
                     <div>
                        <ul className="space-y-2">
                           <Link href="#" className="flex items-center gap-2 text-base hover:text-primary hover:bg-white rounded-md max-w-max hover:pr-4"><GoDotFill className="text-primary" /> January 2024</Link>
                        </ul>
                     </div>
                  </div>
                  {/* Blog Tags Section */}
                  <div className="p-5 bg-white rounded-md mt-5 space-y-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                     <h5 className="text-2xl font-bold mb-5">Tags</h5>
                     <div className="flex flex-wrap gap-5">
                        <button className="py-1 px-3 rounded bg-primary hover:bg-secondary text-white">Css</button>
                        <button className="py-1 px-3 rounded bg-primary hover:bg-secondary text-white">HTML</button>
                        <button className="py-1 px-3 rounded bg-primary hover:bg-secondary text-white">Java</button>
                        <button className="py-1 px-3 rounded bg-primary hover:bg-secondary text-white">Java Script</button>
                        <button className="py-1 px-3 rounded bg-primary hover:bg-secondary text-white">React</button>
                     </div>
                  </div>
               </div>
            </div>
         </Section>
      </Container >
   )
};

export default BlogDetails;
