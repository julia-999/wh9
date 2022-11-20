import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import english from './files/english.json'
import german from './files/german.json'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';


var delay = 0;
var text = "";
var sec = 0;
var htwo;
var end = 0;


function FormattedDate(props) {

    sec = Math.round(props.date.getTime() / 1000) - Math.round(props.start.getTime() / 1000);
    
    
    if (sec < end) {
    // bring up subtitles, set state
        // delay = delay-1
        // this.setState({
        //     delay: props.eng[sec].Delay
        // });

        // console.log(htwo)
        return htwo;
    }
    else if (props.eng[sec] != null) {
        delay = props.eng[sec].Delay
        text = props.eng[sec].Text
        console.log("second if")

        htwo = <h2 style="">{props.eng[sec].Text}</h2>
        end = props.eng[sec].Delay + sec

        
        // this.setState({
        //     delay: props.delay-1
        // });
        return <h2>{props.eng[sec].Text}</h2>;
    }
    else {
        return <h2></h2>;
    }
    // remove everything

    // while (true) {
    //     while (eng[seconds] == null) {
    //         setTimeout(1000)
    //         seconds += 1
    //     }
    //     setTimeout(() => { console.log('m') }, eng[seconds].Delay * 1000);
    //     this.timerID = setInterval(
    //         () => this.tick(),
    //         1000
    //     );
    // }


    // return <h2>It is {Math.round(props.date.getTime() / 1000) - Math.round(props.start.getTime() / 1000)}.</h2>;
  }
  
  class SecondBackup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date(), start: new Date(), delay: 0, eng: {}};
    }
  
    componentDidMount() {
        // var eng = JSON.parse(english);
        // console.log(english)
        this.setState({
            eng: JSON.parse(JSON.stringify(german))
        });
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    // cons eng = JSON.parse(english);
    // var seconds = 0;
    // var subtitle = 0;
    // while (true) {
    //     while (eng[seconds] == null) {
    //         setTimeout(1000)
    //         seconds += 1
    //     }
    //     setTimeout(() => { console.log('m') }, eng[seconds].Delay * 1000);
    // }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <FormattedDate date={this.state.date} start={this.state.start} eng={this.state.eng}/>
        </div>
      );
    }
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<SecondBackup />);
  export default SecondBackup;