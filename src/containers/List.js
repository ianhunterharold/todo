import React from 'react';
import { Component } from 'react';
import '../style/List.css';


class List extends Component {

    state = {
        todoInput: ''
    }

    handleChange =(event)=> {
        this.setState({
            todoInput: event.target.value
        })
    }


    

    render(){
        return(
            <div className="body">
                Your Daily Tasks
                <form>
                    <label>
                        
                        <input type="text" name="todo" placeholder="never ending list" value={this.state.todoInput} onChange={this.handleChange} />
                    </label>
                        <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default List;