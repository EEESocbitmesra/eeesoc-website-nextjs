import Image from "next/image";
import { prefixCloudinaryUrl } from "../utils/prefixCloudinaryUrl";

export default function NextImage({ src, ...props }) {
  return (
    <Image
      src={src[0] === "/" ? `/images${src}` : prefixCloudinaryUrl(src)}
      {...props}
    />
  );
}
