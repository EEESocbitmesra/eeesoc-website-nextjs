interface Params {
  projectName: string;
  index: number;
  year: number;
}

export const getProjectId = ({ projectName, index, year }: Params) => {
  return `${projectName.toLowerCase()} ${year} ${index}`
    .replace(")", "")
    .replace("(", "")
    .split(" ")
    .join("__");
};
