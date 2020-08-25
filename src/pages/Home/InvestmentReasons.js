import React from "react";
import { Query } from "@apollo/react-components";
import getInvestmentReasons from "../../queries/investmentReasons/investmentReasons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faHandSparkles } from "@fortawesome/free-solid-svg-icons";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

const InvestmentReasons = () => {
  const changeString = (string) => {
    if (string === "faGem") return faGem;
    if (string === "faCoins") return faCoins;
    if (string === "faChartLine") return faChartLine;
    if (string === "faHandHoldingUsd") return faHandHoldingUsd;
    if (string === "faHandSparkles") return faHandSparkles;
    if (string === "faCarSide") return faCarSide;
  };
  return (
    <>
      <Fade duration={1500}>
        <div className="reasons-banner-cnt">
          <h3 className="reasons-title">Dlaczego warto kupować diamenty?</h3>
          <div className="reasons-cnt">
            <Query
              query={getInvestmentReasons}
              variables={{ id: "5f27e143ea26eb30796b08ea" }}
            >
              {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error: ${error.message}`;
                const { page } = data;
                return page.page_components.map((cmp) => (
                  <div className="reasons-item" key={cmp.id}>
                    <FontAwesomeIcon
                      className="icon"
                      icon={changeString(cmp.icon)}
                    />
                    <h5>{cmp.name}</h5>
                  </div>
                ));
              }}
            </Query>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default InvestmentReasons;
