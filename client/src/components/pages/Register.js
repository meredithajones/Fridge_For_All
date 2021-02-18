import React from "react";
import Row from "../Row";
import Col from "../Col";
import Container from "../Container";
import RegisterForm from "../RegisterForm";

const styles = {
    border: "3px solid black",
    marginTop: "50px"

}

const Register = () => (
    <Row>
   <Container>
        
            <Col size="md-12">
                <div className="login" style={styles}>
                <h1 style={{textAlign: "center"}}>Welcome to Fridge for All </h1> 
                <h4 style={{textAlign: "center", fontSize: "30px"}}>Please sign up for a new account below</h4>
                <RegisterForm />
                </div>
            </Col>
        
     </Container>
     </Row>
);

export default Register;