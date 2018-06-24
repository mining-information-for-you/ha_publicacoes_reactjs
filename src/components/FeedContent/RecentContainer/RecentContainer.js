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
               <div  className="recentcontainer">

               <ul className="none">
               {
                   results.map((item, indice) => {
                     return (
                              <li className="lista" key={indice}>

                                <NewPostHeader autor={item.autor} ano={item.ano} revista={item.revista}></NewPostHeader>
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
