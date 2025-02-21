import BlogPost from "./blog";
import { BlogPostProps } from "./blog";

import articleImg from "../../assets/hero/SOne_index_banner.jpg";

const blogPosts: BlogPostProps[] = [
  {
    date: {
      day: 19,
      month: "NOV",
      year: 2014,
    },
    image: articleImg,
    title: "ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม",
  },
  {
    date: {
      day: 19,
      month: "NOV",
      year: 2014,
    },
    image: articleImg,
    title: "ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม",
  },
  {
    date: {
      day: 19,
      month: "NOV",
      year: 2014,
    },
    image: articleImg,
    title: "ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม",
  },
];

export default function Article() {
  return (
    <div className="w-full max-w-[600px]">
      {" "}
      {/* Adjust width to match image */}
      <div className="border border-primary-orange">
        <div className="flex justify-between items-center bg-white p-2 border-b">
          <h1>News & Events</h1>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-primary-orange rounded-full"></div>
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </div>
        </div>

        <div className="flex">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
