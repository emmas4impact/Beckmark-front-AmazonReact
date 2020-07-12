import React from 'react';
import Slider from "react-slick";
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Container, Image} from 'react-bootstrap'
import Carousel from "react-multi-carousel";
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
        
            <Carousel
                swipeable={false}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                additionalTransfrom={-20 * 8}
                >
                <div>
                {this.state.products.map(product=>(
                   <Image src={product.imageUrl} fluid />
                ))}
                </div>
               
            </Carousel>
      
    );
  }
}