import React, {useState, useEffect} from "react"
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import ProductsIndexPage from './ProductsIndexPage'
import NewProductForm from './NewProductForm'
import EditProductForm from './EditProductForm'
import ProductPage from './ProductPage'

export default function App() {
    const [products, setProducts] = useState([])
    const [reload, setReload] = useState(true)

    useEffect(() => {
        if (reload == true) {
            fetch("https://stark-anchorage-67839.herokuapp.com/products")
                .then(data => data.json())
                .then(result => {
                    setProducts(result)
                    setReload(false)
                })
        }
    }, [reload])

    const deleteProduct = (id) => {
        fetch("https://stark-anchorage-67839.herokuapp.com/products/" + id, {
            method: "DELETE"
        })
            .then(response => {
                if (response.status == 200) {
                    let newProducts = [...products] // Cloning the original array
                    newProducts = newProducts.filter(product => product._id != id)
                    setProducts(newProducts)
                }
            })
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
                <Route exact path="/products" render={() => <ProductsIndexPage products={products} setReload={setReload} deleteProduct={deleteProduct} />}/>
                <Route exact path="/products/new" render={props => <NewProductForm {...props} setReload={setReload}/>}/>
                <Route exact path="/products/:id" render={props => <ProductPage {...props} products={products} setReload={setReload} deleteProduct={deleteProduct} />}/>
                <Route exact path="/products/:id/edit" render={props => <EditProductForm {...props} setReload={setReload} products={products} />} />
                <Route exact path="/recipes" component={() => <h1>Recipes Index Page</h1>}/>
            </Switch>
        </BrowserRouter>
    )
}