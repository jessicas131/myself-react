import React, { useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import * as itemAPI from "../../utils/items-api";

function ItemDetailPage(props) {
  const [details, setDetails] = useState(null);
  const {id} = useParams()
  const [editedItem, setEditedItem] = useState(details);

  const [viewMode, setViewMode] = useState(true);
  
  
  useEffect(() => {
    itemAPI.getOne(id).then(res => {
      setDetails(res)
      setEditedItem(res)
    })
  }, [id])
  
  
  return(
    details && (
      <>
      <div className="container">
      <h1>Item Details:</h1>
      {viewMode ? (
        <div>
          <h3>{details.itemName}</h3>
          <h3>{details.quantity}</h3>
          <h3>{details.retailPrice}</h3>
          <h3>{details.sku}</h3>
          <h3>{details.supplier}</h3>
          <h3>{details.description}</h3>
          <button onClick={() => setViewMode(false)}>EDIT</button>
      </div>
      ) :
      (
        <div>
          <div className="form-group">
          <label>Item's Name</label>
          <input
            className="form-control"
            name="itemName"
            value={editedItem.itemName}
            onChange={(evt) => setEditedItem({...editedItem, ...{itemName: evt.target.value}})}
          />
        </div>
        <div className="form-group">
          <label>Quantity</label>
          <input
            className="form-control"
            name="quantity"
            value={editedItem.quantity}
            onChange={(evt) => setEditedItem({...editedItem, ...{quantity: evt.target.value}})}
          />
        </div>
        <div className="form-group">
          <label>Retail Price:</label>
          <input
            className="form-control"
            name="retailPrice"
            value={editedItem.retailPrice}
            onChange={(evt) => setEditedItem({...editedItem, ...{retailPrice: evt.target.value}})}
          />
        </div>
        <div className="form-group">
          <label>SKU:</label>
          <input
            className="form-control"
            name="sku"
            value={editedItem.sku}
            onChange={(evt) => setEditedItem({...editedItem, ...{sku: evt.target.value}})}
          />
        </div>
        <div className="form-group">
          <label>Supplier:</label>
          <input
            className="form-control"
            name="supplier"
            value={editedItem.supplier}
            onChange={(evt) => setEditedItem({...editedItem, ...{supplier: evt.target.value}})}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            className="form-control"
            name="description"
            value={editedItem.description}
            onChange={(evt) => setEditedItem({...editedItem, ...{description: evt.target.value}})}
          />
        </div>
        <button onClick={() => {
          itemAPI.update(editedItem).then(res => {
            setDetails(res)
          })
          setViewMode(!viewMode);
          
        }}>
          Submit
        </button>
    </div>
    )}
    </div>
    </>
    )
  )
}

export default ItemDetailPage;