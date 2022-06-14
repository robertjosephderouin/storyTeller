// Prompts.js
import React from 'react';
import Card from './Card';
import './Prompts.css';

const Prompts = ({prompts}) => {
    
    const promptCards = prompts.map(prompt => {
        return (
            <Card
            key={prompt.id}
            id={prompt.id}
            title={prompt.title}
            text={prompt.text}
            />  
        )
    })

    return (
        <div className='prompts-container'>
            {promptCards}
        </div>
    )
}

export default Prompts;