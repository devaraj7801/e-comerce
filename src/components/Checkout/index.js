import {Component} from 'react'
import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'

import './index.css'

class Checkout extends Component {
  state = {username: '', email: '', number: '', address: '', orderButton: false}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangeNumber = event => {
    this.setState({number: event.target.value})
  }

  onChangeAddress = event => {
    this.setState({address: event.target.value})
  }

  onSubmitDetails = event => {
    event.preventDefault()
    this.setState({username: '', address: '', number: '', email: ''})
  }

  onGetDetails = () => {
    this.setState({orderButton: true})
  }

  render() {
    const {username, email, number, address, orderButton} = this.state
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value
          let total = 0
          cartList.forEach(eachCartItem => {
            total += eachCartItem.price * eachCartItem.quantity
          })
          return (
            <div className="checkout-container">
              <h1>Order details</h1>
              <form onSubmit={this.onSubmitDetails}>
                <div className="order-container">
                  <label htmlFor="name">Name: </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    id="name"
                    value={username}
                    onChange={this.onChangeUsername}
                  />
                </div>
                <div className="order-container">
                  <label htmlFor="name">Email: </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    value={email}
                    onChange={this.onChangeEmail}
                  />
                </div>
                <div className="order-container">
                  <label htmlFor="Phone Number">Phone Num: </label>
                  <input
                    type="number"
                    placeholder="Enter your Phone Number"
                    value={number}
                    onChange={this.onChangeNumber}
                  />
                </div>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  placeholder="Enter your Address..."
                  value={address}
                  onChange={this.onChangeAddress}
                />
                <p>Order Amount: $ {total}</p>
                <div>
                  <button type="submit" onClick={this.onGetDetails}>
                    Place Order
                  </button>
                  <Link to="/products">
                    <button type="button">Cancel</button>
                  </Link>
                </div>
                {orderButton && (
                  <p className="order-msg">Order successfully!</p>
                )}
              </form>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Checkout
