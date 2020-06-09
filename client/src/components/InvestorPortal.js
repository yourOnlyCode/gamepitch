import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class InvestorPortal extends Component {

    state = {
        newInvestor: {
            name: '',
            image_url: '',
            description: '',
        }
    }

    onChange = (evt) => {
        const newState = { ...this.state }
        newState.newVehicle[evt.target.name] = evt.target.value
        this.setState(newState)
    }

    onSubmitCreateInvestor = async () => {
        evt.preventDefault()
        try {
            await axios.post(`/api/v1/investors`, this.state.newInvestor)
            console.log('Investor Created', this.state.newInvestor)
        } catch (err) {
            console.log(err)
            console.log('Failed to create investor')
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitCreateInvestor}>
                    <input
                        type='text'
                        name='name'
                        value={this.state.newInvestor.name}
                        onChange={this.onChange}
                    />
                    <input
                        type='text'
                        name='image_url'
                        value={this.state.newInvestor.image_url}
                        onChange={this.onChange}
                    />
                    <input
                        type='text'
                        name='description'
                        value={this.state.newInvestor.description}
                        onChange={this.onChange}
                    />
                    <Link to='/feed'>
                        <input type='submit' value='invest' />
                    </Link>
                </form>
            </div>
        )
    }
}
