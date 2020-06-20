import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
// actions
import { getCharacters } from '../actions/characterActions';
// selectors
import { selectCharacters } from '../selectors/characterSelectors';
// components
import CharacterListItem from './CharacterListItem';

const App = styled('div')`
	margin-top: -20px;
	text-align: center;
	width: 90%;
	margin: auto;

	h1 {
		padding: 50px 0;
		margin: 0 auto;
		color: white;
		text-transform: uppercase
	}
`;

const ListItems = styled('div')`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	text-decoration:none;
`;

class Home extends Component {
	componentDidMount = () => {
		const { getCharacters } = this.props;
		getCharacters();
	}

	render = () => {
		const { characters } = this.props;
		return (
			<App>
				<h1>Marvel's characters</h1>
				<ListItems>
					{characters.map((character) => (
						<CharacterListItem key={character.id} character={character} />
					))}
				</ListItems>
			</App>
		)
	}
};

Home.propTypes = {
  characters: PropTypes.array.isRequired,
	getCharacters: PropTypes.func.isRequired
};

const mapState = (state) => ({
	characters: selectCharacters(state)
});

const mapDispatch = (dispatch) => ({
	getCharacters: () => dispatch(getCharacters())
});

export default connect(mapState, mapDispatch)(Home);
