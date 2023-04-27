import Product from "./Product.js";
import {useState} from "react";

export default function StoreFront() {

    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [validation, setValidation] = useState("");

    function handleFormSubmit(event) {
        event.preventDefault();

        if (!name) {
            setValidation("Please enter a name");
            return ;
        }
        if (!description){
            setValidation("Please enter a description");
            return ;
        }
        setProducts([...products, {
            id: products.length + 1,
            name: name,
            description: description
        }]);
        setName("");
        setDescription("");
        setValidation("");
    }

    function handleDeleteButton(eb){
        setProducts(products.filter(product=>{
            product.id!=eb
        }))
    }

    return <>
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="product-Name">Name:</label>
                <input type="text" id="product-Name" value={name} placeholder="Enter the name" className="textfield" onChange={e=>setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="product-description">Description:</label>
                <input type="text" id="product-description" value={description} placeholder="Enter the description" className="textfield"  onChange={e=>setDescription(e.target.value)}/>
            </div>
            <div className="form-footer">
                <div className="validation-message">{validation}</div>
                <input type="submit" className="btn btn-primary" value="Add product" />
            </div>
        </form>
        
        <div>{products.length === 0 && <p>Add your first product</p>}</div>
        <ul className="store-front">
            {products.map((product)=>{return (<li key={product.id}>
                <Product details={product} />
                <button className="btn-outline btn-delete" onClick={()=>handleDeleteButton(products.id)}>Delete</button>
            </li>)
            })}
        </ul>
    </>;
}