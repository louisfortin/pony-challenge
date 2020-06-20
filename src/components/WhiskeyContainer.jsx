import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// actions
import { getWhiskey } from '../actions/productActions';
// selectors
import { selectWhiskey } from '../selectors/productSelectors';
// component
import Whiskey from './Whiskey';

class WhiskeyContainer extends Component {
	componentDidMount = () => {
		const { getWhiskey, id } = this.props;
		getWhiskey(id);
	}

	render = () => {
		const { whiskey } = this.props;
		return (
			<>
				{whiskey && (
					<Whiskey whiskey={whiskey} />
				)}
			</>
		)
	}
};

WhiskeyContainer.propTypes = {
	id: PropTypes.string.isRequired,
  whiskey: PropTypes.any
};

const mapState = (state, { id }) => ({
	whiskey: selectWhiskey(state, id)
});

const mapDispatch = (dispatch) => ({
	getWhiskey: (id) => dispatch(getWhiskey(id))
});

export default connect(mapState, mapDispatch)(WhiskeyContainer);
