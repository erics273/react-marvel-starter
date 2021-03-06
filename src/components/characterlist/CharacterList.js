import React, { Component } from 'react';
import CharacterCard from '../charactercard/CharacterCard';
import _ from 'lodash';
import { Grid, Row } from 'react-bootstrap';

export class CharacterList extends Component {

  render() {

    let characters = "Loading...";

    if(!_.isEmpty(this.props.characters)){

      if(this.props.characters.length){
        //use the CharacterCard component to renmder the individual characters
      }else{
        characters = "No characters found!"
      }
      
    }

    return (
      <Grid>
        <Row>
          {characters}
        </Row>
      </Grid>
    );
  }
}

export default CharacterList;
