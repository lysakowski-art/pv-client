import React from "react";
import ReactHtmlParser from "react-html-parser";

const PageComponent = (props) => {
  const { page_components } = props;
  console.log(page_components)
//   const components = page_components.map((component) => (
//     <div key={component.id}>{ReactHtmlParser(component.content)}</div>
//   ));
  return //<section>{components}</section>;
};

export default PageComponent;
