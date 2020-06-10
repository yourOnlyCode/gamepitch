import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Explore extends Component {

    state = {
        hasAppeal: false,
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

    addAppeal = () => {
        this.setState({ hasAppeal: !this.state.hasAppeal })
    }

    render() {
        return (
            <div className='explore'>
                <div className='head-title'>Explore</div>

                <div>
                    <div>Recent</div>

                    <div className='game-container'>

                        {this.state.games.map((game) => {
                            return (
                                <div className="game-feed">

                                    <div className='title-container'>
                                        <Link to={`/developer/${game.developer.id}`}>
                                            <img className='game-developer' src={game.developer.image_url} width='40' />
                                        </Link>

                                        <div className='game-title'>{game.name}</div>
                                    </div>

                                    <Link to={`/game/${game.id}`}>
                                        <img className='game-image' src={game.image_url} width='250' height='150' />
                                    </Link>

                                    <div className='genre-container'>

                                        <div className='appeal-container'>
                                            <button className='appeal-button' onClick={this.addAppeal}>
                                                {this.state.hasAppeal === false

                                                    ? < span class="material-icons">
                                                        sentiment_dissatisfied
                                                    </span>


                                                    : <span class="material-icons">
                                                        mood
                                                </span>
                                                }
                                            </button>
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
