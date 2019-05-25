import React, {Component} from 'react'

class New extends Component {
    constructor (props) {
        super(props)
        this.state = {
            text: 'hello',
            textArea: '',
            showText: true,
            date: new Date()
        }
        this.changeText = this.changeText.bind(this)
        this.addText = this.addText.bind(this)
    }
    changeText(text) {
        this.setState({text: 'bye'})
    }
    addText(event) {
            this.setState({textArea: event.target.value})
            console.dir(event.target)
    }
    delete = ()  => {
        this.setState({textArea: ''})
    }
    renderTitle = () => {
        return (
            <div>hhcdkjf</div>
        )
    }
    render () {
        return (<div>
       <React.Fragment> <input onChange = {this.addText} value = {this.state.textArea}  /> 
        <p>{this.state.textArea}</p>
        <button onClick={this.changeText}>No</button>
        <button onClick={this.delete}>yes</button>
        <p>{this.state.text}</p>
        
         </React.Fragment>
           
         <h1>Now {this.state.date.toLocaleDateString()}</h1>
            <button onClick = {()=> {this.setState({showText: !this.state.showText })}}>hell</button>
        </div>
        )
    }
}

export  default New