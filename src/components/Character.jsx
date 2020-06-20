import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

const App = styled('div')`
	position: relative;
	h2 {
		font-weight: bold;
		font-size: 36px;
		color: white;
	}
`;

const Product = styled('div')`
	display: flex;
	height: 544px;
	background-color: white;
	border-radius: 5px;
`;

const NotFoundPage = styled('div')`
	text-align: left;
	color: white;
	margin: 0 0 40% 36px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	span {
		font-weight: regular;
		font-size: 18px;
		color: white;

		a {
			color: white
		}
	}
`;

const Loader = styled('div')`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	span {
		border: 8px solid white;
		border-top: 8px solid white;
		border-radius: 50%;
		width: 60px;
		height: 60px;
		animation: spin 1.5s linear infinite;

		@keyframes spin {
			0% { transform: rotate(0deg); }
			100% { transform: rotate(360deg); }
		}
	}
`;

class Character extends Component {
	render = () => {
		const { character, loader } = this.props;
		return (
			<App>
				<Product>
					{character && (
						<>
							{character.name}
						</>
					)}
					{(!character && !loader) && (
						<NotFoundPage>
							<h2>Sorry, this character doesn't exist !</h2>
							<span>Go back to the <a href="/">main page</a></span> 
						</NotFoundPage>
					)}
					{(!character && loader) && (
						<Loader><span></span></Loader>
					)}
				</Product>
			</App>
		)
	}
};

Character.propTypes = {
  character: PropTypes.any.isRequired,
	loader: PropTypes.bool.isRequired,
};

const mapState = (state) => ({
	loader: false
});

export default connect(mapState)(Character);
