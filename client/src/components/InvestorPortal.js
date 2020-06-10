import React, { Component } from 'react'
import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


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
        newState.newInvestor[evt.target.name] = evt.target.value
        this.setState(newState)
    }

    onSubmitCreateInvestor = async (evt) => {
        evt.preventDefault()
        try {
            await axios.post(`/api/v1/investors/`, this.state.newInvestor)
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

                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type='text'
                            name='name'
                            value={this.state.newInvestor.name}
                            onChange={this.onChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="name">Url image:</label>
                        <input
                            type='text'
                            name='image_url'
                            value={this.state.newInvestor.image_url}
                            onChange={this.onChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="name">Description:</label>
                        <input
                            type='text'
                            name='description'
                            value={this.state.newInvestor.description}
                            onChange={this.onChange}
                        />
                    </div>

                    {/* <Link to='/feed'> */}
                    <input type='submit' value='invest!' />
                    {/* </Link> */}
                </form>
            </div>
        )
    }
}
