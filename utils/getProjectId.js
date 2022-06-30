export const getProjectId = ({ projectName, index, year }) => {
  return `${projectName.toLowerCase()} ${year} ${index}`
    .replace(")", "")
    .replace("(", "")
    .split(" ")
    .join("__");
};
