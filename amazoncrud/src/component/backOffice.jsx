import React, {Component} from "react";
import {Link, withRouter} from 'react-router-dom';
import { Row, Col, Button, Form, Spinner, Alert } from "react-bootstrap";
class BackOffice extends Component{
    state={
        products:{
            name: "",
            description: "",
            brand: "",
            imageUrl: "",
            price:0,
            category:""
        },
        isLoading: false,
        errMess: ""
        
        
    }
    
    componentDidMount=()=>{
        
    }
    saveProducts = async()=>{
        const response = await fetch("http://localhost:3002/products/",{
            method: 'POST',
            body: JSON.stringify(this.state.products),
            headers: {
                "Content-Type": "application/json",
            }
            
        });
        //const data = response.json();
        if(response.ok){
            alert("New Product Added!");
            
            this.setState({
                isLoading: false,
                errMess: "",
                products:{
                    name: "",
                    description: "",
                    brand: "",
                    imageUrl: "",
                    price:0,
                    category:""
                }
            })
            
        }else{
            let json =await response.json();
            this.setState({
                isLoading: false,
                errMess: json.message
            })
        }
        
    }
    
    updateProductsField = input =>{
        let product =this.state.products;
        let currentId = input.currentTarget.id;
        
        if(currentId){
            product[currentId] =input.currentTarget.value;
        }
        
        this.setState({products: product})
    }
    
    render(){
        return(
            <div className="mb-3">
        {this.state.errMess.length > 0 && (
          <Alert variant="danger">
            We encountered a problem while processing your request:{" "}
            {this.state.errMess}
          </Alert>
        )}
        <h3>Add new Products!</h3>
        {
          this.state.isLoading && (
            <div className="d-flex justify-content-center my-5">
              Please add a new products
              <div className="ml-2">
                <Spinner animation="border" variant="success" />
              </div>
            </div>
          )
        }
        <Form onSubmit={this.saveProducts}>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  value={this.state.products.name}
                  onChange={this.updateProductsField}
                />
              </Form.Group>
            </Col>
            <Form.Group className="col-md-6">
              <Form.Label htmlFor="phone">Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                id="description"
                placeholder="Your description"
                value={this.state.products.description}
                onChange={this.updateProductsField}
              />
            </Form.Group>
          </Row>
          <Row>
            <Col md={6}>
            <Form.Group className="col-md-6">
              <Form.Label htmlFor="brand">Brand</Form.Label>
              <Form.Control
                type="text"
                name="brand"
                id="brand"
                placeholder="Your brand"
                value={this.state.products.brand}
                onChange={this.updateProductsField}
              />
            </Form.Group>
            </Col>
            
            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor="imageUrl">Image url</Form.Label>
                <Form.Control
                  type="url"
                  name="imageUrl"
                  id="imageUrl"
                  placeholder="Image Url"
                  value={this.state.products.imageUrl}
                  onChange={this.updateProductsField}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor="specialRequests">Category</Form.Label>
                <Form.Control
                  type="text"
                  name="category"
                  id="category"
                  value={this.state.products.category}
                  onChange={this.updateProductsField}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor="specialRequests">price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  id="price"
                  value={this.state.products.price}
                  onChange={this.updateProductsField}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
        )
        
    }
}

export default BackOffice;