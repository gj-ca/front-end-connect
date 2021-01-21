import React, { useEffect, useState } from 'react'

export default function EditProductForm(props) {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: ""
    })

    useEffect(() => {
        let product = props.products[props.match.params.id]
        setFormData(product)
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateProducts(formData, props.match.params.id)
        props.history.push("/products")
    }

    const handleChange = (event) => {
        let formField = event.target.id
        setFormData({...formData, [formField]: event.target.value })
    }
    return (
        <>
            <h1>Edit Product</h1>
            <form onSubmit={handleSubmit}>
                <div style={{width: "50%"}}>
                    <div style={{
                        display: "inline-flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        paddingRight: "10px"
                    }}>
                        <label htmlFor="name">Name</label>
                        <label htmlFor="description">Description</label>
                        <label htmlFor="price">Price</label>

                    </div>
                    <div style={{
                        display: "inline-flex",
                        flexDirection: "column",
                    }}>
                        <input onChange={handleChange} id="name" value={formData.name} />
                        <input onChange={handleChange} id="description" value={formData.description}/>
                        <input onChange={handleChange} id="price" value={formData.price}/>
                    </div>
                </div>
                <button>Update!</button>
            </form>
        </>
    )
}