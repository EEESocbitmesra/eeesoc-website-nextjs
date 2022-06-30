import fs from "fs";
import matter from "gray-matter";
import path from "path";
import BlogContent from "../../components/blogs/BlogContent";
import BlogHeader from "../../components/blogs/BlogHeader";
import Layout from "../../layouts/Layout";
import styles from "../../components/blogs/Blogs.module.css";

export default function SingleBlog({ content, metaData }) {
  return (
    <Layout title={metaData.title}>
      <div className="mx-auto w-md vertical-padding mt-5 col-lg-8">
        {/* Blog title */}
        <BlogHeader metaData={metaData} />

        {/* Body content of the blog */}
        <BlogContent content={content} />

        {/* Post tags */}
        <div className={styles.postTags}>
          {metaData.tags.map((tag) => (
            <span className={styles.postTag} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const fileNames = fs.readdirSync(path.join("data", "blogs"));
  const paths = fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(".md", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownContent = fs.readFileSync(
    path.join("data", "blogs", slug + ".md")
  );

  const matterMarkdown = matter(markdownContent);

  const content = matterMarkdown.content;
  const metaData = matterMarkdown.data;

  return {
    props: {
      content,
      metaData,
    },
  };
};
