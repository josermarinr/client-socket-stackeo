import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import UseLocalStorage from '../../hooks/useLocalStorage';

function UserLogin({id}) {

    const nameRef = useRef();
    const [name, setName] = UseLocalStorage('user')

    const handleSubmit = (e) =>{
        
        e.preventDefault();
        console.log(nameRef.current.value)
       // onNameSubmit(nameRef.current.value)
        setName(nameRef.current.value)
    }

    return (
    
        <div className='login'>
            <div className="login__container">
                <div className="login__box">
                    <Form onSubmit={handleSubmit}>
                        <div className="login__header">
                           
                            <div className="login__stackilab">
                                Stakilab
                            </div>
                            <div className="login__subtitle">
                                    project id: <br/>
                                    <span className="login__subtitle__id">{id}</span>
                            </div>
                        </div>

                        <Form.Group >

                            <Form.Control type='text' ref={nameRef} placeholder="your name" required/>
                        </Form.Group>

                        
                        <Button onClick={handleSubmit} className="btn btn-primary mr-2 btn-block mt-3">Log in</Button>

                    </Form>
                </div>
            </div>
            
           
        </div>
    )
}

export default UserLogin
