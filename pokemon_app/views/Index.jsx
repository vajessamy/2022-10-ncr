const React = require('react');
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

class Index extends React.Component {
  render() {
      const { pokemon } = this.props;
      return (
              <div style = {myStyle}>
                  <h1>See All The Pokemon!</h1>
                  <ul>
                      {pokemon.map((pokemon, i) => {
                          return (
                              <li>
                                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}{' '}
                                  <br/>
                                  <a href={`/pokemon/${i}`}>
                                    <img src= {pokemon.img  + '.jpg'}/>
                                  </a>
                                  
                                 
                              </li>
                          );
                      })}
                  </ul>
              </div>
      );
  }
}
module.exports = Index;