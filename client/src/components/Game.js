import React, { Component } from 'react'
import axios from 'axios'

export default class Game extends Component {

    state = {
        name: '',
        image_url: '',
        description: '',
        genre: '',
        concept_image: '',
        mechanics: '',
        videos: '',
        demo: '',
        hasAppeal: false,
        developer: ''
    }

    componentDidMount() {
        this.getGameData()
    }

    getGameData = async () => {
        const gameId = this.props.match.params.gameId
        const res = await axios.get(`/api/v1/games/${gameId}/`)
        console.log(res.data)
        let newState = { ...this.state }
        newState = res.data
        this.setState(newState)
    }

    addAppeal = async () => {
        const gameId = this.props.match.params.gameId
        const res = await axios.put(`/api/v1/games/${gameId}/`, { hasAppeal: true })
        console.log(res.data)
        let newState = res.data
        this.setState(newState)
    }

    removeAppeal = async () => {
        const gameId = this.props.match.params.gameId
        const res = await axios.put(`/api/v1/games/${gameId}/`, { hasAppeal: false })
        console.log(res.data)
        let newState = res.data
        this.setState(newState)
    }

    render() {
        return (
            <div className='single-container'>
                <div className='center-content'>


                    <div className='head-body-content'>

                        <div className='head-content'>
                            <img className='single-dev-image' src={this.state.developer.image_url} />
                            <div className='single-game-dev'>{this.state.developer.name}</div>
                        </div>

                        <div className='body-content'>
                            <div className='single-game-title'>{this.state.name}</div>
                            <img alt='video games'
                                className='single-game-image' src={this.state.image_url} />

                            <div className='game-description'>{this.state.description}</div>

                            <label className='game-label'>Mechanics</label>
                            <div className='detail-text'>{this.state.mechanics}</div>
                        </div>

                        <div className='details-container'>

                            <label className='single-details'>Genre</label>
                            <div className='detail-text'>{this.state.genre}</div>

                            <div className='appeal-container'>
                                <label className='single-details'>Appeal</label>
                                <button className='appeal-button'>

                                    {this.state.hasAppeal === false

                                        ? < span class="material-icons" onClick={this.addAppeal}>
                                            sentiment_dissatisfied
                                        </span>


                                        : <span class="material-icons" onClick={this.removeAppeal}>
                                            mood
                                        </span>
                                    }
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='bottom-container'>

                        <div className='bottom-break'>

                        </div>

                        <div className='game-video'>

                            {this.state.videos === ''
                                ? null

                                : <div>
                                    <label className='game-label'>Videos</label>
                                    <iframe
                                        title='Dragon Game'
                                        width='560'
                                        height='315'
                                        rel='0'
                                        src={this.state.videos}
                                        frameborder="0"
                                        modestbranding='1'
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen>
                                    </iframe>
                                </div>
                            }
                        </div>
                        <div className='bottom-break'>

                        </div>

                    </div>



                </div>

            </div >
        )
    }
}
