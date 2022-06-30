import GalleryLayout from "../components/gallery/GalleryLayout";
import { galleryPics } from "../data/galleryPics";
import Layout from "../layouts/Layout";

export default function Gallery() {
  return (
    <Layout title="Gallery">
      <div className="vertical-padding">
        <h1 className="text-center mt-5 fs-1">Gallery</h1>

        <section className="mt-5">
          <div className="container">
            <div className="row">
              {galleryPics.map((image, index) => (
                <GalleryLayout key={image} index={index} image={image} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
