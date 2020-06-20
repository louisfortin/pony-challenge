import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// actions
import { getCharacter, getCharacterAppearances } from '../actions/characterActions';
// selectors
import { selectCharacter } from '../selectors/characterSelectors';
import {
	CHARACTER_COMICS,
	CHARACTER_EVENTS,
	CHARACTER_SERIES,
	CHARACTER_STORIES
} from '../constants/characterTypes';
// component
import Character from './Character';

class CharacterContainer extends Component {
	componentDidMount = () => {
		const { getCharacter, getCharacterAppearances, id } = this.props;
		getCharacter(id).then((character) => {
			if (character) {
				getCharacterAppearances(
					character.comics.collectionURI,
					CHARACTER_COMICS,
					{ offset: 0, limit: character.comics.available }
				);
				getCharacterAppearances(
					character.events.collectionURI,
					CHARACTER_EVENTS,
					{ offset: 0, limit: character.events.available }
				);
				getCharacterAppearances(
					character.series.collectionURI,
					CHARACTER_SERIES,
					{ offset: 0, limit: character.series.available }
				);
				getCharacterAppearances(
					character.stories.collectionURI,
					CHARACTER_STORIES,
					{ offset: 0, limit: character.stories.available }
				);
			}
		});
	}

	render = () => {
		const { character } = this.props;
		return (
			<Character character={character} />
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
	getCharacter: (id) => dispatch(getCharacter(id)),
	getCharacterAppearances: (url, collection, params) => dispatch(getCharacterAppearances(url, collection, params))
});

export default connect(mapState, mapDispatch)(CharacterContainer);
