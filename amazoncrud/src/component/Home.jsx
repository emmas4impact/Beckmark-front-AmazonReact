import React, {Component} from 'react';
import ReatDOM from "react-dom";
import Pagination from "react-js-pagination";
import {GiShoppingCart} from 'react-icons/gi';
import ReactStars from "react-rating-stars-component";



class Home extends Component{
    state={
        products: [],
        Totalproducts: 0,
        activePage:3,
        rate: 0
        
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
  
  ratingChanged = async(newRating)=>{
    let response = await fetch("http://localhost:3002/products/",{
        method: "GET",
      
  })
      
  const data = await response.json()
//   this.setState({
//       rate: data.reviews.rate
//   })
    
    console.log(newRating)
}
    
    
    render(){
        console.log(this.state.products)
        return(
            <>
                <div className="container text-center">
                    <h1>Amazon CRUD PRODUCTS</h1>
                    
                    <ul className="list-unstyled" id='products'>
                       
                        {this.state.products.map(products=>(
                            <li className="media" key={products._id}>
                            <img src={products.imageUrl} className="mr-3" alt="..." style={{width: "18rem"}}/> 
                            <div className="media-body">
                                <h4 className="mt-0 mb-3">{products.name}</h4>
                                <p className="mt-0 mb-3">Description: {products.description}</p>
                                <p className="mt-0 mb-3">Brand: {products.brand}</p>
                                <h5 className="mt-0 mb-3">Price: {products.price}€</h5> 
                                <p><button className="btn btn-dark addorder">Add to Cart<GiShoppingCart size={32}/></button>  </p>
                                <p style={{display: "flex",
                                justifyContent: "center",
                                alignItems: "center"}}><ReactStars 
                                count={5}
                                onChange={this.ratingChanged}
                                size={24}
                                isHalf={true}
                                /></p>
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