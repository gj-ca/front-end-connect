import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductPage(props) {
    const product = props.products[props.match.params.id]
    
    const handleClick = (index) => {
        props.deleteProduct(index)
        props.history.push("/products")
    }


    return (
        <>
            <h1>{product.name}</h1>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <p><Link to={`/products/${props.match.params.id}/edit`}>Edit</Link></p>
            <button onClick={() => handleClick(props.match.params.id)}>Delete</button>
        </>
    )
}