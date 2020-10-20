import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchQuery: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(usersData => this.setState({ users: usersData }))
  }

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  render() {
    //const users = this.state.users;
    //const searchQuery = this.state.searchQuery;
    //below is short way to define these above lines
    const { users, searchQuery } = this.state;

    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return (
      <div className="App">
        <h1>Universal Users</h1>
        <SearchBox
          placeholder='search users'
          handleChange={this.handleChange} />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}


export default App;

/*
click 1 = nothing will happen
click 2 = button 1 clicked
click 3 = button 1 clicked
click 4 = button 3 clicked
*/