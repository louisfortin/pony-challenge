import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
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
import { TiArrowBack } from 'react-icons/ti';

const BackButton = styled('button')`
	all: unset;
	position: absolute;
	top: 0;
	left: 0;
	margin: 10px 0 0 10px;
	cursor: pointer;
`;

class CharacterContainer extends Component {
	componentDidMount = () => {
		const { getCharacter, getCharacterAppearances, id } = this.props;
		getCharacter(id).then((character) => {
			if (character) {
				getCharacterAppearances(
					character.comics.collectionURI,
					CHARACTER_COMICS,
					{ offset: 0, limit: Math.min(character.comics.available, 100) }
				);
				getCharacterAppearances(
					character.events.collectionURI,
					CHARACTER_EVENTS,
					{ offset: 0, limit: Math.min(character.events.available, 100) }
				);
				getCharacterAppearances(
					character.series.collectionURI,
					CHARACTER_SERIES,
					{ offset: 0, limit: Math.min(character.series.available, 100) }
				);
				getCharacterAppearances(
					character.stories.collectionURI,
					CHARACTER_STORIES,
					{ offset: 0, limit: Math.min(character.stories.available, 100) }
				);
			}
		});
	}

	render = () => {
		const { character, history } = this.props;
		return (
			<>
				<Character character={character} />
				{character && (
					<BackButton onClick={history.goBack} >
						<TiArrowBack color="white" size={36} />
					</BackButton>
				)}
			</>
		)
	}
};

CharacterContainer.propTypes = {
  character: PropTypes.any,
	history: PropTypes.any.isRequired,
	id: PropTypes.string.isRequired
};

const mapState = (state, { id }) => ({
	character: selectCharacter(state, id)
});

const mapDispatch = (dispatch) => ({
	getCharacter: (id) => dispatch(getCharacter(id)),
	getCharacterAppearances: (url, collection, params) => dispatch(getCharacterAppearances(url, collection, params))
});

export default connect(mapState, mapDispatch)(CharacterContainer);
