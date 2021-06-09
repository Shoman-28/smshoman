import React from 'react';
import './Blog.css';
import { Button, Card } from 'react-bootstrap';
// import Fade from 'react-reveal/Fade';
const BlogCard = (props) => {
    console.log(props)
    const {name, details, liveLink, image}= props.projcet
        
    return (
        
        <div className="col-md-6 col-lg-4 mb-4">
           {/* <Fade right> */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image}  />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text><small style={{color:"black", fontSize:"15px"}}>{details}</small></Card.Text>
                    <div className="d-flex justify-content-between">
                       
                        <a href={liveLink} target="_blank"> <Button variant="success">Read more</Button></a>
                    </div>
                </Card.Body>
            </Card>
            
            {/* </Fade> */}
        </div>
        
    );
};


export default BlogCard;