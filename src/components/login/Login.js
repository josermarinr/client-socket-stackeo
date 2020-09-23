import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import './Login.css'
import { v4 as uuidV4 } from 'uuid'

function Login( {onIdSubmit}  ) {
    
    const projectRef = useRef();

     const handleSubmit = (e)=>{

         e.preventDefault();
        
        onIdSubmit(projectRef.current.value)

    }

    const createNewTodo = () => {
        onIdSubmit(uuidV4())
    }

    return (
        <div className='login'>
            <div className="login__container">
                <div className="login__box">
                    <Form onSubmit={handleSubmit}>
                        <div className="login__header">
                            <div className="login__subtitle">
                                    Welcome to
                            </div>
                            <div className="login__stackilab">
                                Stakilab
                            </div>
                        </div>

                     
                        <Form.Group >
                            
                            <Form.Control type='text' ref={projectRef} placeholder="your project id" required/>
                        </Form.Group>

                        <Button onClick={handleSubmit} className="btn btn-primary mr-2 btn-block mt-3">Next</Button>
                        <Button onClick={createNewTodo} variant='secondary' className="btn-block mt-3">Create your project</Button>

                    </Form>
                </div>
            </div>
            
           
        </div>
    )
}

export default Login
