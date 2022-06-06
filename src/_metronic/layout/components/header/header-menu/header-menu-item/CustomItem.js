module.exports = {
  module: "custom",
  node: 1,
  //   level 2
  children: [
    {
      module: "e-commerce",
      title: "eCommerce",
      node: 2,
      children: [
        { module: "customers", title: "Customers", node: 3 },
        { module: "products", title: "Products", node: 3 },
        { module: "error", title: "Error Pages", node: 3 },
      ],
    },
    {
      module: "builder",
      title: "Layout Builder",
      node: 2,
    },
    {
      module: "error",
      title: "Error Pages",
      node: 2,
      children: [
        { module: "error-v1", title: "Error 1", node: 3 },
        { module: "error-v2", title: "Error 2", node: 3 },
        { module: "error-v3", title: "Error 3", node: 3 },
        { module: "error-v4", title: "Error 4", node: 3 },
        { module: "error-v5", title: "Error 5", node: 3 },
        { module: "error-v6", title: "Error 6", node: 3 },
      ],
    },
  ],
};
