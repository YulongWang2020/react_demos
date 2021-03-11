import React, {Component} from 'react';
import axios from "axios";
import PubSub from 'pubsub-js'

class Index extends Component {
    search =()=>{
        //get input
        //连续解构赋值并重命名
        const {keyWordNode:{value:keyWord}} = this
        PubSub.publish('state', {isFirst:false,isLoading:true});
        //send request
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response =>{
                PubSub.publish('state', {isLoading:false,users:response.data.items});
            },
            error=>{
                PubSub.publish('state', {isLoading:false,err:error.message});
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordNode = c } type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}

export default Index;