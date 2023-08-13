import { Blog } from "@/types/types";
import styles from "./Blogs.module.css";
import Image from "next/image";
import { getImageSrc } from "@/utils/getImageSrc";

interface Props {
  blog: Blog;
}

export default function BlogHeader({ blog }: Props) {
  return (
    <>
      <h1 className={`${styles.blogTitle} mt-5`}>{blog.title}</h1>

      <div className={`${styles.postFooter} mt-4`}>
        {/* Author's details */}
        <div className="flex-wrap d-flex align-items-center">
          <div className={styles.postAuthorAvatar}>
            <Image
              src={getImageSrc(blog.author.avatar)}
              alt="Author profile avatar"
              height={40}
              width={40}
              className="img-fluid"
            />
          </div>
          <div className={styles.postAuthor}>
            <span className="fs-6">{blog.author.name}</span>
          </div>
        </div>

        {/* Blog date */}
        <div className="d-flex align-items-center gap-2">
          <i className="fa-regular fa-clock"></i>
          <span>{blog.date}</span>
        </div>
      </div>
    </>
  );
}
