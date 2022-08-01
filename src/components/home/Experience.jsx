import React from 'react';
import ExperienceCard from "./ExperienceCard";
import StudyCard from "./StudyCard";
import InterestsCard from "./InterestsCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Experience = ({experiences}) => {
    return (  
        <section className="section">
            <Container>
                <Jumbotron fluid className="bg-white">
                    <h2 className="display-4 mb-5 text-center">
                        {experiences.job}
                    </h2>
                    <Row>
                        {
                            experiences.data.map(data => {
                                return <ExperienceCard key={data.company} data={data} />
                            })
                        }
                    </Row>

                    <h2 className="display-4 mb-5 text-center">
                        {experiences.study}
                    </h2>
                    <Row>
                        {
                            experiences.data_study.map(data => {
                                return <StudyCard key={data.university} data={data} />
                            })
                        }
                    </Row>
                    <h2 className="display-4 mb-5 text-center">
                        {experiences.interests}
                    </h2>
                    <Row>
                        {
                            experiences.data_interests.map(data => {
                                return <InterestsCard key={data.logo} data={data} />
                            })
                        }
                    </Row>
                </Jumbotron>
            </Container>
        </section>
    );
}
 
export default Experience;