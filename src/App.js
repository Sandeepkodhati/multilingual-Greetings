import {Component} from 'react'
import ButtonFolder from './components/ButtonFolder/ButtonFolder'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    languageID: languageGreetingsList[0].id,
  }

  onUpdateData = id => {
    this.setState({
      languageID: id,
    })
  }

  render() {
    const {languageID} = this.state
    const filterData = languageGreetingsList.filter(
      eachData => eachData.id === languageID,
    )
    console.log(filterData)

    return (
      <div className="main-bg-container">
        <h1>Multilingual Greetings</h1>
        <ul className="ul-container">
          {languageGreetingsList.map(eachItem => (
            <ButtonFolder
              key={eachItem.id}
              onUpdateData={this.onUpdateData}
              data={eachItem}
              languageID={languageID}
            />
          ))}
        </ul>
        <img
          src={filterData[0].imageUrl}
          alt={filterData[0].imageAltText}
          className="image-style"
        />
      </div>
    )
  }
}

export default App
