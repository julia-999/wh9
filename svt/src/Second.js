import logo from './logo.svg';
import './App.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';
import raw from './files/world-languages-simple.csv';
import WebSocket from './WebSocket.js'
import english from './files/english.json'
import german from './files/german.json'

function Second(props) {

    // componentDidMount() {
    //     this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    //   }
    //   componentWillUnmount() {
    //     clearInterval(this.interval);
    //   }

    // var eng = JSON.parse(english);
    // var seconds = 0;
    // var subtitle = 0;
    // while (true) {
    //     while (eng[seconds] == null) {
    //         setTimeout(1000)
    //         seconds += 1
    //     }
    //     setTimeout(() => { console.log('m') }, eng[seconds].Delay * 1000);
    // }


    return (
        // <WebSocket/>
        <h3>test</h3>
        // Backup in case doesnt work:

    );
}
export default Second;