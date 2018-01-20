import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: ${props => props.justification};
  flex-direction: ${props => props.direction};
  align-content: ${props => props.alignContent};
  flex-basis: 70%;
  flex-wrap: wrap;
  background: lightgrey;
`;

const Item = styled.div`
  margin: 4px;
  box-sizing: border-box;
  height: 180px;
  width: 180px;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  border: 2px solid black;
`;

class Box extends Component {
  render() {
    return (
      <Container
        justification={this.props.justification}
        direction={this.props.direction}
        alignContent={this.props.alignContent}
      >
        <Item color="#E50097">1</Item>
        <Item color="#E60011">2</Item>
        <Item color="#E77400">3</Item>
        <Item color="#D3E800">4</Item>
        <Item color="#4CE900">5</Item>
        <Item color="#00EA3B">6</Item>
        <Item color="#00EBC4">7</Item>
        <Item color="#0089EC">8</Item>
        <Item color="#0000ED">9</Item>
      </Container>
    );
  }
}

export default Box;
