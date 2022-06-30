export const getAlumniId = ({ seniorName, year, index }) => {
  return `${seniorName.toLowerCase()} ${year} ${index}`.split(" ").join("__");
};
