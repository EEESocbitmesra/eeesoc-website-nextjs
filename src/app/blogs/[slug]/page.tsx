import BlogContent from "@/components/blogs/BlogContent";
import BlogHeader from "@/components/blogs/BlogHeader";
import styles from "@/components/blogs/Blogs.module.css";
import { Blog } from "@/types/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const metadata = {
  title: "EEESoc BIT Mesra | Blogs",
};

interface Params {
  params: {
    slug: string;
  };
}

export default function SingleBlog({ params }: Params) {
  const markdownContent = fs.readFileSync(
    path.join("src", "data", "blogs", params.slug + ".md")
  );

  const matterMarkdown = matter(markdownContent);

  const content = matterMarkdown.content;
  const blog = matterMarkdown.data as Blog;

  return (
    <div className="mx-auto w-md vertical-padding mt-5 col-lg-8">
      {/* Blog title */}
      <BlogHeader blog={blog} />

      {/* Body content of the blog */}
      <BlogContent content={content} />

      {/* Post tags */}
      <div className={styles.postTags}>
        {blog.tags.map((tag) => (
          <span className={styles.postTag} key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
