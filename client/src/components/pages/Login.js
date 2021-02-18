import React from "react";
import Row from "../Row";
import Col from "../Col";
import Container from "../Container";
import LoginForm from "../LoginForm";

const styles = {
    border: "3px solid black",
    marginTop: "50px",
    textAlign: "center"

}

const Login = () => (
   <Container>
        <Row>
            <Col size="md-12">
                <div className="login" style={styles}>
                <h1 style ={{textAlign: "center"}}> Welcome to Fridge for All </h1>
                <h4 style ={{textAlign: "center"}}>Please enter your login information, or register for a new account</h4>
                <LoginForm />
                </div>
            </Col>
        </Row>
     </Container>
);

export default Login;