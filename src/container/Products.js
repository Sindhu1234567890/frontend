import React, { Component } from 'react'

export default class Products extends Component {
    state={
        products:[]
    }
    componentDidMount(){
        fetch("https://backend-bbcw.onrender.com/products")
         .then((res)=>{
            return res.json()
         })
         .then((res)=>{
            this.setState({
                products:res
            })

         })
    }
  render() {
    return (
      <div>
        <h1>Products</h1>
        {
            this.state.products.map((product)=>(
              <div key={product.name}>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p><img width="10%" src={product.image} alt={product.name} /></p>
              </div>
            ))
        }
        </div>
    )
  }
}
