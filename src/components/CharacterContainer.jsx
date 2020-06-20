import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// actions
import { getCharacter } from '../actions/characterActions';
// selectors
import { selectCharacter } from '../selectors/characterSelectors';
// component
import Character from './Character';

class CharacterContainer extends Component {
	componentDidMount = () => {
		const { getCharacter, id } = this.props;
		getCharacter(id);
	}

	render = () => {
		const { character } = this.props;
		return (
			<>
				{character && (
					<Character character={character} />
				)}
			</>
		)
	}
};

CharacterContainer.propTypes = {
	id: PropTypes.string.isRequired,
  character: PropTypes.any
};

const mapState = (state, { id }) => ({
	character: selectCharacter(state, id)
});

const mapDispatch = (dispatch) => ({
	getCharacter: (id) => dispatch(getCharacter(id))
});

export default connect(mapState, mapDispatch)(CharacterContainer);
