import React, { Component } from "react";

export class StockDetails extends Component {

    state = {
        show: false
    }


  render() {
    const { name, total, stockEvents } = this.props;
    const { show } = this.state                                   //bottom - show is set not !show so that the onclick can be toggled
    return (
      <div className="StockDetail" onClick={() => this.setState({show: !show})}>  
        <h2>
          Product: {name} | Total: {total}
        </h2>
        {show &&
        <>
        {stockEvents.map(e => (
          <div className="StockEventTable_Card">
            <p>Id: {e.id} </p>
            <p>Type: {e.type} </p>
            <p>Quantity: {e.qty} </p>
            <p> Product Name: {e.product.name} </p>
          </div>
        ))}
        </>
        }
      </div>
    );
  }
}

export default StockDetails;
