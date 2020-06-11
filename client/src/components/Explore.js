import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Explore extends Component {

    state = {
        games: []
    }

    componentDidMount() {
        this.getAllGames()
    }

    getAllGames = async () => {
        try {
            const res = await axios.get(`/api/v1/feed/`)
            const newState = { ...this.state }
            newState.games = res.data
            this.setState(newState)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div className='explore'>
                <div className='head-title'>Explore</div>

                <div>
                    <div className='explore-head'>Recent</div>

                    <div className='game-container'>

                        {this.state.games.slice(0).reverse().map((game) => {
                            return (
                                <div className="game-feed">

                                    <div className='title-container'>
                                        <Link to={`/developer/${game.developer.id}`}>
                                            <img alt='video games' className='game-developer' src={game.developer.image_url} width='40' />
                                        </Link>

                                        <div className='game-title'>{game.name}</div>
                                    </div>

                                    <Link to={`/game/${game.id}`}>
                                        <img alt='video games' className='game-image' src={game.image_url} />
                                    </Link>

                                    <div className='genre-container'>

                                        <div className='appeal-container'>
                                            <div className='appeal-button'>

                                                {game.hasAppeal === false

                                                    ? < span class="material-icons">
                                                        sentiment_dissatisfied
                                                    </span>


                                                    : <span class="material-icons">
                                                        mood
                                                    </span>
                                                }
                                            </div>
                                            {game.hasAppeal}
                                        </div>

                                        <div>{game.genre}</div>

                                    </div>

                                </div>
                            )
                        })}

                    </div>
                </div>

            </div >
        )
    }
}
