import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const InterestsCard = ({data}) => {
    return ( 
        <Col lg="3">
            <div className="pb-5 text-center">
                <img className=" bg-white mb-7 small-img" src={data.logo} alt=""/>
                <p className="lead">
                    <i>{data.name}</i>
                    <br/>
                </p>
                
            </div>
        </Col>
     );
}
 
export default InterestsCard;