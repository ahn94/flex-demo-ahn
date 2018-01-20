import React, { Component } from "react";
import styled from "styled-components";

import Box from "./Box";
import Controls from "./Controls";

const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      justifyContent: "flex-start",
      direction: "row",
      alignContent: "stretch"
    };
  }

  changeJustification = e => {
    this.setState({ justifyContent: e.target.value });
  };

  changeDirection = e => {
    this.setState({ direction: e.target.value });
  };

  changeAlignContent = e => {
    this.setState({ alignContent: e.target.value });
  };

  render() {
    return (
      <Container>
        <Controls
          changeJustification={this.changeJustification}
          justification={this.state.justifyContent}
          direction={this.state.direction}
          alignContent={this.state.alignContent}
          changeDirection={this.changeDirection}
          changeAlignContent={this.changeAlignContent}
        />
        <Box
          justification={this.state.justifyContent}
          direction={this.state.direction}
          alignContent={this.state.alignContent}
        />
      </Container>
    );
  }
}

export default App;
