import React, { Component } from "react";
import './feedcontent.scss'



class FeedContent extends Component {

      render(){

        return(
          <div className="feed-content">
              <div className="recentcontainer">
              <div className="newpostheader">
                    <a href="">
                          <img src="//i.imgur.com/5jInimY.jpg" />
                          <span className="name">First Last</span>
                    </a>
                    <span>shared <a href="">Demyos</a> <a href="">post</a>.</span>
                    <p>
                      <a className="date" href="">44 mins</a>
                      <a href="">
                      <i className="fa fa-globe"></i>
                      </a>
                      <div className="rightsideofpost">
                        <a className="follow" href="">
                          <i className="fa fa-star"></i>
                        </a>
                        <a className="personpostmenu" href="">
                          <i className="fa fa-caret-down"></i>
                        </a>
                      </div>
                   </p>
            </div>
            </div>

            <div className="newpost">
              <div className="postcontent">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate sunt quasi in quam asperiores! Optio voluptate impedit eos ex nisi, molestias facilis sint cupiditate, dolores veritatis cum? Enim vel, qui!
              </div>
            </div>

            <div className="recentcontainer">
            <div className="newpostheader">
                  <a href="">
                        <img src="//i.imgur.com/5jInimY.jpg" />
                        <span className="name">First Last</span>
                  </a>
                  <span>shared <a href="">Demyos</a> <a href="">post</a>.</span>
                  <p>
                    <a className="date" href="">44 mins</a>
                    <a href="">
                    <i className="fa fa-globe"></i>
                    </a>
                    <div className="rightsideofpost">
                      <a className="follow" href="">
                        <i className="fa fa-star"></i>
                      </a>
                      <a className="personpostmenu" href="">
                        <i className="fa fa-caret-down"></i>
                      </a>
                    </div>
                 </p>
          </div>
          </div>

          <div className="newpost">
            <div className="postcontent">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate sunt quasi in quam asperiores! Optio voluptate impedit eos ex nisi, molestias facilis sint cupiditate, dolores veritatis cum? Enim vel, qui!
            </div>
          </div>
          </div>
        )
      }
}


export default FeedContent;
