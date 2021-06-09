import React from 'react';
import './ProjectDetails.css'
import { Button, Card } from 'react-bootstrap';
// import Fade from 'react-reveal/Fade';

const ProjectDetails = (props) => {
    console.log(props)
const {name, details, gitLink, liveLink, image}= props.projcet
    
   
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            {/* <Fade right> */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image}  />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text><small style={{color:"black", fontSize:"15px"}}>{details}</small></Card.Text>
                    <div className="d-flex justify-content-between">
                        <Button className="mr-3 " variant="success" href={gitLink} target="_blank">GitHub link</Button>
                        <Button className="ml-3" variant="success" href={liveLink} target="_blank">Live link</Button>
                    </div>
                </Card.Body>
            </Card>
            {/* </Fade> */}
            
        </div>
    );
};

export default ProjectDetails;