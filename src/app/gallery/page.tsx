import GalleryLayout from "@/components/gallery/GalleryLayout";
import { pageTitle } from "@/data/constants";
import { galleryPics } from "@/data/galleryPics";

export const metadata = {
  title: `${pageTitle} | Gallery`,
};

export default function Gallery() {
  return (
    <div className="mt-16 w-5/6 md:w-4/5 mx-auto">
      <h1 className="text-center text-3xl md:text-4xl">Gallery</h1>

      <section className="mt-8 items-stretch grid grid-cols-3">
        {galleryPics.map((image, index) => (
          <GalleryLayout key={image} index={index} image={image} />
        ))}
      </section>
    </div>
  );
}
