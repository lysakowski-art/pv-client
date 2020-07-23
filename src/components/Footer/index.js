import React from "react";
import { Query } from "@apollo/react-components";
import FOOTER_QUERY from "../../queries/footer/footer";
import ReactHtmlParser from "react-html-parser";
import CookieInfo from './CookieInfo';
import Adress from './Adress'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-cnt">
          <Query query={FOOTER_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return "Loading...";
              if (error) return `Error!: ${error.message}`;
              const { components } = data;
              return (
                <>
                  {components.map((el) => (
                    el.id ==="5f0da73dd0c1932b7b68a00d" ? <CookieInfo el={el}/>:<Adress el={el}/>
                  )
                  )}
                </>
              );
            }}
          </Query>
        </div>
        <div className="copyright">
          <span>©Copyright Prestige Ventures</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
