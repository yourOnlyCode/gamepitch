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

    render() {
        return (
            <div>
                <div>{this.state.name}</div>
                <img src={this.state.image_url} width='300' />
                <div>{this.state.description}</div>
                <div>{this.state.genre}</div>

                <div>{this.state.mechanics}</div>


                <div>By {this.state.developer.name}</div>
            </div>
        )
    }
}
