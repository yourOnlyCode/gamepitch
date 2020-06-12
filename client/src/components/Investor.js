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
                <div className='game-label'>Investors</div>
                <div className='create-label'>Create profile</div>
                <Link to='/investorPortal'>
                    <button className='prompt-button'>Create</button>
                </Link>

                {this.state.investors.map((investor) => {
                    return (
                        <div className="game-feed">
                            <Link to={`/investors/${investor.id}`}>
                                <div className='investor-title'>{investor.name}</div>
                                <img alt='video games' src={investor.image_url} width='150' />
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}
