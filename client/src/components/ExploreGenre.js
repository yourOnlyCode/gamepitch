import React, { Component } from 'react'
import axios from 'axios'

export default class ExploreGenre extends Component {

    state = {
        games: [],
        genres: []
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
            <div>
                <select>
                    {this.state.games.map((game) => {
                        return (
                            <option>
                                {game.genre}
                            </option>
                        )
                    })}
                </select>

                

            </div>
        )
    }
}
