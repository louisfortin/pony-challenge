import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
// actions
import { getCharacters } from '../actions/characterActions';
// selectors
import { selectCharacters, selectCharacterParams } from '../selectors/characterSelectors';
// components
import CharacterListItem from './CharacterListItem';
import { FaSearch } from 'react-icons/fa'

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
	}

  input {
		width: 200px;
		padding: 10px;
		outline: none;
	}

	input:focus {
		border: 2px solid black;
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
		const { getCharacters, queryParams } = this.props;
		getCharacters({ ...queryParams, limit: 12 });
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
		const { characters } = this.props;
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
	queryParams: selectCharacterParams(state)
});

const mapDispatch = (dispatch) => ({
	getCharacters: (params) => dispatch(getCharacters(params))
});

export default connect(mapState, mapDispatch)(Home);
