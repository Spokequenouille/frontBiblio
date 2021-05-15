import React, { Component } from 'react';
import './index.css';


class Livre extends Component<any> {
    componentDidMount() {
        console.log("coucou");
        fetch("http://192.168.0.21:1234/livre", {
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(res => res.json)
            .then((res) => console.log('coucou'));
    }

  render() {
    return (
        <div className="container">
      <p>coucou</p>

        </div>
    );
  }
}

export default Livre;
