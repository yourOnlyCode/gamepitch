import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Feed extends React.Component {

    state = {
        posts: [],
        appealed: []
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

    onClickAppeal = async () => {
        try {

        } catch (err) {
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
                            <img alt='video games' src={game.image_url} width='250' />
                            <div>Appeal: {game.appeals.length}</div>
                            <div>{game.genre}</div>

                            <button className='appeal-button' >
                                <span class="material-icons">
                                    mood
                                </span>
                            </button>
                        </div>
                    )
                })}

            </div>
        )
    }
}