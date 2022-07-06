import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Post from './Post';
const config ={
    width: "400px",
    height: "500px",
    floating: true,
  };

class Contact extends Component {
  render() {
    return (
      <ChatBot 
        steps={[
          {
            id:'q-firstname', 
            message:'What is your name?', 
            trigger:'firstname',
          },
          {
            id:'firstname', 
            user:true,
            trigger:'q-email',
            validator: (value) => {
                if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value))
                  {
                    return true;
                  }
                else
                  {
                    return'Please input alphabet characters only.';
                  }
             },
          },
         
          {
            id:'q-email', 
            message:'What is you email?', 
            trigger:'email',
          },
          {
            id:'email', 
            user:true,
            trigger:'q-phone',
            validator: (value) => {
                if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(value))
                  {
                    return true;
                  }
                else
                  {
                    return'Please enter a valid email.';
                  }
             },
          },
          {
            id:'q-phone', 
            message:'Can you tell your phone number?', 
            trigger:'phone',
           },
           {
            id:'phone', 
            user:true, 
            trigger:'q-message',
            validator: (value) => {
               if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value))
                 {
                   return true;
                 }
               else
                 {
                   return'Please enter a valid phone number.';
                 }
            },
           },
           {
            id:'q-message', 
            message:'What your query', 
            trigger:'message',
           },
           {
            id:'message', 
            user:true, 
            trigger:'q-submit',
            validator: (value) => {
                if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value))
                  {
                    return true;
                  }
                else
                  {
                    return'Please input alphabet characters only.';
                  }
             },
           },
          {
            id:'q-submit', 
            message:'Do you wish to submit?', 
            trigger:'submit'
          },
          {
            id:'submit', 
            options:[
            {value:'y', label:'Yes', trigger:'end-message'},
            {value:'n', label:'No', trigger:'no-submit'},
            ] 
          },
          {
                  id: 'no-submit',
                  message:'Your information was not submitted.', 
                  end: true,
               },
                    {
                  id: 'end-message',
                  component: <Post />,
                  asMessage: true,
                  end: true,
               },
        ]}
        {...config}
      />
        
        );
      }

    }

    export default Contact;