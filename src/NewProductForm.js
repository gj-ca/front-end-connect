import React, { useEffect, useState } from 'react'

export default function NewProductForm(props) {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addToProducts(formData)
        props.history.push("/products")
    }

    const handleChange = (event) => {
        let formField = event.target.id
        setFormData({...formData, [formField]: event.target.value })
    }
    return  (
        <>
            <h1>New Product</h1>
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
                <button>Create!</button>
            </form>
        </>
    )
}