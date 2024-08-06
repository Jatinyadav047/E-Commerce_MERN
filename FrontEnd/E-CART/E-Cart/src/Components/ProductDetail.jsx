import React from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'



const ProductDetail = () => {
    const {id} = useParams()
  return (
    <>
    <div className="container">
        <div className="img">
            <img src="" alt="" />
        </div>
    </div>
    </>
  )
}

export default ProductDetail