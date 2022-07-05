import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return ( 
        <Col lg="6">
            <div className="pb-5 text-center">
                <img className=" bg-white mb-3" src={data.companylogo} alt=""/>
                <p className="lead">
                    <b>{data.role}</b>
                    <br/>
                    <i>{data.skills}</i>
                    <br/>
                    <i>{data.skills2}</i>
                    <br/>
                    {data.date}
                </p>
                
            </div>
        </Col>
     );
}
 
export default ExperienceCard;