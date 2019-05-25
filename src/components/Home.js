import React, {Component} from 'react'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: 'пришел домой бухой ',
            textArea: '',
            text: '',
            value: ''
        }  
     }
     changeText = (child) =>{
        this.setState({text: `${child}`})
    }
    changeTextArea = (child) => {
        this.setState({textArea: `${child}`})
    }
     changeState = (child) => {
         this.setState({data: `За нож схватился ${child}` })
     }
     addText = (event) => {
         this.setState({textArea: event.target.value})
     }
    render() {
        return (
            <div>
               <input onChange = {this.addText} value = {this.state.textArea}  /> 
        
              <p>Батя {this.state.data}</p> 
              <p> Батя услышал {this.state.textArea} </p>
                <p>  Батя удивлен красноечием  {this.state.text}</p> 
                
              
                <Child change = {this.changeState} changed = {this.changeText} area = {this.addText}> </Child>
           

            </div>
        )
    }
}

class Child extends Component {
    render() {
        return (
            <div>
               младший сынок 
                <input onChange = {this.props.addText} value = {this.props.textArea}  />
                <input onChange = {() => this.props.area('младшего сынка')} value = {this.props.addText}  />
                <button onClick={() => this.props.changed('младшего сынка')}>No</button>
                {/* <button onClick={() => this.props.area('от младшего сынка')}  value = {this.props.value} > Сказать</button> */}
                <button onClick = {() => this.props.change(' младший сынок')}>действие</button>
                <GrandChild change = {this.props.change} />
            </div>
        )
    }
}

class GrandChild extends Component {
    render () {
        return (
            <div>
                старший сынок
                <button onClick = {() => this.props.change('старший сынок')}> действие</button>
            </div>
        )
    }
}

export default Home