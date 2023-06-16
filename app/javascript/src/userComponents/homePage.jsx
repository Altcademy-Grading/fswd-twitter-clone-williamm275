import React from 'react';
import '../home.scss';
import UserHomeFeed from './feeds';
import UserField from '@src/userComponents/userField';
import Navbar from '../navbar';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.username,
      email: this.props.email,
    };
  }

  render() {
    const { username, email } = this.state;

    return (
      <div className='main'>
        <div className='container-fluid'>
          <div className='row'>
            <Navbar />
            <div className=' col-sm-6 mt-4 p-4 '>
              <UserField username={username} email={email} />
            </div>
            <div className='col-sm-6 feed-inner'>
              <UserHomeFeed username={username} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
