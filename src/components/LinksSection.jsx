import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Links = styled('div')`
	display: flex;
	flex-wrap: wrap;
	height: auto;
`;

const Link = styled('a')`
	all: unset;
	text-decoration: none;
	text-align: center;
	min-width: 80px;
	margin: 5px;
	border: 1px solid white;
	border-radius: 25px;
	padding: 10px;
	color: white;
`;

const getMessage = (type) => {
	const tab = {
		detail: 'Details',
		wiki: 'Wiki',
		comiclink: 'Comics',
	};
	return tab[type] || 'Link';
}

const LinksSection = ({ links }) => (
	<Links>
		<p>Links : </p>
		{links.map((link) => (
			<Link href={link.url} target="_blank" rel="noopener noreferrer" >
				<span>{getMessage(link.type)}</span>
			</Link>
		))}
	</Links>
);

LinksSection.propTypes = {
	links: PropTypes.array
};


export default LinksSection;
