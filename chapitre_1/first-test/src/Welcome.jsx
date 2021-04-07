import React from 'react';

class Welcome extends React.Component {
  constructor() {
    super(); // permet de récupérer les props
  }

  render() {
    return (
      <div>
        <h1>
          Hello {this.props.name} ! Bienvenue sur la page {this.props.page}
        </h1>
        {/* ici, on récupère les props "name" et "page" */}
      </div>
    );
  }
}

export default Welcome;
