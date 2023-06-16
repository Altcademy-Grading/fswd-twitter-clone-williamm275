import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
      success: '',
      error: '',
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  signup = e => {
    e.preventDefault();

    fetch(
      '/api/users',
      safeCredentials({
        method: 'POST',
        body: JSON.stringify({
          user: {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
          },
        }),
      }),
    )
      .then(handleErrors)
      .then(data => {
        console.log('data:', data);
        this.setState({
          email: '',
          password: '',
          username: '',
          success: 'Sign up success!. You are now allowed to Log in.',
        });
      })
      .catch(error => {
        this.setState({
          error: 'Sorry you failed to sign up. Please try again.',
        });
      });
  };

  render() {
    const { username, email, password, success, error } = this.state;
    return (
      <div className='p-3 log-in-sign-up-background rounded'>
        <h6 className='my-3'>
          <b>Join Twitter today</b>
        </h6>
        <Form onSubmit={this.signup}>
          <Form.Group className='mb-3'>
            <Form.Control
              type='username'
              placeholder='Username'
              name='username'
              value={username}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Control
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Control
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <div className='d-grid gap-2'>
            <Button
              type='submit'
              variant='primary'
              size='sm'
              className='sign-up-button'
            >
              Sign up for Twitter
            </Button>
          </div>
          {success && <p className='text-warning mt-2'>{success}</p>}
          {error && <p className='text-danger mt-2'>{error}</p>}
        </Form>
      </div>
    );
  }
}

export default Signup;
