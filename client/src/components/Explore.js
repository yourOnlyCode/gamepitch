import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import ExplorePopular from './ExplorePopular.js'

export default class Explore extends Component {

    state = {
        games: [],
        byPopular: true
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

    toggleGenreSearch = () => {
        this.setState({ byPopular: true })
    }

    toggleRecentSearch = () => {
        this.setState({ byPopular: false })
    }

    render() {
        return (
            <div className='explore'>

                <div className='head-title'>Explore</div>

                <div>
                    <button
                        className='explore-head'
                        tabIndex='0'
                        onClick={this.toggleGenreSearch}>
                        Recent</button>
                    <button
                        className='explore-head'
                        tabIndex='0'
                        onClick={this.toggleRecentSearch}>
                        Popular</button>
                </div>

                {this.state.byPopular === true
                    ? <div>

                        <div className='game-container'>

                            {this.state.games.map((game) => {
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

                    : <div>
                        <ExplorePopular />
                    </div>

                }

            </div >
        )
    }
}
