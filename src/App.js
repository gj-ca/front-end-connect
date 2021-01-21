import React, {useState, useEffect} from "react"
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import ProductsIndexPage from './ProductsIndexPage'
import NewProductForm from './NewProductForm'
import EditProductForm from './EditProductForm'
import ProductPage from './ProductPage'

export default function App() {
    const [products, setProducts] = useState([
        {
            name: "Product 1",
            description: "Description 1",
            price: 10
        }, 
        {
            name: "Product 2",
            description: "Description 2",
            price: 20
        }, 
        {
            name: "Product 3",
            description: "Description 3",
            price: 30
        }, 
    ])

    const addToProducts = (newProduct) => {
        setProducts([...products, newProduct])
    }

    const updateProducts = (newProduct, index) => {
        let newProducts = [...products] // Cloning the original array to trigger refresh
        newProducts[index] = newProduct
        setProducts(newProducts)
    }

    const deleteProduct = (index) => {
        let newProducts = [...products] // Cloning the original array to trigger refresh
        newProducts.splice(index, 1)
        setProducts(newProducts)
    }

    return (
        <BrowserRouter>
            <header>
                <nav>
                    <Link to="/products">Products</Link>
                    <Link to="/recipes">Recipes</Link>
                </nav>
            </header>
            <Switch>
                <Route exact path="/products" render={() => <ProductsIndexPage products={products} deleteProduct={deleteProduct} />}/>
                <Route exact path="/products/new" render={props => <NewProductForm {...props} addToProducts={addToProducts} />}/>
                <Route path="/products/:id" render={props => <ProductPage {...props} products={products} deleteProduct={deleteProduct} />}/>
                <Route path="/products/:id/edit" render={props => <EditProductForm {...props} products={products} updateProducts={updateProducts} />} />
                <Route path="/recipes" component={() => <h1>Recipes Index Page</h1>}/>
            </Switch>
        </BrowserRouter>
    )
}