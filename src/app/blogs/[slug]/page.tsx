import BlogContent from "@/components/blogs/BlogContent";
import BlogHeader from "@/components/blogs/BlogHeader";
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
    <div className="items-stretch wrapper">
      {/* Blog title */}
      <BlogHeader blog={blog} />

      {/* Body content of the blog */}
      <BlogContent content={content} />

      {/* Post tags */}
      <div className="flex flex-wrap items-center gap-2 mt-12">
        {blog.tags.map((tag) => (
          <span
            className="px-6 py-1 text-sm border rounded-full border-purple text-purple"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
