import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome!</h1>
                <p>Let's get started on a new project.</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
