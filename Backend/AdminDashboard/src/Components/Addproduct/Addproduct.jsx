import React from 'react'
import './Addproduct.css'

const Addproduct = () => {
  return (
    <div className='add-product'>
        <div className='add-product-itemfield'>
            <p>Product Title</p>
            <input type="text" placeholder='Enter product title' />
        </div>
        <div className='add-product-price'>
            <div className='add-product-itemfield'>
                <p>Product Price</p>
                <input name='old_price' type="text" placeholder='Enter product price' />
            </div>
             <div className='add-product-itemfield'>
                <p>Offer Price</p>
                <input name='new_price' type="text" placeholder='Enter product price' />
            </div>

        </div>
        <div className="add-product-itemfield">
            <p>Product Category</p>
            <select name="category" className='add-product-selector'>
                <option value="Women">women</option>
                 <option value="Men">men</option>
                  <option value="Kids">kids</option>
                  
                </select>
        </div>
        </div>
  )
}

export default Addproduct