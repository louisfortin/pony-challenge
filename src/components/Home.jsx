import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
// actions
import { getArticles, getWhiskeys } from '../actions/productActions';
// selectors
import { selectArticles, selectWhiskeys } from '../selectors/productSelectors';
// components
import WhiskeyListItem from './WhiskeyListItem';

const App = styled('div')`
	text-align: center;
`;

class Home extends Component {
	componentDidMount = () => {
		const { getArticles, getWhiskeys } = this.props;
		getArticles();
		getWhiskeys();
	}

	render = () => {
		const { whiskeys } = this.props;
		return (
			<App>
				<p>Whiskey Selection</p>
				{whiskeys.map((whiskey) => (
					<NavLink key={whiskey.title} to={`/whiskey/${whiskey.title}`}>
						<WhiskeyListItem whiskey={whiskey} />
					</NavLink>
				))}
			</App>
		)
	}
};

Home.propTypes = {
	articles: PropTypes.array.isRequired,
	getArticles: PropTypes.func.isRequired,
	getWhiskeys: PropTypes.func.isRequired,
  whiskeys: PropTypes.array.isRequired
};

const mapState = (state) => ({
	articles: selectArticles(state),
	whiskeys: selectWhiskeys(state)
});

const mapDispatch = (dispatch) => ({
	getArticles: () => dispatch(getArticles()),
	getWhiskeys: () => dispatch(getWhiskeys())
});

export default connect(mapState, mapDispatch)(Home);
