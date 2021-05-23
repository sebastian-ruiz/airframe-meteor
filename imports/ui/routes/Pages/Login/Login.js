import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
    Form,
    FormGroup,
    FormText,
    Input,
    CustomInput,
    Button,
    Label,
    EmptyLayout,
    ThemeConsumer
} from './../../../components';

import { HeaderAuth } from "../../components/Pages/HeaderAuth";
import { FooterAuth } from "../../components/Pages/FooterAuth";

const Login = () => {
    const history = useHistory();
    const user = useTracker(() => Meteor.user());
    if (user) {
        // user is logged in, now redirect
        history.push('/');
    }
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const submit = e => {
      e.preventDefault();
  
      Meteor.loginWithPassword(username, password);
    };
  
    return (
    <EmptyLayout>
        <EmptyLayout.Section center>
            { /* START Header */}
            <HeaderAuth 
                title="Sign In to Application"
            />
            { /* END Header */}
            { /* START Form */}
            <Form className="mb-3" onSubmit={submit}>
                <FormGroup>
                    <Label for="emailAdress">
                        Email Adress
                    </Label>
                    <Input type="email" name="email" id="emailAdress" placeholder="Enter email..." className="bg-white" onChange={e => setUsername(e.target.value)} />
                    <FormText color="muted">
                        We'll never share your email with anyone else.
                    </FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="password">
                        Password
                    </Label>
                    <Input type="password" name="password" id="password" placeholder="Password..." className="bg-white" onChange={e => setPassword(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <CustomInput type="checkbox" id="rememberPassword" label="Remember Password" inline />
                </FormGroup>
                <ThemeConsumer>
                {
                    ({ color }) => (
                        <Button type="submit" color={ color } block>
                            Sign In
                        </Button>
                    )
                }
                </ThemeConsumer>
            </Form>
            { /* END Form */}
            { /* START Bottom Links */}
            <div className="d-flex mb-5">
                <Link to="/pages/forgotpassword" className="text-decoration-none">
                    Forgot Password
                </Link>
                <Link to="/pages/register" className="ml-auto text-decoration-none">
                    Register
                </Link>
            </div>
            { /* END Bottom Links */}
            { /* START Footer */}
            <FooterAuth />
            { /* END Footer */}
        </EmptyLayout.Section>
    </EmptyLayout>
    );
};

export default Login;
