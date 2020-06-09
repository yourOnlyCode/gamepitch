import React, { Component } from 'react'
import axios from 'axios'

export default class AdminDeveloper extends Component {

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
                <div>
                    {this.state.developers.map((dev) => {
                        return (
                            <select>
                                <option>{dev.name}</option>
                            </select>
                        )
                    })}
                </div>
            </div>
        )
    }
}
