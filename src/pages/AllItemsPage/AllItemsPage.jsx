import React, {useState, useEffect} from "react";
import './AllItemsPage.css';
import ListItem from '../../components/ListItem/ListItem';
import * as itemAPI from "../../utils/items-api";


function AllItemsPage(props) {
  const [items, setItems] = useState([]);
  const [change, setChange] = useState(true);

  useEffect(function(){
    itemAPI.getAll().then(res => setItems(res))
  }, [change])
  
  return (
    <>
      <h1 className="title">Inventory List</h1>
      <table className="table table-hover">
      <thead className="thead-light">
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <ListItem item={item} key={item._id} change={change} setChange={setChange} handleDeleteItem={props.handleDeleteItem} />
        ))}
        </tbody>
      </table>
    </>
  );
}

export default AllItemsPage;