import React, {useState, useEffect} from "react";
import "./AllItemsPage.css";
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
      <h1>Inventory List</h1>
      <div className="AllItemsPage-grid">
        {items.map(item => (
          <ListItem item={item} key={item._id} change={change} setChange={setChange} handleDeleteItem={props.handleDeleteItem} />
        ))}
      </div>
    </>
  );
}

export default AllItemsPage;