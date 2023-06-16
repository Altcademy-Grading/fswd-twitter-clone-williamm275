import React from 'react';
import { handleErrors, safeCredentials } from '@utils/fetchHelper';

class UserField extends React.Component {
  constructor(props) {
    super(props);
  }

  logout = e => {
    e.preventDefault();

    fetch(
      'api/sessions',
      safeCredentials({
        method: 'DELETE',
      }),
    )
      .then(handleErrors)
      .then(data => {
        if (data.success) {
          this.setState({
            authenticated: false,
          });
          const params = new URLSearchParams(window.location.search);
          const redirect_url = params.get('redirect_url') || '/';
          window.location = redirect_url;
        }
      })
      .catch(error => {
        this.setState({
          error: 'You could not sign out.',
        });
      });
  };

  render() {
    const { username, email } = this.props;

    return (
      <div className='container-fluid  mt-2 '>
        <div className='row d-flex'>
          <div className='border rounded m-2 pt-3'>
            <div className='col-12 px-5'>
              <h6>{username}</h6>
              <h6>@{username}</h6>
            </div>

            <div className='row d-flex flex-row px-5 justify-space-between'>
              <div className='col-md-3 w-5'>
                <h6 className='mb-0'>Tweets</h6>
                <p>8</p>
              </div>
              <div className='col-md-3'>
                <h6 className='mb-0'>Following</h6>
                <p>35</p>
              </div>
              <div className='col-md-3'>
                <h6 className='mb-0'>Followers</h6>
                <p>20</p>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={this.logout} className='d-flex justify-content-end'>
          <button
            className='btn btn-tweet btn-primary'
            type='submit'
            variant='link'
            size='sm'
          >
            Log out @{username}
          </button>
        </form>
      </div>
    );
  }
}
export default UserField;
