import logo from './logo.svg';
import './App.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState, ObejctRow } from 'react';
import raw from './files/world-languages-simple.csv';


function App() {

  const LANGUAGES = [
    "Mandarin Chinese",
    "Spanish",
    "English",
    "Hindi/Urdu",
    "Arabic",
    "Bengali",
    "Portuguese",
    "Russian",
    "Japanese",
    "German",
    "Javanese",
    "Punjabi",
    "Wu",
    "French",
    "Telugu",
    "Vietnamese",
    "Marathi",
    "Korean",
    "Tamil",
    "Italian",
    "Turkish",
    "Cantonese/Yue"
  ]

  // The forwardRef is important!!
  // Dropdown needs access to the DOM node in order to position the Menu
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));

  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );

  const listLanguages = LANGUAGES.map((number) =>
    <Dropdown.Item eventKey={number}>{number}</Dropdown.Item>
  );

  // const handleFile = (e) => {
  //   const content = e.target.result;
  //   console.log('file content',  content)
  //   // You can set content in state and show it in render.
  // }
  // const handleChangeFile = (file) => {
  //   const fileReader = new FileReader()
  //   fileReader.onloadend = handleFile;
  //   fileReader.readAsText(file)
  //   console.log(fileReader.result)
  // }
  // handleChangeFile(raw)

  // fetch(raw)
  //   .then(r => r.text())
  //   .then(text => {
  //     console.log('text decoded:', text);
  //   });
  // const rows = []
  // for (let i = 0; i < numrows; i++) {
  //   // note: we are adding a key prop here to allow react to uniquely identify each
  //   // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
  //   rows.push(<ObjectRow key={i} />);
  // }
  // return <tbody>{rows}</tbody>;


  return (
    <div className="App">
      <header className="App-header">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter the code for the movie:</Form.Label>
            <Form.Control type="email" placeholder="Code" />
            <Form.Text className="text-muted">
              You can find this in your Google extension
            </Form.Text>
          </Form.Group>

          <Dropdown className="d-inline mx-2" >
            <Dropdown.Toggle id="d-inline mx-2">
              Choose your language:
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu} style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {listLanguages}
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </header>
    </div>
  );
}

export default App;
