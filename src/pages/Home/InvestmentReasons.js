import React from "react";
import { Query } from "@apollo/react-components";
import getInvestmentReasons from "../../queries/investmentReasons/investmentReasons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-scroll-parallax";

const InvestmentReasons = () => {
  return (
    <>
        <Fade duration={1500}>
          <h3 className="reasons-title">Dlaczego warto kupować diamenty?</h3>

      <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
          <div className="reasons-cnt">
            <Query
              query={getInvestmentReasons}
              variables={{ id: "5f0dc9bcbef2af4d30dc8915" }}
            >
              {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error: ${error.message}`;
                const { page } = data;
                return page.page_components.map((cmp) => (
                  <div className="reasons-item" key={cmp.id}>
                    <FontAwesomeIcon className="icon" icon={faCoffee} />
                    <h5>{cmp.name}</h5>
                  </div>
                ));
              }}
            </Query>
          </div>
              </Parallax>
        </Fade>
    </>
  );
};

export default InvestmentReasons;
