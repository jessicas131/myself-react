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
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>
          <Link to ={{
            pathname: `/detail/${props.item._id}`,
            state: { item: props.item },
          }}>
          {props.item.itemName}
          </Link>
        </h3>
      </div>
      <div className='panel-footer ListItem-action-panel'>
        
        <button
          className='btn btn-xs btn-danger margin-left-10'
          onClick={handleDeleteItem}
        >
          DELETE
        </button>
      </div>
    </div>
    </>       
  );
}

export default ListItem;