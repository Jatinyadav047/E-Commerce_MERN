import React from 'react'
import { items } from './Data'
items

const Product = () => {
  return (
    <>
    <div className="contaner my-5">
        <div className="row">
        {
            items.map((product)=>{
                return(
                    <>
                    <div className="col-lg-4 my-3 text-center">
                       <div className="card" style={{width: '18rem'}}>
  <img src={product.imgSrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
                    </>
                )
            })
        }
    </div></div>
    </>
  )
}

export default Product