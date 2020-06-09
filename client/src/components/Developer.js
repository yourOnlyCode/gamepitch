import React from 'react'
import axios from 'axios'

export default class Developer extends React.Component {

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
                <div>{this.state.name}</div>
                <img src={this.state.image_url} width='250' />
            </div>
        )
    }
}