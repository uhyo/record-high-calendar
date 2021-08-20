module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}

module "*?worker" {
  const Worker: new () => Worker;
  export default Worker;
}
