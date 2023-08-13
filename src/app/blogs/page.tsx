import fs from "fs";
import matter from "gray-matter";
import path from "path";
import styles from "@/components/blogs/Blogs.module.css";
import BlogCard from "@/components/blogs/BlogCard";
import { Blog } from "@/types/types";
import { pageTitle } from "@/data/constants";

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
    <div className="vertical-padding pb-3 pb-lg-5 mt-5">
      <h1 className="text-center fs-1">Blogs</h1>

      <div className={`mx-auto mt-5 col-lg-10 ${styles.postsListing}`}>
        <div className="container">
          <div className="row">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
