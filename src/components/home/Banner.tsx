import Image from "next/image";

export default function Banner() {
  return (
    <div className="bg-banner flex flex-col items-center justify-center h-[80vh] xl:h-[95vh]">
      <h1 className="px-4 text-3xl font-medium text-center text-white xl:px-0 xl:text-6xl">
        Electrical and Electronics Engineering Society
      </h1>
      <h1 className="px-4 mt-8 text-2xl font-medium text-center text-white xl:px-0 xl:text-5xl">
        Birla Institute of Technology, Mesra
      </h1>
      <Image
        src="/images/home/bit_logo.png"
        alt="BIT Mesra logo"
        className="object-contain mt-16"
        width={220}
        height={220}
      />
    </div>
  );
}
