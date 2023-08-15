"use client";

import { galleryPics } from "@/data/galleryPics";
import { getImageSrc } from "@/utils/getImageSrc";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import { useState } from "react";

interface Props {
  image: string;
  index: number;
}

export default function GalleryLayout({ image, index }: Props) {
  const [toggler, setToggler] = useState(false);

  return (
    <div className="col-span-3 md:col-span-1">
      <FsLightbox
        toggler={toggler}
        sources={galleryPics.map((imagePath) => {
          return "images" + imagePath;
        })}
        slide={index + 1}
      />
      <Image
        src={getImageSrc(image)}
        alt={`gallery ${index}`}
        height={330}
        width={440}
        className="object-cover h-full cursor-pointer"
        onClick={() => setToggler((prev) => !prev)}
      />
    </div>
  );
}
