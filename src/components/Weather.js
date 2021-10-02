import React, { Component } from 'react'

export class Weather extends Component {
    render() {
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <h5 className="card-title">___________</h5>
                    <img src="./icons/sun.svg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather
