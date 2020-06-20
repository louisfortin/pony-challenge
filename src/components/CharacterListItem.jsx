import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavItem = styled(NavLink)`
	text-decoration:none;
`;

const getCharacterImageUrl = (character) => `
	${character.thumbnail.path}.${character.thumbnail.extension}
`;

class CharacterListItem extends Component {
	render = () => {
		const { character } = this.props;
		return character && (
			<div className="hero">
				<NavItem key={character.id} to={`/${character.id}`}>
					<h2>{character.name}</h2>
					<img
						alt={character.name + '_picture'}
						className="picture"
						src={getCharacterImageUrl(character)}
					/>
				</NavItem>
			</div>
		)
	}
};

CharacterListItem.propTypes = {
  character: PropTypes.any.isRequired
};


export default CharacterListItem;
