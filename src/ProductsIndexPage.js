import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductsIndexPage(props) {

    const handleClick = (index) => {
        props.deleteProduct(index)
        props.history.push("/products")
        props.setReload(true)
    }

    return (
        <>
            <h1>Products Index</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((product, index) => (
                        <tr key={index}>
                            <td><Link to={`/products/${index}`}>{product.name}</Link></td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td><Link to={`/products/${index}/edit`}>Edit</Link></td>
                            <td><button onClick={() => handleClick(product._id)}>Delete</button></td>
                            {console.log(product)}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/products/new">Create Product</Link>
        </>
    )
}