import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// components
import Whiskey from './Whiskey';

const App = styled('div')`
	text-align: center;
`;

class WhiskeyListItem extends Component {
	render = () => {
		const { whiskey } = this.props;
		return (
			<>
				{whiskey && (
					<App>
						<Whiskey whiskey={whiskey} />
					</App>
				)}
			</>
		)
	}
};

WhiskeyListItem.propTypes = {
  whiskey: PropTypes.any.isRequired
};


export default WhiskeyListItem;
