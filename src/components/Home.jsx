import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
// actions
import { getCharacters } from '../actions/characterActions';
// selectors
import { selectCharacters } from '../selectors/characterSelectors';
import { selectCharacterParams } from '../selectors/querySelectors';
import { characterLoader } from '../selectors/loaderSelectors';
// components
import CharacterListItem from './CharacterListItem';
import Loader from './Loader';
import { FaSearch } from 'react-icons/fa';

const App = styled('div')`
	margin-top: -20px;
	text-align: center;
	width: 100%;
	height: 100%;
	margin: auto;
	overflow-y: scroll

	h1 {
		padding: 50px 0;
		margin: 0 auto;
		color: white;
		text-transform: uppercase
	}
	h3 {
		padding: 50px 0;
		margin: 0 auto;
		color: white;
		text-transform: uppercase
	}
`;

const SearchBar = styled('div')`
	display: flex;
	justify-content: center;
	width: 100%;
	margin-bottom: 15px;

 	svg {
		padding: 10px;
		color: white;
		min-width: 50px;
		text-align: center;
		border: 1px solid white;
	}

  input {
		width: 200px;
		padding: 10px;
		outline: none;
		border: 1px solid white;
	}
`;

const ListItems = styled('div')`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	text-decoration:none;
	width: 80%;
	margin: auto;
`;

class Home extends Component {
	componentDidMount = () => {
		const { getCharacters, queryParams } = this.props;
		getCharacters({ ...queryParams });
	}
	
	handleScroll = ({ target }) => {
		if (target.scrollHeight - target.scrollTop === target.clientHeight) {
			const { getCharacters, queryParams } = this.props;
			getCharacters({
				...queryParams,
				offset: queryParams.offset + queryParams.limit
			});
		}
  }

	handleSearch = (start) => {
		const { getCharacters, queryParams } = this.props;
		getCharacters({ ...queryParams, offset: 0, start });
	}

  debouncer = debounce(this.handleSearch, 500);

	render = () => {
		const { characters, loader } = this.props;
		return (
			<App onScroll={this.handleScroll}>
				<h1>Marvel's characters</h1>
				<SearchBar>
					<FaSearch />
					<input
						type="text"
						placeholder="search"
						name="search"
						onChange={(e) => this.debouncer(e.target.value)}
					/>
				</SearchBar>
				<ListItems>
					{characters.map((character) => (
						<CharacterListItem key={character.id} character={character} />
					))}
				</ListItems>
				{(characters.length === 0 && !loader) && (
					<h3>No results !</h3>
				)}
				{loader && (
					<Loader />
				)}
			</App>
		)
	}
};

Home.propTypes = {
  characters: PropTypes.array.isRequired,
	getCharacters: PropTypes.func.isRequired,
	queryParams: PropTypes.any
};

const mapState = (state) => ({
	characters: selectCharacters(state),
	loader: characterLoader(state),
	queryParams: selectCharacterParams(state)
});

const mapDispatch = (dispatch) => ({
	getCharacters: (params) => dispatch(getCharacters(params))
});

export default connect(mapState, mapDispatch)(Home);
