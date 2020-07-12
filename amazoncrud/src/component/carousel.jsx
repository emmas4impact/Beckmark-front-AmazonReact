import React from 'react';
import Slider from "react-slick";
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Container, Image, Row, Col, Carousel} from 'react-bootstrap'

import "react-multi-carousel/lib/styles.css";
 
export default class extends React.Component {
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
  render() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 8// optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        <Container>
        <Row className="justify-content-center mt-3">
            <Col md={12} className="D-flex">
           
                        
                        <Carousel>
                            {this.state.products.map((product)=>{
                                return(
                                    <Carousel.Item key={product._id}>
                                        <img
                                        className="d-block w-100 h-25"
                                        src={product.imageUrl}
                                        alt={product.name}
                                        
                                        />
                                        <Carousel.Caption>
                                        <h3>{product.name}</h3>
                                        <p>{product.description}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                );
                            })
                                
                            }
                            
                          
                        </Carousel>
        
            
            </Col>
            </Row>
        </Container>
    );
  }
}