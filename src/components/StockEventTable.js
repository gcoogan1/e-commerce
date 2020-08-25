import React from "react";
import StockDetails from './StockDetails';

const StockEventTable = props => {
  //const productName = props.products[0].name

  //OBJ DES
  const { products, stockEvents } = props;

  return (
    <div className="StockEventTable">
      {products.map(p => {
        const { id } = p;

        const releventStockEvents = stockEvents.filter(se => se.product.id === p.id);

        //Total qty for each product
        const stockTotal = releventStockEvents.reduce((accumulator, currentElemnt) => {
            return accumulator + currentElemnt.qty
        }, 0)
        //==> the above is a shorter way of writing this:
        // let accumulator = 0
        // for(event in releventStockEvents){
        //   accumulator += event.qty   
        // }

        return (
          <div>
              <StockDetails name={p.name} total={stockTotal} stockEvents={releventStockEvents} />
          </div>
        );
      })}
    </div>
  );
};

export default StockEventTable;
