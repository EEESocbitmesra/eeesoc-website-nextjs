import FsLightbox from "fslightbox-react";
import { useState } from "react";
import { galleryPics } from "../../data/galleryPics";
import NextImage from "../../layouts/NextImage";

export default function GalleryLayout({ image, index }) {
  const [toggler, setToggler] = useState(false);

  return (
    <div className="col-lg-4 col-md-6 mb-3 mb-md-0 px-0">
      <FsLightbox
        toggler={toggler}
        sources={galleryPics.map((imagePath) => {
          return "images" + imagePath;
        })}
        slide={index + 1}
      />
      <NextImage
        src={image}
        alt={`gallery ${index}`}
        height={330}
        width={440}
        layout="responsive"
        className="img-fluid h-100"
        objectFit="cover"
        style={{ cursor: "pointer" }}
        onClick={() => setToggler((prev) => !prev)}
      />
    </div>
  );
}
