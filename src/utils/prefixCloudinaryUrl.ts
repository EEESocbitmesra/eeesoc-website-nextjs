export const prefixCloudinaryUrl = (imageUrl: string) => {
  const base = "https://res.cloudinary.com/demo/image/fetch/";
  return base + imageUrl;
};
