import fs from "fs";
import matter from "gray-matter";
import path from "path";
import BlogCard from "../../components/blogs/BlogCard";
import styles from "../../components/blogs/Blogs.module.css";
import Layout from "../../layouts/Layout";

export default function Blogs({ blogs }) {
  return (
    <Layout title="Blogs">
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
    </Layout>
  );
}

export const getStaticProps = async () => {
  const fileNames = fs.readdirSync(path.join("data", "blogs"));

  const blogs = fileNames.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const markdownContent = fs.readFileSync(
      path.join("data", "blogs", fileName),
      "utf8"
    );
    const matterData = matter(markdownContent);
    return { slug, ...matterData.data };
  });

  return {
    props: { blogs },
  };
};
