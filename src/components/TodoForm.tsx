import React, { useState } from 'react';

export const TodoForm: React.FC = () => {

    const [title, setTitle] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const handleEnterClick = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter') {
            console.log(title);
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