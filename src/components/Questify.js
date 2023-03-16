import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget'; 
import "./css/Questify.css";

function Questify() {
  return (
    <div className='questify'>
        <Header/>
        <div className="qcontents">
          <div className="qcontent">
            <Sidebar/>
            <Feed/>
            <Widget/>

          </div>
        </div>
    </div>
  )
}

export default Questify
