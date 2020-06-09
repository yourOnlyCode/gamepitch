import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Feed extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        this.getFeedData()
    }

    getFeedData = async () => {
        try {
            const res = await axios.get(`/api/v1/feed/`)
            const newState = { ...this.state }
            newState.posts = res.data
            this.setState(newState)
            console.log(res.data)
        } catch (err) {
            console.log('error getting feed')
            console.log(err)
        }
    }

    render() {
        return (
            <div className="feed">

                {this.state.posts.map((game) => {
                    return (
                        <div className="game-feed">
                            <Link to={`/developer/${game.developer.id}`}>
                                <div>Developer: {game.developer.name}</div>
                            </Link>
                            <div>Title: {game.name}</div>
                            <img src={game.image_url} width='250' />
                            <div>Appeal: {game.appeals.length}</div>
                        </div>
                    )
                })}

            </div>
        )
    }
}