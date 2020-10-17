import React from 'react';
import {Link} from 'react-router-dom';
import './ListItem.css';
import * as itemAPI from "../../utils/items-api";
// import ItemDetailPage from '../../pages/ItemDetailPage/ItemDetailPage';

function ListItem(props) { 
  
  function handleDeleteItem(){
    itemAPI.deleteOne(props.item._id).then(res => props.setChange(!props.change))
  }

  return (
    <>
      <tr>
      <th scope="row">
        <Link to ={{
          pathname: `/detail/${props.item._id}`,
          state: { item: props.item },
        }}>
          {props.item.itemName}
        </Link>
      </th>
      <td>{props.item.retailPrice}</td>
      <td>{props.item.quantity}</td>
      <td> 
        <button type="button"
                className="btn btn-outline-dark btn-sm"
                onClick={handleDeleteItem}
        >
          DELETE
        </button>
      </td>
      </tr>
    </>       
  );
}

export default ListItem;