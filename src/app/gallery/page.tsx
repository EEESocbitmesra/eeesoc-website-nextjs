import GalleryLayout from "@/components/gallery/GalleryLayout";
import { pageTitle } from "@/data/constants";
import { galleryPics } from "@/data/galleryPics";

export const metadata = {
  title: `${pageTitle} | Gallery`,
};

export default function Gallery() {
  return (
    <div className="wrapper">
      <h1 className="text-center">Gallery</h1>

      <section className="grid items-stretch grid-cols-3 mt-8">
        {galleryPics.map((image, index) => (
          <GalleryLayout key={image} index={index} image={image} />
        ))}
      </section>
    </div>
  );
}
