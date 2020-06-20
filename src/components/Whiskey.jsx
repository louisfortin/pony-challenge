import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const App = styled('div')`
	text-align: center;
`;

class Whiskey extends Component {
	render = () => {
		const { whiskey } = this.props;
		return (
			<>
				{whiskey && (
					<App>
						{whiskey.title}
					</App>
				)}
			</>
		)
	}
};

Whiskey.propTypes = {
  whiskey: PropTypes.any.isRequired
};

export default Whiskey;
