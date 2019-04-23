import React from 'react';
import uniqueId from '../../utils/uniqueId';
import { merge } from "lodash";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {id: "", title: "", body: "", done: false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleBody = this.handleBody.bind(this);
    }

    handleBody(e) {
        e.preventDefault();
        this.setState({id: uniqueId(), body: e.currentTarget.value});
    }

    handleTitle(e) {
        e.preventDefault();
        this.setState({id: uniqueId(), title: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTodo(this.state).then(
            () => this.setState({ id: "", title: "", body: "" })
        );
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