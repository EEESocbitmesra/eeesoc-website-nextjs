interface Params {
  seniorName: string;
  year: number;
  index: number;
}

export const getAlumniId = ({ seniorName, year, index }: Params) => {
  return `${seniorName.toLowerCase()} ${year} ${index}`.split(" ").join("__");
};
