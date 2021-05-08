import logo from './logo.svg';
import React from 'react';
import './App.css';

const baseRoute = `https://pokeapi.co/api/v2`;


class App extends React.Component {
  constructor()
  {
    super();

    console.log('this happens in the constructor');

    this.state = {
      pokemonName: 'Brian',
      clicks: 0,
    }
  }

  incrementClicks = () =>
  {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  }

  componentDidMount()
  {
    console.log('Mounting');
    fetch(`${baseRoute}/pokemon/1`)
    .then((response) =>
    {
      // error handling and stuff
      if (response.status === 200)
      {
        return response.json();
      }
      throw new Error(`Could not get pokemon: ${response}`);
    })
    .then((pokemon) =>
    {
      console.log(pokemon);
      this.setState({
        pokemonName: pokemon.name,
      });
    })
    .catch((oops) =>
    {
      console.error(`Uh oh, we could not fetch the pokemon: ${oops}`);
    })
  }

  render()
  {
    console.log(`it's rendering...`);
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
            Name: {this.state.pokemonName}
          </p>
          <p>You have clicked {this.state.clicks} times.</p>
          <button onClick={this.incrementClicks}>Click Me</button>
        </header>
      </div>
    );
  }
}

export default App;
