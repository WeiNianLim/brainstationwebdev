import React, { Component } from 'react';
import './App.css';

class App extends Component {
  

  render() {
    const {data} = this.props
    return (
      <div >
        <div className="row container">
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label" for="gridCheck">Only show product in stock</label>
              </div>
          </div>
        </div>
        <div className="row container">
          <div className="col-lg-2 col-md-2 col-sm-3 col-6">
            Name
          </div>
          <div className="col-lg-2 col-md-2 col-sm-3 col-6">
            Price
          </div>
        </div>
        <ProductCategory data={data}/>
        <div className="row container"></div>
        <div className="row container"></div>
        <div className="row container"></div>
      </div>
    );
  }
}

class ProductCategory extends Component{
  
  displayProduct(){
      
  }
  
  render(){
    const {data} = this.props
    let categorylist = []
    categorylist.push(data[0].category)
    for (let i = 1 ; i < data.length ; i++){
      if (data[i].category !== data[i-1].category)
        categorylist.push(data[i].category)
    }
    console.log(categorylist)
    return (
      <ProductList list={categorylist} data={data}/>
    )
    
  }
}

export default App;
