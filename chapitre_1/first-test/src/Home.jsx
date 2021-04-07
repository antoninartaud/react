import React from 'react';
import Welcome from '../components/Welcome'; // on importe le composant enfant Welcome

class Home extends React.Component {
  render() {
    return (
      <div>
        <Welcome name='Mike' page='Home' />
        {/* ici, on passe les props "name" et "page" avec les valeur "Mike" et "Home" */}
      </div>
    );
  }
}

export default Home;
