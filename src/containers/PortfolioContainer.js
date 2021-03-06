import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
 

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.props.portfolioStocks.map(portfolioStock => {
              return(
                <div onClick={() =>this.props.removePortfolioStocks(portfolioStock)} key={portfolioStock.id}>
                   <h5>{portfolioStock.name}</h5>
                    <p>{portfolioStock.ticker + ":" + portfolioStock.price}</p>
                </div>
              )
            })
            
          }
      </div>
    );
  }

}

export default PortfolioContainer;
