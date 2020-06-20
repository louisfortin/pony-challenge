import React from 'react';
import PropTypes from 'prop-types';

const AppearanceList = ({ items }) => (
	<ul>
		{items.map((item) => (
			<li>{ item.title }</li>
		))}
	</ul>
);

AppearanceList.propTypes = {
  items: PropTypes.any.isRequired
};


export default AppearanceList;
