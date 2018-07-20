import React, { Component } from "react";
import './thirdcolcontent.scss'



class ThirdcolContent extends Component {

      render(){
        return(

          <div className="thirdcol-content">
            <div className="section-content">
              <h4>
                Pontuação

                <a href="">
                  <i className="fa fa-caret-up"></i>
                </a>
                <hr></hr>
              </h4>

              <a href="">
                <i className="fa fa-caret-down"></i>
              </a>



            </div>
            <div className="section-content">
              <a href="">
                <i className="fa fa-calendar"></i>
                1 Mensagem
              </a>
            </div>
            <div className="section-content">
              <h4>
                Recomendações

              </h4>
              <div className="trend-feed">
                <ul>
                  <li>
                    <a href="">Carlos Paiva</a>
                    <span>Factors associated with palliative care referral among patients.. ‑ <span>HA Barretos</span></span>
                  </li>
                  <li>
                    <a href="">Teoclito Sachetto</a>
                    <span>Prognostic factors for lymph node metastasis from advanced.. ‑ <span>HA Barretos</span></span>
                  </li>
                  <li>
                    <a href="">Laura Cendron</a>
                    <span>Pathogenic strains of Helicobacter pylori use a type IV secretion.. ‑ <span>Pubmed</span></span>
                  </li>
                </ul>
                <div>
                  <a href="">
                    <i className="fa fa-caret-down"></i>
                    Mais
                  </a>
                  <a href="">
                    <i className="fa fa-question"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="section-content">
              <a href="http://localhost:3001/">
              <h4>
                Chat
              </h4>
              </a>


            </div>



          </div>


        )
      }
}


export default ThirdcolContent;
