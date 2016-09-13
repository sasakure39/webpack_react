'use strict';

import React, { Component } from 'react'
import { render } from 'react-dom'

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
      </div>
    );
  }
}

window.HelloWorld = HelloWorld;
