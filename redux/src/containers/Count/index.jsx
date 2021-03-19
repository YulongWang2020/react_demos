import React, {Component} from "react";
import {connect} from "react-redux";
import {
    createDecrementAction,
    createIncrementAction,
    createIncrementAsyncAction
} from "../../actions/count"

class Count extends Component {
    state = {carName: "BMW"}

    increment =()=>{
        const {value} = this.selectNumber
        this.props.add(value*1)
    }

    decrement=()=>{
        const {value} = this.selectNumber
        this.props.minus(value*1)

    }

    incrementIfOdd=()=>{
        const {value} = this.selectNumber
        if (this.props.count % 2 !==0){
            this.props.add(value*1)
        }
    }

    incrementAsync=()=>{
        const {value} = this.selectNumber
        this.props.addAsync(value*1,500)
    }

    render() {
        return (
            <div>
                <h1>Current Sum: {this.props.count}</h1>
                <select ref={c=> this.selectNumber = c }>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>Add when sum is odd</button>&nbsp;
                <button onClick={this.incrementAsync}>Add async</button>&nbsp;
                <ul>
                    {
                        this.props.persons.map((p)=>{
                            return <li key ={p.id}>name: {p.name}, age: {p.age}</li>
                        })
                    }
                </ul>

            </div>
        );
    }
}


export default connect(
    state =>({count:state.sum,persons:state.persons}),
    {
        add:createIncrementAction,
        minus:createDecrementAction,
        addAsync:createIncrementAsyncAction,
    }
)(Count)





