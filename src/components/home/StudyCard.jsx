import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return ( 
        <Col lg="6">
            <div className="pb-5 text-center">
                <img className=" bg-white mb-3" src={data.schoollogo} alt="" width="32%" height="32%"/>
                <img className=" bg-white mb-3" src={data.schoollogo2} alt="" width="32%" height="32%"/>
                <p className="lead">
                    <b>{data.university}</b>
                    <br/>
                    <i>{data.section}</i>
                    <br/>
                    <i>{data.degree}</i>
                    <br/>
                    {data.date}
                </p>
                
            </div>
        </Col>
     );
}
 
export default ExperienceCard;