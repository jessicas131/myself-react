import React, { useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import * as itemAPI from "../../utils/items-api";

function ItemDetailPage(props) {
  const [details, setDetails] = useState(null);
  

  const {id} = useParams()
  
  useEffect(() => {
    itemAPI.getOne(id).then(res => setDetails(res))
  }, [id])
  
  
  
  
  
  
  return(
    details && (
      <>
      <h1>{details.itemName}</h1>
      </>
    )
  )
}

export default ItemDetailPage;