import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getCharacterImageUrl } from '../utilities/characterUtilities';

const Character = styled('div')`
	overflow: hidden;
	width: 400px;
	max-height: 500px;
	margin: 30px;
	display: inline-block;
	background: white;
	padding-bottom: 15px;
	border: 0px;
	border-radius: 10px;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

	h2 {
		font-weight: bold;
		font-size: 36px;
		color: Black;
	}

	img {
		min-width: 400px;
		width: 100%;
		height: auto;
		position: relative;
		display: block;
	}

	@media all and (max-width: 1000px)  {
		margin: 15px auto;
	
		img {
			width: 100%;
			min-width: auto;
			height: auto;
		}
	}
`

const NavItem = styled(NavLink)`
	text-decoration:none;
`;

class CharacterListItem extends Component {
	render = () => {
		const { character } = this.props;
		return character && (
			<Character>
				<NavItem key={character.id} to={`/${character.id}`}>
					<h2>{character.name}</h2>
					<img
						alt={character.name + '_picture'}
						className="picture"
						src={getCharacterImageUrl(character)}
					/>
				</NavItem>
			</Character>
		)
	}
};

CharacterListItem.propTypes = {
  character: PropTypes.any.isRequired
};


export default CharacterListItem;
