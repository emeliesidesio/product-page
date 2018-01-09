import React from "react"
import Product from "./product"
// const productsJson = require("./../products.json")

class App extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    productList: []
  }
}

componentDidMount() {
    fetch("http://localhost:8080/products").then(response => {
      return response.json()
    }).then(json => {
      this.setState({ productList: json })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          Produkter
        </div>
        <div className="product-container">
          {this.state.productList.map((item) => {
          return <Product
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    type={item.type}
                    size={item.size}
                    numberInPack={item.numberInPack}
                    deliveryTime={item.deliveryTime}
                    substance={item.substance}
                    image={item.image}/>
        })}
        </div>
      </div>
    )
  }

}

export default App
