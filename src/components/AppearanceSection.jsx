import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppearanceList from './AppearanceList';

const Section = styled('div')`
  button {
    all: unset;
    margin-left: 10px;
    display: ${({ number }) => (number > 0 ? 'inline' : 'none')}
  }
`;

const getToggleMessage = (show) => show ? 'hide' : 'show';

const AppearanceSection = ({ number, message, show, onClick, values }) => (
	<Section number={number}>
		<p>
			{message}: {number}
			<button onClick={onClick}>
				({getToggleMessage(show)})
			</button>
		</p>
		{show && (
			<AppearanceList items={values} />
		)}
	</Section>
);

AppearanceSection.propTypes = {
	message: PropTypes.string.isRequired,
	number: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	values: PropTypes.array.isRequired,
};


export default AppearanceSection;
