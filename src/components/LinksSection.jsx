import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Links = styled('div')`
	display: flex;
	flex-wrap: wrap;
	height: auto;
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
			<a
				key={`link-${link.type}`}
				className="marvel-link"
				href={link.url}
				target="_blank" 
				rel="noopener noreferrer"
			>
				<span>{getMessage(link.type)}</span>
			</a>
		))}
	</Links>
);

LinksSection.propTypes = {
	links: PropTypes.array
};


export default LinksSection;
