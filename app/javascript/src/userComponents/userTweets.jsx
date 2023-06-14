import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';



class UserTweets extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userTweets: [],
        }
    }

    componentDidMount() {
        this.getUserTweets();
    }

    getUserTweets() {
        const username = this.props.username;

        fetch(`/api/users/${username}/tweets`)
        .then(handleErrors)
        .then(data => {
           console.log('data', data)
           this.setState({
            userTweets: data.tweets,
           })
        })
    }

    deleteTweet = e => {
        e.preventDefault();

        let tweetElement = e.target.closest('.tweet-inner');
        let tweetId = tweetElement.getAttribute('id');

        fetch(`/api/tweets/${tweetId}`, safeCredentials({
            method: 'DELETE',
        }))
        .then(handleErrors)
        .then(data => {
            console.log('data', data);
            if(data.success) {
                this.getUserTweets();
            }
        })
        .catch(error => {
            this.setState({
                error: 'You are not allowed to delete this tweet. Try again.',
            })
        })
    }

    render() {
        const { userTweets } = this.state;


        return (
            <div className='tweets py-3'>
                 {userTweets.map(tweet => {
                    return(
                        <div key={tweet.id} id={tweet.id} className="row d-flex py-2 tweet-inner">
                              <div className='col-1'>
                                 <span className='fa-layers fa-fw fa-2x'>
                                  
                                </span>
                                </div>
                             <div className='col-11'>
                                    <div className='row d-flex flex-column tweet-details'>
                                    <div className='col d-flex justify-content-between'>
                                    <div>
                                    <span className='tweet-name'><b>{tweet.username}</b></span>
                                    <a href={`/${tweet.username}`} className="p-0 align-top tweet-username">@{tweet.username}</a>
                                 </div>
                                {(tweet.username == this.props.currentUsername)
                                ? <button className="btn btn-link btn-delete" onClick={this.deleteTweet}>Delete</button> : <div></div>
                              }
                             </div>
                           <div className='col py-1'>
                          <span>{tweet.message}</span>
                          {(tweet.image !== null) ? <div>
                            <img className='img-fluid' src={tweet.image} />
                        </div> : <div></div>}
                  </div>
                </div>
              </div>
            </div>
         )
        })}
    </div>
           
  )
        
 }    
}

export default UserTweets;