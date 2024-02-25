import Section from "@/Components/Utils/Section";
import Image from "next/image";
import img1 from "@/Assets/BlogImage/img1.jpg";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots, FaRegUserCircle, FaSearch } from "react-icons/fa";
import { LuMoveRight } from "react-icons/lu";
import ShareButton from "@/Components/WebLayoutComponents/Home/Blog/ShareButton";
import Container from "@/Components/Utils/Container";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
const BlogPage = () => {
  const title = "Sales Training: Practical Techniques";
  const description =
    "Enhance your sales prowess with practical techniques focused on communication, negotiation, and customer relations. This course offers actionable insights for achieving greater success in sales.";
  return (
    <Container>
      <Section>
        <div className="p-[2.5px] grid grid-cols-1 lg:grid-cols-12 gap-3 2xl:p-0">
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-3 ">
              {/* 1st Card Start */}
              <div className=" shadow hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded overflow-hidden duration-700 group">
                <div className="relative ">
                  <Image src={img1} alt="Blog Image" height="fill" width="fill" className="rounded-t group-hover:scale-105 transition duration-500" />
                  <p className="absolute py-1 px-3 bg-primary text-white rounded-md top-3 left-3">Feb 20, 2024</p>
                </div>
                <div className="p-5 flex flex-col justify-between bg-white">
                  <p className="py-1 px-3 bg-primary max-w-max rounded-3xl text-sm text-white mb-2">Digital Marketing</p>
                  <h2 className="text-xl font-bold mb-3">{title.slice(0, 40)}</h2>
                  <h4 className=" mb-5 text-gray-600">{description.slice(0, 75)} ...</h4>
                  <div className="flex  justify-between items-center shadow-sm">
                    <p className="flex justify-center items-center gap-1"><span><FaRegUserCircle /></span>BySohanPerves</p>
                    <div className="flex justify-between items-center gap-4 md:gap-2">
                      <p className="flex justify-center items-center gap-1"><span><FaCommentDots /></span>10</p>
                      <p className="flex justify-center items-center gap-1"><span><AiFillLike /></span>100</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-[6%]">
                    <Link href={`/blog/1`} className="flex items-center gap-2 shadow-md py-1 px-3 hover:bg-primary rounded-md hover:text-white hover:duration-500 group-[share]: max-w-max">Read More
                      <span><LuMoveRight className="hover:duration-500 w-3 share-hover:w-full" /></span>
                    </Link>
                    <ShareButton />
                  </div>
                </div>
              </div>
              {/* 1st Card End */}
              {/* 2nd Card Start */}
              <div className=" shadow hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded overflow-hidden duration-700 group">
                <div className="relative ">
                  <Image src={img1} alt="Blog Image" height="fill" width="fill" className="rounded-t group-hover:scale-105 transition duration-500" />
                  <p className="absolute py-1 px-3 bg-primary text-white rounded-md top-3 left-3">Feb 20, 2024</p>
                </div>
                <div className="p-5 flex flex-col justify-between bg-white">
                  <p className="py-1 px-3 bg-primary max-w-max rounded-3xl text-sm text-white mb-2">Digital Marketing</p>
                  <h2 className="text-xl font-bold mb-3">{title.slice(0, 40)}</h2>
                  <h4 className=" mb-5 text-gray-600">{description.slice(0, 75)} ...</h4>
                  <div className="flex  justify-between items-center shadow-sm">
                    <p className="flex justify-center items-center gap-1"><span><FaRegUserCircle /></span>BySohanPerves</p>
                    <div className="flex justify-between items-center gap-4">
                      <p className="flex justify-center items-center gap-1"><span><FaCommentDots /></span>10</p>
                      <p className="flex justify-center items-center gap-1"><span><AiFillLike /></span>100</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-[6%]">
                    <Link href={`/blog/2`} className="flex items-center gap-2 shadow-md py-1 px-3 hover:bg-primary rounded-md hover:text-white hover:duration-500 group-[share]: max-w-max">Read More
                      <span><LuMoveRight className="hover:duration-500 w-3 share-hover:w-full" /></span>
                    </Link>
                    <ShareButton />
                  </div>
                </div>
              </div>
              {/* 2nd Card End */}
              {/* 3rd Card Start */}
              <div className=" shadow hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded overflow-hidden duration-700 group">
                <div className="relative ">
                  <Image src={img1} alt="Blog Image" height="fill" width="fill" className="rounded-t group-hover:scale-105 transition duration-500" />
                  <p className="absolute py-1 px-3 bg-primary text-white rounded-md top-3 left-3">Feb 20, 2024</p>
                </div>
                <div className="p-5 flex flex-col justify-between bg-white">
                  <p className="py-1 px-3 bg-primary max-w-max rounded-3xl text-sm text-white mb-2">Digital Marketing</p>
                  <h2 className="text-xl font-bold mb-3">{title.slice(0, 40)}</h2>
                  <h4 className=" mb-5 text-gray-600">{description.slice(0, 75)} ...</h4>
                  <div className="flex  justify-between items-center shadow-sm">
                    <p className="flex justify-center items-center gap-1"><span><FaRegUserCircle /></span>BySohanPerves</p>
                    <div className="flex justify-between items-center gap-4">
                      <p className="flex justify-center items-center gap-1"><span><FaCommentDots /></span>10</p>
                      <p className="flex justify-center items-center gap-1"><span><AiFillLike /></span>100</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-[6%]">
                    <Link href={`/blog/3`} className="flex items-center gap-2 shadow-md py-1 px-3 hover:bg-primary rounded-md hover:text-white hover:duration-500 group-[share]: max-w-max">Read More
                      <span><LuMoveRight className="hover:duration-500 w-3 share-hover:w-full" /></span>
                    </Link>
                    <ShareButton />
                  </div>
                </div>
              </div>
              {/* 3rd Card End */}
              {/* 4th Card Start */}
              <div className=" shadow hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded overflow-hidden duration-700 group">
                <div className="relative ">
                  <Image src={img1} alt="Blog Image" height="fill" width="fill" className="rounded-t group-hover:scale-105 transition duration-500" />
                  <p className="absolute py-1 px-3 bg-primary text-white rounded-md top-3 left-3">Feb 20, 2024</p>
                </div>
                <div className="p-5 flex flex-col justify-between bg-white">
                  <p className="py-1 px-3 bg-primary max-w-max rounded-3xl text-sm text-white mb-2">Digital Marketing</p>
                  <h2 className="text-xl font-bold mb-3">{title.slice(0, 40)}</h2>
                  <h4 className=" mb-5 text-gray-600">{description.slice(0, 75)} ...</h4>
                  <div className="flex  justify-between items-center shadow-sm">
                    <p className="flex justify-center items-center gap-1"><span><FaRegUserCircle /></span>BySohanPerves</p>
                    <div className="flex justify-between items-center gap-4">
                      <p className="flex justify-center items-center gap-1"><span><FaCommentDots /></span>10</p>
                      <p className="flex justify-center items-center gap-1"><span><AiFillLike /></span>100</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-[6%]">
                    <Link href={`/blog/4`} className="flex items-center gap-2 shadow-md py-1 px-3 hover:bg-primary rounded-md hover:text-white hover:duration-500 group-[share]: max-w-max">Read More
                      <span><LuMoveRight className="hover:duration-500 w-3 share-hover:w-full" /></span>
                    </Link>
                    <ShareButton />
                  </div>
                </div>
              </div>
              {/* 4th Card End */}
              {/* 5th Card Start */}
              <div className=" shadow hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded overflow-hidden duration-700 group">
                <div className="relative ">
                  <Image src={img1} alt="Blog Image" height="fill" width="fill" className="rounded-t group-hover:scale-105 transition duration-500" />
                  <p className="absolute py-1 px-3 bg-primary text-white rounded-md top-3 left-3">Feb 20, 2024</p>
                </div>
                <div className="p-5 flex flex-col justify-between bg-white">
                  <p className="py-1 px-3 bg-primary max-w-max rounded-3xl text-sm text-white mb-2">Digital Marketing</p>
                  <h2 className="text-xl font-bold mb-3">{title.slice(0, 40)}</h2>
                  <h4 className=" mb-5 text-gray-600">{description.slice(0, 75)} ...</h4>
                  <div className="flex  justify-between items-center shadow-sm">
                    <p className="flex justify-center items-center gap-1"><span><FaRegUserCircle /></span>BySohanPerves</p>
                    <div className="flex justify-between items-center gap-4">
                      <p className="flex justify-center items-center gap-1"><span><FaCommentDots /></span>10</p>
                      <p className="flex justify-center items-center gap-1"><span><AiFillLike /></span>100</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-[6%]">
                    <Link href={`/blog/5`} className="flex items-center gap-2 shadow-md py-1 px-3 hover:bg-primary rounded-md hover:text-white hover:duration-500 group-[share]: max-w-max">Read More
                      <span><LuMoveRight className="hover:duration-500 w-3 share-hover:w-full" /></span>
                    </Link>
                    <ShareButton />
                  </div>
                </div>
              </div>
              {/* 5th Card End */}
              {/* 6th Card Start */}
              <div className=" shadow hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded overflow-hidden duration-700 group">
                <div className="relative ">
                  <Image src={img1} alt="Blog Image" height="fill" width="fill" className="rounded-t group-hover:scale-105 transition duration-500" />
                  <p className="absolute py-1 px-3 bg-primary text-white rounded-md top-3 left-3">Feb 20, 2024</p>
                </div>
                <div className="p-5 flex flex-col justify-between bg-white">
                  <p className="py-1 px-3 bg-primary max-w-max rounded-3xl text-sm text-white mb-2">Digital Marketing</p>
                  <h2 className="text-xl font-bold mb-3">{title.slice(0, 40)}</h2>
                  <h4 className=" mb-5 text-gray-600">{description.slice(0, 75)} ...</h4>
                  <div className="flex  justify-between items-center shadow-sm">
                    <p className="flex justify-center items-center gap-1"><span><FaRegUserCircle /></span>BySohanPerves</p>
                    <div className="flex justify-between items-center gap-4">
                      <p className="flex justify-center items-center gap-1"><span><FaCommentDots /></span>10</p>
                      <p className="flex justify-center items-center gap-1"><span><AiFillLike /></span>100</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-[6%]">
                    <Link href={`/blog/6`} className="flex items-center gap-2 shadow-md py-1 px-3 hover:bg-primary rounded-md hover:text-white hover:duration-500 group-[share]: max-w-max">Read More
                      <span><LuMoveRight className="hover:duration-500 w-3 share-hover:w-full" /></span>
                    </Link>
                    <ShareButton />
                  </div>
                </div>
              </div>
              {/* 6th Card End */}
            </div>
            {/* Blog Pagination */}
            <nav className="flex items-center gap-x-1 my-5">
              <button type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-black dark:hover:bg-black/10 dark:focus:bg-black/10">
                <FaAngleLeft />
                <span aria-hidden="true" className="sr-only">Previous</span>
              </button>
              <div className="flex items-center gap-x-1">
                <button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-black dark:focus:bg-black/10" aria-current="page">1</button>
                <button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-black dark:hover:bg-black/10 dark:focus:bg-black/10">2</button>
                <button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-black dark:hover:bg-black/10 dark:focus:bg-black/10">3</button>
              </div>
              <button type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:text-black dark:hover:bg-black/10 dark:focus:bg-black/10">
                <span aria-hidden="true" className="sr-only">Next</span>
                <FaAngleRight />
              </button>
            </nav>

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

export default BlogPage;
