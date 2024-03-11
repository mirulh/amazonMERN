import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';

export default function SigninScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  // ternary operator
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    // [1]
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/users/signin', {
        email,
        password,
      });
      console.log(data);
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      // alert('Invalid email or password');
      toast.error(getError(err));
    }
  };

  // if user is already signed in, redirect it to homepage
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <div className="mb-5">
          <Button type="submit">Sign In</Button>
        </div>

        <div className="mb-3    ">
          New customer?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
      </Form>
    </Container>
  );
}

/* 

Form.Control create input box for entering email or password

Difference between Link to and href. Link to is a react router that ties with <Route></Route> and is used to navigate single page application

[1] prevenDefault and react goes hand in hand because it prevents the page from refreshing upon meeting a default-refreshing function/action like onSubmit. This makes the website more single-page like


*/

/* 


FROM CHATGPT


[1]

In React, the preventDefault() function is used to prevent the default behavior of an event. This is typically used with event handlers, such as those attached to form submissions or link clicks, to prevent the default action associated with those events from occurring.

Here's why you might need to use preventDefault() in React:

    Form Submission: When you have a form in your React application and you're handling the form submission using JavaScript, you may want to prevent the default form submission behavior, which would cause the page to reload. Instead, you can handle the form submission within your React component and decide what to do with the form data.

    Link Clicks: If you're handling clicks on links in your React application, you might want to prevent the default behavior of the link, which is to navigate to the URL specified in the href attribute. This allows you to handle the navigation using JavaScript, for example, to navigate to a different route within your single-page application without causing a full page reload.

    Event Bubbling: In React, events are bubbled up through the DOM tree, meaning that an event handler on a parent element can be triggered when an event occurs on a child element. If you want to stop the event from propagating further up the DOM tree, you can use preventDefault() to stop the event's default behavior and prevent it from bubbling up.





*/
