const heading = React.createElement(
  "h1",
  { id: "heading 1", key: "heading1", style: { color: "red" } },
  "Heading 1"
);
const headingTwo = React.createElement(
  "h2",
  { id: "heading 2", key: "heading2", style: { color: "blue" } },
  "Heading 2"
);
const container = React.createElement("div", { id: "container" }, [
  heading,
  headingTwo,
]);
