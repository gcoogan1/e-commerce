import React from 'react';
import axios from 'axios'
import './App.css';
import StockEventTable from './components/StockEventTable';


//dummy data
// still use base, no need for fill-ins
const fetchedProducts=[
  {id: 1, name: 'Lipstick'},
  {id: 2, name: 'Eye Shadow'}
]

const fetchedStockProducts =[
  {id: 1, type: 'add', qty: 100, product: fetchedProducts[0]},
  {id: 2, type: 'remove', qty: -10, product: fetchedProducts[0]},
  {id: 3, type: 'add', qty: 30, product: fetchedProducts[0]},
  
  {id: 4, type: 'add', qty: 90, product: fetchedProducts[1]},
  {id: 5, type: 'remove', qty: -5, product: fetchedProducts[1]}
]

class App extends React.Component{
  state = {
    fetchedProducts,
    fetchedStockProducts
  }



  async componentDidMount() {
    
    const productRes = await axios({
      method: "GET",
      url: 'http://localhost:1337/products'
    })
    const stockEventRes = await axios({
      method: "GET",
      url: 'http://localhost:1337/stockevents'
    })

    const fetchedProducts = productRes.data;
    const fetchedStockProducts = stockEventRes.data;

    this.setState({fetchedProducts, fetchedStockProducts})

  }

  render(){
    const {fetchedProducts, fetchedStockProducts} = this.state

    return (
      <div className="App">
          <h1>STOCK APP</h1>
          <StockEventTable products={fetchedProducts} stockEvents={fetchedStockProducts} />
      </div>
    );
  }
}




export default App;
