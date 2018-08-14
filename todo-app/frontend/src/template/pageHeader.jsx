import React from 'react'

export default props => (
    <header className='page-header'>
        <h2>{props.title} <small>{props.subtitle}</small></h2>
    </header>
)