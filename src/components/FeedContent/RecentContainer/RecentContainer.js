import React, { Component } from "react";
import './recentcontainer.scss'
import NewPostHeader from './../NewPostHeader/NewPostHeader'
import NewPost from './../NewPost/NewPost'




class RecentContainer extends Component {



      componentDidMount(){
        const resquetInfo = {
            method:'POST',
            body:JSON.stringify({"authorname": "Carlos Paiva"}),
            headers: new Headers({
                'Content-type':'application/json',
                'Access-Control-Allow-Origin': '*',
            }),
            mode: 'no-cors'
          }

        fetch('http://127.0.0.1:8085/api/Autor', resquetInfo)
              .then(response => {
                if (response.ok){
                  console.log('okk');
                   return response.text();
                }else{
                  console.log('Error');
                }
              })
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
