import React, { Component } from 'react'
import './Clock.scss';

export class Clock extends Component {
    constructor() {
        super();
        this.hourRef = React.createRef();
        this.minuteRef = React.createRef();
        this.secondRef = React.createRef();

    }

    componentDidMount() {
        setInterval(() => {
            const date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();
            // console.log(h + " : " + m + " : " + s);
            let h_deg = 30 * h + m / 2;
            let m_deg = 6 * m;
            let s_deg = 6 * s;
    
            this.hourRef.current.style.transform = `rotate(${h_deg}deg)`;
            this.minuteRef.current.style.transform = `rotate(${m_deg}deg)`;
            this.secondRef.current.style.transform = `rotate(${s_deg}deg)`;

        }, 1000);
    }

    render() {
        return (
            <div id="image_clk">
                <div id="hour_ned" ref={this.hourRef}></div>
                <div id="minute_ned" ref={this.minuteRef}></div>
                <div id="second_ned" ref={this.secondRef}></div>
            </div>
        )
    }
}

export default Clock
