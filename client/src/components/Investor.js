import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Investor extends Component {

    state = {
        investors: []
    }

    componentDidMount() {
        this.getAllInvestors()
    }

    getAllInvestors = async () => {
        try {
            const res = await axios.get(`/api/v1/investors/`)
            const newState = { ...this.state }
            newState.investors = res.data
            this.setState(newState)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <div>Investors</div>
                <div>Create profile</div>
                <Link to='/investorPortal'>
                    <div>Create</div>
                </Link>

                {this.state.investors.map((investor) => {
                    return (
                        <div className="game-feed">
                            <Link to={`/investors/${investor.id}`}>
                                <div>{investor.name}</div>
                                <img src={investor.image_url} width='150' />
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}