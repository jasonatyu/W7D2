import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {title: "", body: "", done: false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleBody = this.handleBody.bind(this);
    }

    handleBody(e) {
        e.preventDefault();
        this.setState({body: e.currentTarget.value});
    }

    handleTitle(e) {
        e.preventDefault();
        this.setState({title: e.currentTarget.value });
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        this.props.receiveTodo(this.state);
        this.setState({title: "", body: ""});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="title"></label>Title: 
                <input id="title" type="text" value={this.state.title} onChange={this.handleTitle}/>
                <label htmlFor="body"></label>Body: 
                <input id="body" type="text" value={this.state.body} onChange={this.handleBody}/>
                <input type="submit" value="New Todo"/>
            </form>
        );
    }
}

export default TodoForm;