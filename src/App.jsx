import React, { Component } from 'react'
import { render } from 'react-dom'
import './App.css'
import Button from '@material-ui/core/Button'

class Exchange extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
      items: []
    }
  }
  componentDidMount () {
    fetch('https://yesno.wtf/api')
      .then(res => res.json())
      .then(json => {
        console.log(json.rates)
        this.setState({
          isLoaded: true,
          items: json.answer,
          images: json.image
        })
      })
  }

  render () {
    const { items, isLoaded, images } = this.state
console.log(this.state)
    if (!isLoaded) {
      return <h1 Style='text-align:center'>Now Loading...</h1>
    } else {
      return (
        <div class='backcolor'>
          <h1 Style='text-align:center'><font color='#3d5afe'>{items}!</font></h1>
          <img class='images' src={images} />
          <div class='button'>
            <Button size='large' variant='contained' color='primary' onClick={() => window.location.reload()}>Next Yes or No ?</Button>
          </div>
        </div>
      )
    }
  }
}

export default Exchange

render(<Exchange />, document.getElementById('root'))
