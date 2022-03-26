import React from 'react';
import axios from 'axios';

export default class BooksService extends React.Component {
  state = {
    books: [],

  }

  componentDidMount() {
    axios.get(`https://bookapi.qurmaca.org/api/home?category1=1&category2=2&category3=3&category4=4`)
      .then(res => {
        const books = res.data;
        console.log(res)
        this.setState({ books });
      })
  }

  render() {
    return (
      this.state.books
    )
    
    
  }
}
