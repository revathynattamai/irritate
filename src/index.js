import React from 'react';
import ReactDOM from 'react-dom';
const TodoApp = React.createClass({
    render(){
        return(
            React.createElement('h3',
        null,
        'TODO')
        );
    }
})

ReactDOM.render(<TodoApp />,document.getElementById('root'));
