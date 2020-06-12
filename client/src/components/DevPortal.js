import React, { Component } from 'react'
import axios from 'axios'


export default class DevPortal extends Component {
    state = {
        name: '',
        image_url: '',
        bio: '',
        email: '',
        facebook: ''
    }

    componentDidMount() {
        this.getDeveloper()
    }

    getDeveloper = async () => {
        const developerId = this.props.match.params.developerId
        const res = await axios.get(`/api/v1/developers/${developerId}/`)
        console.log(res.data)
        let newState = { ...this.state }
        newState = res.data
        this.setState(newState)
    }

    render() {
        return (
            <div>
                <div className='single-game-title'>{this.state.name}</div>
                <img className='dev-image' alt='video games' src={this.state.image_url} width='250' />

                <div className='dev-details'>
                    <div className='dev-bio'>{this.state.bio}</div>
                    <div className='dev-email'>{this.state.email}</div>
                    <div className='dev-facebook-container'>
                        <img className='dev-facebook' alt='video games' src="https://louisville.edu/medicine/departments/biochemistry/our_people/student-directories/networking-icons/facebook-logo/image" width='20' />
                        {this.state.facebook}
                    </div>
                </div>
            </div>
        )
    }
}

