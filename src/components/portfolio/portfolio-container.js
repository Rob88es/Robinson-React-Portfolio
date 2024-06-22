import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [
        { title: "Quip", category: "eCommerce", slug: "quip" },
        { title: "Eventbrite", category: "Scheduling", slug: "eventbrite" },
        {title: "Ministry Safe",category: "Enterprise",slug: "ministry-safe"},
        { title: "SwingAway", category: "eCommerce", slug: "swingaway" }
      ]
    };

    this.handleFilter = this.handleFilter.bind(this); //2 parte

    this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this); //1 parte
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} url={"google.com"} slug={item.slug} />
    });
  }

  handlePageTitleUpdate() { // 1 parte
    this.setState({
      pageTitle: "Something Else"
    });
  }

  handleFilter(filter) { //2 parte
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });
  }
  render() {

    if (this.state.isLoading) {
        return <div>Loading...</div>
    }

    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter("eCommerce")}>
          eCommerce
        </button>
        <button onClick={() => this.handleFilter("Scheduling")}>
          Scheduling
        </button>
        <button onClick={() => this.handleFilter("Enterprise")}>
          Enterprise
        </button>

        {this.portfolioItems()}

        <hr />

        <button onClick={this.handlePageTitleUpdate}>Change Title</button> 
      </div>
    );
  }
}