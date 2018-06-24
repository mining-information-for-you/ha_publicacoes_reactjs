import React, { Component } from "react";
import './recentcontainer.scss'
import NewPostHeader from './../NewPostHeader/NewPostHeader'
import NewPost from './../NewPost/NewPost'
import { connect } from 'react-redux'




class RecentContainer extends Component {



      constructor(props){
        super(props)
        const results = []
      }



      render(){
        const { resultado } = this.props
        const { lista } = this.props
        const results = this.props.lista.result

        //console.log(results);
        if (results) {
             return (
               <div>

               <ul className="list-group">
               {
                   results.map((item, indice) => {
                     return (
                              <li className="list-group-item"  key={indice}>

                                <NewPostHeader autor={item.autor}></NewPostHeader>
                                <NewPost producao={item.producao}></NewPost>
                                


                              </li>
                           )
                         })
               }


              </ul>

                          </div>
             );


        }else{
          return (
              <div>
                <NewPostHeader></NewPostHeader>
                <NewPost></NewPost>
              </div>
          );
        }

     }
}

const mapStateToProps = (state) => {
    return {
         resultado: state.result,
         lista: state.success

    }
}


export default connect(mapStateToProps)(RecentContainer) ;
