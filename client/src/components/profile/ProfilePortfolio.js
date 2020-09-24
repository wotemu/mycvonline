import React, { Component } from "react";

class ProfilePortfolio extends Component {
  render() {
    const { portfolio } = this.props;

    // portfolio List
    const portfolioItems = portfolio.map((port) => (
      <div key={port._id} className="p-2">
        <i className="fa fa-check" />
        <span className="mr-2"> {port.name}</span>{" "}
        <a href={port.link}>View the web</a>
      </div>
    ));

    return (
      <div>
        <div className="mb-2">
          <h5 className="myOpacity personalInfoHeader">Portfolios</h5>
          <div className=" ">
            {portfolioItems.length > 0 ? (
              <ul className="list-group ">{portfolioItems}</ul>
            ) : (
              <p>No portfolio Listed </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePortfolio;
