import React from 'react'
import ReactDOM from 'react-dom/client'

// const h1 = React.createElement('h1', {}, 'h1 tag')
// const h2 = React.createElement('h2', {}, 'h2 tag')
// const child = React.createElement('div', { id: 'child' }, [h1, h2])

const parent =
    React.createElement('div', { id: 'parent' },
        React.createElement('div', { id: 'child' },
            [
                React.createElement('h1', {}, 'h1 tag'),
                React.createElement('h2', {}, 'h2 tag')
            ]
        ))


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)