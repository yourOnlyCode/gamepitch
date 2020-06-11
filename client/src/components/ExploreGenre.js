import React, { Component } from 'react'

export default class ExploreGenre extends Component {

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
            <div>

                {this.state.games.map((game) => {
                    return (
                        <div>
                            {game.genre}
                        </div>
                    )
                })}

            </div>
        )
    }
}
