import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getChar } from "../actions"
// import actions

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    this.props.getChar();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <p>Its Working ....Its Working</p>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.charsReducer.fetching,
    characters: state.charsReducer.characters
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    getChar
  }
)(CharacterListView);
