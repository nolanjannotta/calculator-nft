import React from 'react'
import Supply from './Supply';
import Body from './Body';
import "./MainBody.css";


function MainBody() {
  return (
      <div className="main_body">
          <Supply></Supply>
            <Body></Body>
    </div>
  )
}

export default MainBody