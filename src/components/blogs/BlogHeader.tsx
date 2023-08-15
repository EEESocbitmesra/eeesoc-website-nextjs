import { Blog } from "@/types/types";
import { getImageSrc } from "@/utils/getImageSrc";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { FaClock } from "react-icons/fa";

interface Props {
  blog: Blog;
}

export default function BlogHeader({ blog }: Props) {
  return (
    <>
      <h1 className="text-2xl xl:text-3xl">{blog.title}</h1>

      <div className="flex items-center gap-2 mt-4 text-sm">
        {/* Author's details */}
        <div className="flex items-center gap-4">
          <Image
            src={getImageSrc(blog.author.avatar)}
            alt="Author profile avatar"
            height={30}
            width={30}
            className="object-cover rounded-full aspect-square"
          />
          <span>{blog.author.name}</span>
        </div>

        <BsDot className="text-xl" />

        <div className="flex items-center gap-1 text-neutral-700">
          <FaClock />
          <span>{blog.date}</span>
        </div>
      </div>
    </>
  );
}
