import { getImageSrc } from "@/utils/getImageSrc";
import Image from "next/image";
import Link from "next/link";
import styles from "./Blogs.module.css";
import { Blog } from "@/types/types";

interface Props {
  blog: Blog;
}

export default function BlogCard({ blog }: Props) {
  return (
    <div className="mb-5 mt-1 col-md-6 col-lg-4">
      {/* Blog thumbnail */}
      <Link href={`/blogs/${blog.slug}`}>
        <Image
          src={getImageSrc(blog.thumbnail)}
          alt="blog thumbnail"
          height={250}
          width={400}
          style={{ objectFit: "cover" }}
        />
      </Link>

      {/* Blog categories */}
      <div className={`mt-3 mb-2 text-uppercase ${styles.postDate}`}>
        {blog.date}
      </div>

      {/* Blog title */}
      <h5 className="mt-2 mb-4 text-truncate">
        <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
      </h5>

      {/* Blog subtitle */}
      {/* <h6 className="text-muted">{blog.subtitle}</h6> */}

      <div className={styles.postFooter}>
        {/* Author's details */}
        <div className="flex-wrap d-flex align-items-center">
          <div className={styles.postAuthorAvatar}>
            <Image
              src={getImageSrc(blog.author.avatar)}
              alt="Author profile avatar"
              height={40}
              width={40}
              layout="responsive"
            />
          </div>
          <div className={styles.postAuthor}>
            <span>{blog.author.name}</span>
          </div>
        </div>

        {/* Blog stats */}
        <div className="d-flex align-items-center gap-2">
          <i className="fa-regular fa-clock"></i>
          <span>{blog.date}</span>
        </div>
      </div>
    </div>
  );
}
