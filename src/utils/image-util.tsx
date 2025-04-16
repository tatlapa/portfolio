const getProject = (name) => {
  return new URL(`../assets/projects/${name}`, import.meta.url).href;
};

export default getProject;
