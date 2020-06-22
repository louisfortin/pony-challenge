import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppearanceList from './AppearanceList';
import Loader from './Loader';

const Section = styled('div')`
  button {
    all: unset;
    margin-left: 10px;
    display: ${({ number }) => (number > 0 ? 'inline' : 'none')}
  }
`;

const LoaderContainer = styled('div')`
	height: 50px;
	width: 50px;
`;

const getToggleMessage = (show) => show ? 'hide' : 'show';

const AppearanceSection = ({ loading, number, message, show, onClick, values }) => (
	<Section number={number}>
		<p>
			{message}: {number}
			<button onClick={onClick}>
				({getToggleMessage(show)})
			</button>
		</p>
		{(show && !loading) && (
			<AppearanceList items={values} />
		)}
		{(show && loading) && (
			<LoaderContainer>
				<Loader size="xs" />
			</LoaderContainer>
		)}
	</Section>
);

AppearanceSection.propTypes = {
	loading: PropTypes.bool.isRequired,
	message: PropTypes.string.isRequired,
	number: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	values: PropTypes.array.isRequired,
};


export default AppearanceSection;
