import React, { useEffect, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid'

function TodoForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e =>{
        setInput(e.target.value)
    }
    const heandleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: uuidV4(),
            text: input
        })

        setInput('')
    }


    return (
        <div>
            <Form className='todo__form' onSubmit={heandleSubmit}>
                {props.edit ? (
                    <>
                    <Form.Control
                        type='text' 
                        value={input}
                        placeholder="update"
                        name="text"
                        className='todo__input edit'
                        onChange={handleChange}
                        ref={inputRef}
                    />

                    <Button onClick={heandleSubmit} className='todo__button edit'>Add todo</Button>
                </>

                ) :  (
                    <>
                    <Form.Control
                        type='text' 
                        value={input}
                        placeholder="add a todo"
                        name="text"
                        className='todo__input'
                        onChange={handleChange}
                        ref={inputRef}
                    />

                    <Button onClick={heandleSubmit} className='todo__button'>Add todo</Button>
                    </>
               )
                }

            </Form>
        </div>
    )
}

export default TodoForm
