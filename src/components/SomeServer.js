import React, {Component} from 'react'

class SomeServer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        this.setState({users: [{
            name: 'Lesha'
            
        }]})
    }
    render () {
        return (
            <React.Fragment>
                {this.state.users.map((user) => { 
                    return (
                        <p>{user.name}</p>
                    )
                }) }
            </React.Fragment>
        )
    }

}

export default SomeServer