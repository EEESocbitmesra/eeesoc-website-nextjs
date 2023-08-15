import { Blog } from "@/types/types";
import { getImageSrc } from "@/utils/getImageSrc";
import Image from "next/image";
import Link from "next/link";
import { BsDot } from "react-icons/bs";
import { FaClock } from "react-icons/fa";

interface Props {
  blog: Blog;
}

export default function BlogCard({ blog }: Props) {
  return (
    <div className="w-full shadow-container p-3 text-start mb-4 flex flex-col xl:w-[calc(33%-16px)]">
      {/* Blog thumbnail */}
      <Link href={`/blogs/${blog.slug}`}>
        <Image
          src={getImageSrc(blog.thumbnail)}
          alt="blog thumbnail"
          height={250}
          width={400}
          className="object-cover w-full rounded aspect-video"
        />
      </Link>

      {/* Blog categories */}
      <div className="mt-4 text-sm tracking-wide uppercase">{blog.date}</div>

      {/* Blog title */}
      <h5 className="mt-2 truncate">
        <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
      </h5>

      {/* Author's details */}
      <div className="flex items-center gap-4 mt-5 text-sm">
        <Image
          src={getImageSrc(blog.author.avatar)}
          alt="Author profile avatar"
          height={30}
          width={30}
          className="object-cover rounded-full aspect-square"
        />
        <span>{blog.author.name}</span>
      </div>
    </div>
  );
}
