import React from "react"

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <h1>{this.props.name}</h1>
        <div className="image">
          <img src={this.props.image} alt="Bild förpackning"/>
        </div>
        <div className="list">
          <ul>
            <li>{this.props.type}</li>
            <li>{this.props.substance}</li>
            <li>{this.props.size}</li>
            <li>{this.props.numberInPack} st i förpackningen</li>
          </ul>
        </div>
          <div className="bottom">
            <h2>{this.props.price} kr</h2>
            <button>Köp</button>
            <p>Leveranstid: {this.props.deliveryTime}</p>
            </div>
      </div>
    )
  }
}

export default Product
