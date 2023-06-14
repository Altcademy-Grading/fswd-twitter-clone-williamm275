import React from "react";
import Tweets from './tweets';
import CreateTweet from "./CreateTweet";
import { handleErrors } from '@utils/fetchHelper';

class UserHomeFeed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.username,
            tweets: [],
        }
    }

    componentDidMount() {
        this.getAllTweets();
    }

    getAllTweets = () => {
        fetch('/api/tweets')
        .then(handleErrors)
        .then(data => {
            console.log('data', data);
            this.setState({
                tweets: data.tweets,
            })
        })
    }

    render() {
        const { username, tweets } = this.state;
        return(
            <div>
                

                <div className="col pt-5">
                <CreateTweet tweets={tweets} getAllTweets={this.getAllTweets}/>
                </div>

                <div className="col">
                <Tweets username={username} tweets={tweets} getAllTweets={this.getAllTweets}/>
                </div>
            </div>            
        )
    }
}

export default UserHomeFeed;