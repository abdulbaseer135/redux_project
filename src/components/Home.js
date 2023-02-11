import React from 'react'

 function Home(props) {
  //console.log('Home',props.data)
  return (
    <div>
         
      <h1>Home Component</h1>
      <div className='cart-wraper'>
        <div className='img-wraper item'>
            <img alt="No image found" src='data:image/jpeg;base64,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' />
        </div>
        <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
        <div className='btn-wraper item'>
          <button onClick={()=>props.addToCartHandler({price:1000,name:"I-Phone 11"})}>Add To Cart</button>
          <button className='remove-cart-btn' onClick={()=>props.removeToCartHandler()}>Remove To Cart</button>
 
        </div>
      </div>
    </div>
  )
}
export default Home;