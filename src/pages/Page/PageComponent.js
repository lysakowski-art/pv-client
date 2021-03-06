import React from "react";
import ReactHtmlParser from "react-html-parser";

const PageComponent = (props) => {
  const { page_components } = props;
  
  const components = page_components.map((component) => (
    <div key={component.id}>{ReactHtmlParser(component.content)}</div>
  ));
  return <div className="page-component">{components}</div>;
};

export default PageComponent;