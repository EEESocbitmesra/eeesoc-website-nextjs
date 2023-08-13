import Image from "next/image";
import { prefixCloudinaryUrl } from "../utils/prefixCloudinaryUrl";

interface Props {
  src: string;
  alt: string;
  fill?: boolean;
}

export default function NextImage({ src, alt, fill = false, ...props }: Props) {
  return (
    <Image
      src={src[0] === "/" ? `/images${src}` : prefixCloudinaryUrl(src)}
      alt={alt}
      fill={fill}
      {...props}
    />
  );
}
