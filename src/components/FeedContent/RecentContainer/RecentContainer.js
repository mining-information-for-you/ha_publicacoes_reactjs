import React, { Component } from "react";
import './recentcontainer.scss'
import NewPostHeader from './../NewPostHeader/NewPostHeader'
import NewPost from './../NewPost/NewPost'




class RecentContainer extends Component {




      componentDidMount(){

        var data = {"authorname": 'Carlos%'};
        var url  = 'http://127.0.0.1:8085/api/Autor';

        console.log(data);
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          },
          mode: 'no-cors'
        })
        .then(response => response)
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));


    }


      render(){

        return(
            <div className="recentcontainer">
              <NewPostHeader/>
              <NewPost/>

            </div>

        )
      }
}


export default RecentContainer;
