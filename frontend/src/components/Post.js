import React, { Component } from 'react';
import axios from 'axios';


class Post extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { submit, firstname, email, phone, message } = steps;

    this.state =  { submit, firstname, email, phone, message }; 
  }


  componentDidMount() {
    const userObject = {
      submit:this.state.submit.value,
      first_name:this.state.firstname.value,
      email:this.state.email.value,
      phone:this.state.phone.value,
      message:this.state.message.value
    };
    axios.post(`/api`, userObject)
    .then(res => {
      console.log(res.status)
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>Our team will contact you soon!!</div>
      );
    }
  };


  export default Post;