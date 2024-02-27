import Section from "@/Components/Utils/Section";
import Image from "next/image";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import ShareButton from "@/Components/WebLayoutComponents/Home/Blog/ShareButton";
import Container from "@/Components/Utils/Container";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import { FaAngleLeft, FaAngleRight, FaRegCommentDots } from "react-icons/fa6";
import RouteBanner from "@/Components/WebLayoutComponents/Shared/RouteBanner/RouteBanner";
import { promises as fs } from 'fs'
import { BiLike } from "react-icons/bi";
import DetailsButton from "@/Components/WebLayoutComponents/Shared/Cards/DetailsButton";

const BlogPage = async () => {
  const file = await fs.readFile(process.cwd() + '/public/blogData.json', 'utf8');
  const blogData = JSON.parse(file);

  return (
    <>
      <RouteBanner title={'Blog'} />
      <Section>
        <Container>
          <div className="p-[2.5px] grid grid-cols-1 lg:grid-cols-12 gap-3 2xl:p-0">
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-3 ">
                {/* Blog Card */}
                {
                  blogData?.slice(0, 6).map((data, index) => (
                    <div key={index} className="  shadow-[0px_0px_5px_1px_rgba(17,17,26,.3)] hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-md duration-500 group">
                      {/* Image  */}
                      <div className="relative min-w-[318px] max-w-[458px] h-80 rounded-t-md overflow-hidden">
                        <Image
                          src={data?.img}
                          alt="Blog Image"
                          layout="fill"
                          className="rounded-t min-w-[318px] max-w-[458px] h-80 object-cover group-hover:scale-105 transition duration-500"
                        />
                        <p className="absolute py-1 px-3 bg-primary text-white rounded-md top-3 left-3">
                          {data?.publish_date}
                        </p>
                      </div>
                      {/* Blog Content */}
                      <div className="p-4 flex flex-col justify-between">
                        <p className="py-1 -mt-2 px-3 bg-primary max-w-max rounded-3xl text-sm text-white mb-2">
                          {data?.category}
                        </p>
                        <h2 className="text-xl text-title font-bold mb-2 truncate">{data?.title}</h2>
                        <h4 className=" mb-4 text-gray-500 line-clamp-3 text-justif">{data?.description?.slice(0, 85)} ...</h4>
                        <div className="flex  justify-between items-center shadow-sm">
                          <p className="flex text-description justify-center items-center gap-1">
                            <span className="text-primary flex justify-center items-center">
                              <FaRegUserCircle size={18} />
                            </span>
                            {data?.author}
                          </p>
                          <div className="flex justify-between items-center gap-4">
                            <p className="text-description flex  justify-center items-center gap-1">
                              <span className="text-primary flex justify-center items-center">
                                <FaRegCommentDots size={18} />
                              </span>
                              {data?.comments}
                            </p>
                            <p className="text-description flex justify-center items-center gap-1">
                              <span className="text-primary flex justify-center items-center">
                                <BiLike size={20} />
                              </span>
                              {data?.like}
                            </p>
                          </div>
                        </div>
                        <div className="relative flex justify-between items-center pt-[6%] overflow-hid rounded-[10px]">
                          <DetailsButton name={'Read More'} linkPath={`/blog/${data?.id}`} />
                          <ShareButton />
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
              {/* Blog Pagination */}
              <nav className="flex items-center gap-x-1 pt-5">
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
                {/* Blog Card */}
                {
                  blogData?.slice(0, 5)?.map((post, index) =>
                    <Link key={index} href={`/blog/${post?.id}`} className="flex items-center gap-3 shadow hover:shadow-[0_2px_5px_rgb(0,0,0,0.2)] rounded">
                      <div className="w-20 h-20">
                        <Image src={post?.img} alt="Blog Image" height="80" width="80" className="w-20 h-20 object-cover rounded-t group-hover:scale-105 transition duration-500" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm md:text-[15px] xl:text-base font-medium leading-5">{post.title?.slice(0, 40)}...</h3>
                        <p className="text-[13px]">{post?.publish_date}</p>
                      </div>
                    </Link>)
                }
              </div>
              {/* Blog Categories Section */}
              <div className="p-5 bg-white rounded-md mt-5 space-y-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <h5 className="text-2xl font-bold mb-5">Categories</h5>
                <div>
                  <ul className="space-y-2">
                    {/* blog Category Card */}
                    {
                      blogData?.slice(0, 8).map(data => (
                        <Link key={data?.id} href="#" className="flex items-center gap-2 text-base hover:text-primary hover:bg-white rounded-md max-w-max hover:pr-4"><GoDotFill className="text-primary" /> {data?.category}</Link>
                      ))
                    }
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
        </Container>
      </Section >
    </>
  )
};

export default BlogPage;
