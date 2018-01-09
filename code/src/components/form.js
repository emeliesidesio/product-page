import React from "react"

export default class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: "",
      name: "",
      type: "",
      size: "",
      numberInPack: "",
      substance: "",
      price: "",
      deliveryTime: "",
      description: "",
      image: ""
    }
  }

  handleId = event => {
    this.setState({
      id: event.target.value
    })
  }

  handleName = event => {
    this.setState({
      name: event.target.value
    })
  }

  handlePrice = event => {
    this.setState({
      price: event.target.value
    })
  }

  handleNumberInPack = event => {
    this.setState({
      numberInPack: event.target.value
    })
  }

  handleSize = event => {
    this.setState({
      size: event.target.value
    })
  }

  handleSubstance = event => {
    this.setState({
      substance: event.target.value
    })
  }

  handleDeliveryTime = event => {
    this.setState({
      deliveryTime: event.target.value
    })
  }

  handleType = event => {
    this.setState({
      type: event.target.value
    })
  }

  handleDescription = event => {
    this.setState({
      description: event.target.value
    })
  }

  handleImage = event => {
    this.setState({
      image: event.target.value
    })
  }

  handleSubmit = event => {
  event.preventDefault()
   fetch("http://localhost:8080/products", {
     method: "POST",
     headers: {
       Accept: "application/json, text/plain, */*",
       "Content-Type": "application/json"
     },
     body: JSON.stringify(this.state)
   }).then((response) => {
     return response.json()
   })
}

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <h1 className="title">Add a new product</h1>
        <div>
          <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleName} />
          <input type="text" placeholder="Price" value={this.state.price} onChange={this.handlePrice} />
          <input type="text" placeholder="Id" value={this.state.id} onChange={this.handleId} />
        </div>
        <div>
          <input type="text" placeholder="Type" value={this.state.type} onChange={this.handleType} />
          <input type="text" placeholder="Size" value={this.state.size} onChange={this.handleSize} />
          <input type="text" placeholder="Number in Pack" value={this.state.numberInPack} onChange={this.handleNumberInPack} />
        </div>
        <div>
          <input type="text" placeholder="Substance" value={this.state.substance} onChange={this.handleSubstance} />
          <input type="text" placeholder="Delivery Time" value={this.state.deliveryTime} onChange={this.handleDeliveryTime} />
          <input type="text" placeholder="Description" value={this.state.description} onChange={this.handleDescription} />
        </div>
        <div>
          <input type="text" placeholder="Image" value={this.state.image} onChange={this.handleImage} />
        </div>
        <div>
          <input className="submit-btn" type="submit" value="Save" />
        </div>
      </form>
    )
  }
}
