import React, {Component} from 'react';
import {nanoid} from "nanoid";
import './index.css'
class Index extends Component {
    render() {
        const {users,isFirst,isLoading,err} = this.props
        return (
            <div className="row">
                <div className="card">
                    {
                        isFirst ? <h2>Enter keyword to search</h2> :
                        isLoading ? <h2>Loading...</h2> :
                        err ? <h2 style={{color:'red'}}>{err}</h2> :
                        this.props.users.map((userObj)=>{
                            return (
                                <div key={userObj.id} className='card'>
                                    <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                        <img alt ="avatar" src={userObj.avatar_url}
                                             style={{width:'100px'}}/>
                                    </a>
                                    <p className="card-text">{userObj.login}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Index;