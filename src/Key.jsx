import React, { useState } from 'react'

const Key = () => {
    const products=[
        {id:1,name:"laptop",brand:"Dell",qty:1},
        {id:2,name:"laptop",brand:"ASUS",qty:1},
        {id:3,name:"laptop",brand:"acer",qty:1}
    ]
    const[data,setdata]=useState(products)

    const change=(id)=>{
        const newitem=data.map((item)=>
        item.id=== id ? {...item,qty:item.qty+1}:item)
        setdata(newitem)
        
    }

  return (
    <div>
        {data.map((product)=>(
            <div key={product.id}>
                <h3>{product.name}</h3>
                <h3>{product.brand}</h3>
                <h3>{product.qty}</h3>
                <button onClick={()=>change(product.id)}>+</button>
               
            </div>
        ))}
    </div>
  )
}

export default Key