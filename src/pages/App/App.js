import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import * as itemAPI from "../../utils/items-api";
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import AllItemsPage from '../../pages/AllItemsPage/AllItemsPage';
import AddItemPage from '../../pages/AddItemPage/AddItemPage';
import ItemDetailPage from '../../pages/ItemDetailPage/ItemDetailPage';




class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      items: [],
    };
  }
  
  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({user: null, items:[]})
  }
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()})
  }

  handleAddItem = async (newItemData) => {
    const newItem = await itemAPI.create(newItemData);
    this.setState(
      (state) => ({
        items: [...state.items, newItem],
      }),
      () => this.props.history.push("/")
    );
  };


  // handleUpdateItem = async updatedItemData => {
  //   const updatedItem = await itemAPI.update(updatedItemData);
  //
  //   const newItemsArray = this.state.items.map(i => 
  //     i._id === updatedItem._id ? updatedItem : i
  //   );
  //   this.setState(
  //     {items: newItemsArray},
  //     // This cb function runs after state is updated
  //     () => this.props.history.push('/')
  //   );
  //  }


  /*--- Lifecycle Methods ---*/
 async componentDidMount() {
     const items = await itemAPI.getAll();
    this.setState({ items });
  }

  render() {
    return (
      <div>
        <NavBar 
        user={this.state.user} 
        handleLogout={this.handleLogout}
        />
        <Switch>
          <div className="container">
          <Route
           exact 
           path='/'  
           render={() => 
           userService.getUser()?
           <AllItemsPage items={this.state.items} 
           />
          :
          <Redirect to = "/login" />}
          />
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({history}) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              user={this.user}
            />
          }/>
          <Route
            exact
            path="/add"
            render={({history}) => <AddItemPage history={history} handleAddItem={this.handleAddItem} />}
          />
          <Route
            exact
            path="/detail/:id"
            render={({history}) => <ItemDetailPage history={history} />}
          />
        </div>
        </Switch>
      </div>
    );
  }
}
export default App;