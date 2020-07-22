import React from "react";
import { Query } from "@apollo/react-components";
import getInvestmentReasons from "../../queries/investmentReasons/investmentReasons";

const InvestmentReasons = () => {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Dlaczego warto inwestować?</h3>
      <Query
        query={getInvestmentReasons}
        variables={{ id: "5f0dc9bcbef2af4d30dc8915" }}
      >
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error: ${error.message}`;
          const { page } = data;
          return page.page_components.map((cmp) => (
            <div key={cmp.id}>
              <h5 style={{ textAlign: "center" }}>{cmp.name}</h5>
            </div>
          ));
        }}
      </Query>
    </>
  );
};

export default InvestmentReasons;
