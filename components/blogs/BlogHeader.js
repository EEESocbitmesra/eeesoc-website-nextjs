import NextImage from "../../layouts/NextImage";
import styles from "./Blogs.module.css";

export default function BlogHeader({ metaData }) {
  return (
    <>
      <h1 className={`${styles.blogTitle} mt-5`}>{metaData.title}</h1>

      <div className={`${styles.postFooter} mt-4`}>
        {/* Author's details */}
        <div className="flex-wrap d-flex align-items-center">
          <div className={styles.postAuthorAvatar}>
            <NextImage
              src={metaData.author.avatar}
              alt="Author profile avatar"
              height={40}
              width={40}
              layout="responsive"
              className="img-fluid"
            />
          </div>
          <div className={styles.postAuthor}>
            <span className="fs-6">{metaData.author.name}</span>
          </div>
        </div>

        {/* Blog date */}
        <div className="d-flex align-items-center gap-2">
          <i className="fa-regular fa-clock"></i>
          <span>{metaData.date}</span>
        </div>
      </div>
    </>
  );
}
