import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  flex-basis: 30%;
  background: grey;
`;

const Title = styled.h1`
  text-align: center;
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Item = styled.option`
  background: ${props => (props.selected ? "#3a3a3a" : "grey")};
  color: ${props => (props.selected ? "lightgrey" : "black")};
  border-radius: 4px;
  font-size: 24px;
  padding: 2px 8px 2px 8px;
  margin: 4px;
`;

const ItemWrapper = props => {
  return (
    <Item
      selected={props.selected === props.value}
      value={props.value}
      onClick={props.onChange}
    >
      {props.value}
    </Item>
  );
};

class Controls extends Component {
  render() {
    return (
      <Container>
        <Options>
          <Title>Flex Direction</Title>
          <ItemWrapper
            onChange={this.props.changeDirection}
            selected={this.props.direction}
            value="row"
          />
          <ItemWrapper
            onChange={this.props.changeDirection}
            selected={this.props.direction}
            value="row-reverse"
          />
          <ItemWrapper
            onChange={this.props.changeDirection}
            selected={this.props.direction}
            value="column"
          />
          <ItemWrapper
            onChange={this.props.changeDirection}
            selected={this.props.direction}
            value="column-reverse"
          />

          <Title>Justify Content</Title>

          <ItemWrapper
            onChange={this.props.changeJustification}
            selected={this.props.justification}
            value="flex-start"
          />
          <ItemWrapper
            onChange={this.props.changeJustification}
            selected={this.props.justification}
            value="flex-end"
          />
          <ItemWrapper
            onChange={this.props.changeJustification}
            selected={this.props.justification}
            value="center"
          />
          <ItemWrapper
            onChange={this.props.changeJustification}
            selected={this.props.justification}
            value="space-around"
          />
          <ItemWrapper
            onChange={this.props.changeJustification}
            selected={this.props.justification}
            value="space-between"
          />

          <Title>Align Content</Title>
          <ItemWrapper
          onChange={this.props.changeAlignContent}
          selected={this.props.alignContent}
          value="stretch"
        />
          <ItemWrapper
            onChange={this.props.changeAlignContent}
            selected={this.props.alignContent}
            value="flex-start"
          />
          <ItemWrapper
            onChange={this.props.changeAlignContent}
            selected={this.props.alignContent}
            value="flex-end"
          />
          <ItemWrapper
            onChange={this.props.changeAlignContent}
            selected={this.props.alignContent}
            value="center"
          />
          <ItemWrapper
            onChange={this.props.changeAlignContent}
            selected={this.props.alignContent}
            value="space-between"
          />
          <ItemWrapper
            onChange={this.props.changeAlignContent}
            selected={this.props.alignContent}
            value="space-around"
          />

        </Options>
      </Container>
    );
  }
}

export default Controls;
