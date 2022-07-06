import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { contact } from '../actions/userAction'

function Contact1({ location, history }) {
  
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [query, setQuery] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()

        if ( name.length == ''){
            setMessage('Password Length should be greater than 8')
        }
        else {
            dispatch(contact(name, email, query))
        }

    }

    return (
        <FormContainer>
            <h1>Contact Form</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <br />

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        required
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <br />
                <Form.Group controlId='password'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Enter query'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <br />
               
              
                <br />
                <Button type='submit' variant='primary'>
                    Submit
                </Button>

            </Form>

        
        </FormContainer >
    )
}

export default Contact1