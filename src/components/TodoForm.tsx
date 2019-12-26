import React, { useState, useRef } from 'react';

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = props => {

    const [title, setTitle] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const handleEnterClick = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter') {
            props.onAdd(title);
            setTitle('')
        }
    }
    return <div className='input-field mt2'>
        <input
            onChange={handleChange}
            onKeyPress={handleEnterClick}
            value={title}
            type='text'
            id='title'
            placeholder='Enter purpose' />
        <label htmlFor='title' className='active'>Enter purpose</label>
    </div>
}