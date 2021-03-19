import React, {Component} from 'react';
import {nanoid} from 'nanoid';
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../actions/personaction'
class Person extends Component {
    addPerson = ()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value*1
        const personObj={id:nanoid(),name,age}
        console.log("addperson")
        this.props.addPerson(personObj)
    }
    render() {
        return (
            <div>
                <input ref={c=>this.nameNode = c} type="text" placeholder="enter name"/>
                <input ref={c=>this.ageNode = c} type="text" placeholder="enter age"/>
                <button onClick={this.addPerson}>Add Person</button>
                <h3>Sum: {this.props.count}</h3>
                <ul>
                    {
                        this.props.persons.map((p)=>{
                            return <li key={p.id}>{p.name} {p.age}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({persons:state.persons,count:state.sum}),{addPerson: createAddPersonAction}
)(Person)