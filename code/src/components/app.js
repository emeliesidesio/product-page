import React from "react"
import Product from "./product"
const productsJson = require("./../products.json")

console.log(productsJson)

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="header">
          Produkter
        </div>
        <div className="product-container">
          {productsJson.products.map((item) => {
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
