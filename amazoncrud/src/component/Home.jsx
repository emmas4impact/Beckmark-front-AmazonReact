import React, {Component} from 'react';
import ReatDOM from "react-dom";
import Pagination from "react-js-pagination";
import {GiShoppingCart} from 'react-icons/gi';
import ReactStars from "react-rating-stars-component";
import Carousel from './carousel'



class Home extends Component{
    state={
        products: [],
        Totalproducts: 0,
        activePage:3,
        rate: 0,  
        cart: [],   
        title: "Amazon Products"   
    }
    
    componentDidMount= async()=>{
        this.fetchUserData()
    }
    
    
    fetchUserData = async() =>{
        let response = await fetch("http://localhost:3002/products/",{
          method: "GET",
        
    })
        
    const data = await response.json()
      
    this.setState({
        products: data.products,
        Totalproducts: data.Total_Products
    })
    console.log(response)
  //this.handleDelete()
  }
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }
  
  ratingChanged = async(newRating, id)=>{
      console.log(newRating, id)
      //send the new review
      //refresh thr product list
//       console.log(newRating)
//     let response = await fetch("http://localhost:3002/products/",{
//         method: "GET",
      
//   })
      
//   const data = await response.json()
//   this.setState({
//       rate: data.reviews.rate
//   })
    
//     console.log(newRating)
}
   cartHandler = async (id)=>{
    const response = await fetch("http://localhost:3002/customers/5f0873184c8de209885350c5/add-to-cart/"+id,{
        method: "POST",
        
        headers: {
          "Content-Type": "application/json"}
    })
    const data = await response.json()
    console.log(data)
    this.setState({
        cart: data
    })
} 
    
    render(){
        console.log("carts ",this.state.cart)
        console.log(this.state.products)
        return(
            <>
                
                <div className="container text-center">
               
                    <h1>{this.state.title}</h1>
                    
                    <ul className="list-unstyled" id='products'>
                       
                        {this.state.products.map(products=>(
                            <li className="media" key={products._id}>
                            <img src={products.imageUrl} className="mr-3" alt="..." style={{width: "18rem"}}/> 
                            <div className="media-body">
                                <h4 className="mt-0 mb-3">{products.name}</h4>
                                <p className="mt-0 mb-3">Description: {products.description}</p>
                                <p className="mt-0 mb-3">Brand: {products.brand}</p>
                                <h5 className="mt-0 mb-3">Price: {products.price}€</h5> 
                                <p><button className="btn btn-dark addorder" onClick={()=>this.cartHandler(products._id)}>Add to Cart<GiShoppingCart size={32}/></button>  </p>
                                <div style={{display: "flex",
                                justifyContent: "center",
                                alignItems: "center"}}><ReactStars 
                                count={5}
                                value={products.reviews.map(x => x.rate).reduce((a,v,i)=>(a*i+v)/(i+1), 0)}
                                onChange={(e)=>this.ratingChanged(e, products._id)}
                                size={24}
                                isHalf={true}
                                /></div>
                            </div>
                    </li> 
                        ))}
                    </ul>
                   
                </div>
            </>
            
        )
    }
    
}

export default Home;