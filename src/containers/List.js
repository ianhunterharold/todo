import React from 'react';
import { Component } from 'react';
import '../style/List.css';


class List extends Component {

    state = {
        todoInput: '',
        todoList: ["buy groceries", "shop for new shoes","buy tv"],
    }

    handleChange =(event)=> {
        this.setState({
            todoInput: event.target.value
        })
    }

    mapOverToDoItems = () => {
        return this.state.todoList.map((listItems)=> {
            return (
                <div>
                    <ul>
                        {listItems}
                    </ul>
                </div>
            )
        })
    }

    handleToDoSubmit = (e) => {
        e.preventDefault();
        console.log("you will send this to your backend to persist that data then you will bring it back and repost it on your page for now we will add it to the state of the array")
        this.setState( (previousState) => {
            return {
                todoList: [...previousState.todoList,this.state.todoInput]
            }
        })

    }
    

    render(){
        return(
            <>
                <div className="body">
                    Your Daily Tasks
                    <form onSubmit={this.handleToDoSubmit}>
                        <label>
                            
                            <input type="text" name="todo" placeholder="never ending list" value={this.state.todoInput} onChange={this.handleChange} />
                        </label>
                            <input type="submit" value="Submit" />
                    </form>
                    <div className="list">
                    {this.mapOverToDoItems()}  
                    </div>
                </div>
            </>
        )
    }
}

export default List;