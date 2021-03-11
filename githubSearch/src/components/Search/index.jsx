import React, {Component} from 'react';
import axios from "axios";
import PubSub from 'pubsub-js'

class Index extends Component {
    // search =()=>{
    //     //get input
    //     //连续解构赋值并重命名
    //     const {keyWordNode:{value:keyWord}} = this
    //     PubSub.publish('state', {isFirst:false,isLoading:true});
    //     //send request
    //     // axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
    //     //     response =>{
    //     //         PubSub.publish('state', {isLoading:false,users:response.data.items});
    //     //     },
    //     //     error=>{
    //     //         PubSub.publish('state', {isLoading:false,err:error.message});
    //     //     }
    //     // )
    //     fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
    //         response =>{
    //             console.log("connect server success",response.json())
    //             return response.json()
    //         },
    //         // error=>{
    //         //     console.log("connect server failed",error)
    //         //     return new Promise(()=>{})
    //         // }
    //     ).then(
    //         response =>{
    //             console.log("get data success",response)
    //         },
    //         // error =>{
    //         //     console.log("get data failed",error)
    //         // }
    //     ).catch(
    //         (error)=>{console.log(error)}
    //     )
    // }

    search = async ()=> {
        //get input
        //连续解构赋值并重命名
        const {keyWordNode: {value: keyWord}} = this
        PubSub.publish('state', {isFirst: false, isLoading: true});
        try{
            const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`)
            const data = await response.json()
            PubSub.publish('state', {isLoading:false,users:data.items});
            console.log(data)
        }catch (error){
            console.log(error)
            PubSub.publish('state', {isLoading:false,err:error.message});
        }
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

function getNumber(){
    var p = new Promise(function(resolve, reject){
        setTimeout(function(){
            var num = Math.ceil(Math.random()*10);
            if(num<=5){
                resolve(num);
            }
            else{
                reject('Number too big');
            }
        }, 1000);
    });
    return p;
}

export default Index;