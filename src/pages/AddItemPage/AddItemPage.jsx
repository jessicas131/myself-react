import React, {Component} from 'react';
import tokenService from '../../utils/tokenService';

class AddItemPage extends Component {
 state = {
   invalidForm: true,
   formData: {
    itemName: '',
    quantity: '0',
    retailPrice: '0',
    sku: '',
    supplier:'',
    description: '',
    user: tokenService.getUserFromToken(),
   }
 };

 formRef = React.createRef();

 handleSubmit = e => {
   e.preventDefault();
   this.props.handleAddItem(this.state.formData);
 };

 handleChange = e => {
   const formData = {...this.state.formData, [e.target.name]: e.target.value};
   this.setState({
     formData,
     invalidForm: !this.formRef.current.checkValidity()
   });
 };

 
 render() {
   return (
     <>
       <h1>Add an Inventory Item</h1>
       <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
         <div className="form-group">
           <label>Item's Name</label>
           <input
             className="form-control"
             name="itemName"
             value={this.state.formData.itemName}
             onChange={this.handleChange}
           />
         </div>
         <div className="form-group">
           <label>Quantity</label>
           <input
             className="form-control"
             name="quantity"
             value={this.state.formData.quantity}
             onChange={this.handleChange}
           />
         </div>
         <div className="form-group">
           <label>Retail Price:</label>
           <input
             className="form-control"
             name="retailPrice"
             value={this.state.formData.retailPrice}
             onChange={this.handleChange}
           />
         </div>
         <div className="form-group">
           <label>SKU:</label>
           <input
             className="form-control"
             name="sku"
             value={this.state.formData.sku}
             onChange={this.handleChange}
           />
         </div>
         <div className="form-group">
           <label>Supplier:</label>
           <input
             className="form-control"
             name="supplier"
             value={this.state.formData.supplier}
             onChange={this.handleChange}
           />
         </div>
         <div className="form-group">
           <label>Description:</label>
           <input
             className="form-control"
             name="description"
             value={this.state.formData.description}
             onChange={this.handleChange}
           />
         </div>
         <button
           type="submit"
           className="btn"
           disabled={this.state.invalidForm}
         >
           Add Item
         </button>
       </form>
     </>
   );
 }
}
export default AddItemPage;