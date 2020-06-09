import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Prompt extends Component {

    state = {
        prompt: true,
        isInvestor: false,
    }

    developerPrompt = () => {
        this.setState({ isInvestor: false })
        this.setState({ prompt: false })
    }

    investorPrompt = () => {
        this.setState({ isInvestor: true })
        this.setState({ prompt: false })
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.prompt === true

                        ? <div className='prompt'>
                            <div>Are you a Developer or Investor?</div>
                            <Link to='/AdminDev' >
                                <button onClick={this.developerPrompt}>Developer</button>
                            </Link>

                            <Link to='/investorPortal' >
                                <button onClick={this.investorPrompt}>Investor</button>
                            </Link>
                        </div>

                        : null

                    }
                </div>
            </div>
        )
    }
}
