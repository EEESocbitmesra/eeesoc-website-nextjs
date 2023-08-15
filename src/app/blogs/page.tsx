import BlogCard from "@/components/blogs/BlogCard";
import { pageTitle } from "@/data/constants";
import { Blog } from "@/types/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const metadata = {
  title: `${pageTitle} | Blogs`,
};

export default function Blogs() {
  const fileNames = fs.readdirSync(path.join("src", "data", "blogs"));

  const blogs = fileNames.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const markdownContent = fs.readFileSync(
      path.join("src", "data", "blogs", fileName),
      "utf8"
    );
    const matterData = matter(markdownContent);
    return { slug, ...matterData.data } as Blog;
  });

  return (
    <div className="wrapper">
      <h1 className="text-center">Blogs</h1>

      <div className="flex flex-wrap items-stretch justify-center w-full gap-4 mt-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
}
