import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class AdminDeveloperPrompt extends Component {

    state = {
        developers: []
    }

    componentDidMount() {
        this.getAllDevelopers()
    }

    getAllDevelopers = async () => {
        try {
            const res = await axios.get(`/api/v1/developers/`)
            const newState = { ...this.state }
            newState.developers = res.data
            this.setState(newState)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <div>Welcome, Developer!</div>
                <div>Select Profile</div>

                <div className="dev-select">
                    {this.state.developers.map((dev) => {
                        return (
                            <div className="game-feed">
                                <Link to={`/devPortal/${dev.id}`}>
                                    <div>{dev.name}</div>
                                    <img alt='video games' src={dev.image_url} width='150' />
                                </Link>
                            </div>
                        )
                    })}




                </div>

            </div>
        )
    }
}
