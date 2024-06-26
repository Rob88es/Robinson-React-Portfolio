import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: []
    };


    this.handleFilter = this.handleFilter.bind(this); //2 parte

    this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this); //1 parte
  }

  getPortfolioItems() {
    axios
      .get('https://robinson.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        this.setState ({
          data: response.data.portfolio_items
        });

      })
      .catch(error => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      console.log("portfolio item", item);
      return <PortfolioItem key={item.id} title={item.name} url={item.url} slug={item.id} />
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

  componentDidMount () {
    this.getPortfolioItems();
  }

  render() {

    if (this.state.isLoading) {
        return <div>Loading...</div>;
    }

    this.getPortfolioItems();

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