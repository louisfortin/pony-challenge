import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  selectCharacterComics,
  selectCharacterEvents,
  selectCharacterSeries,
  selectCharacterStories
} from '../selectors/characterSelectors';
import {
  characterLoader,
  selectComicsLoader,
  selectEventsLoader,
  selectSeriesLoader,
  selectStoriesLoader
} from '../selectors/loaderSelectors';
import AppearanceSection from './AppearanceSection';
import LinksSection from './LinksSection';
import Loader from './Loader';
import { getCharacterImageUrl } from '../utilities/characterUtilities';

const CharacterView = styled('div')`
	width: 100vw;
  margin: 30px auto;
  font-weight: regular;
  font-size: 18px;
  color: white

  h2 {
    font-weight: bold;
    font-size: 36px;
    margin-bottom: 50px;
    text-align: center;
  }

  p {
    text-align: justify;
  }
`;

const CharacterContainer = styled('div')`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

const CharacterPicture = styled('img')`
  float: right;
  width: 50%;
  margin: 0 0 10px 15px;
  border-radius: 5%;

  @media all and (max-width: 1000px)  {
		width: 100%;
		margin: 0 0 10px 0 !important;
  }
`;

const NotFoundPage = styled('div')`
  text-align: left;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  span {
    color: white;

    a {
      color: white;
    }
  }
`;

const getDate = (date) => {
  const d = new Date(date);
  const day = d.getDate() < 10 ? `0${d.getDate()}` : (d.getDate());
  const month = d.getMonth() < 9 ? `0${d.getMonth() + 1}` : (d.getMonth() + 1);
  return [day, month, d.getFullYear()].join('/')
};

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comicsToggle: false,
      seriesToggle: false,
      storiesToggle: false,
      eventsToggle: false,
    }
  }

  getToggleMessage = (type) => {
    const stateAttr = `${type}Toggle`;
    return this.state[stateAttr] ? 'hide' : 'show';
  }

  toggle = (type) => {
    const stateAttr = `${type}Toggle`;
    this.setState((prevState) => ({
      [stateAttr]: !prevState[stateAttr]
    }));
  };

  render = () => {
    const {
      character,
      comics,
      comicsLoader,
      events,
      eventsLoader,
      loader,
      series,
      seriesLoader,
      stories,
      storiesLoader,
    } = this.props;
    const { comicsToggle, seriesToggle, storiesToggle, eventsToggle } = this.state;
    return (
      <CharacterView>
        {loader && (
          <Loader />
        )}
        <CharacterContainer>
          {character && (
            <>
              <h2>{character.name}</h2>
              <div>
                <CharacterPicture
                  alt={character.name + '_picture'}
                  src={getCharacterImageUrl(character)}
                />
                <p>Description : {character.description || '-'}</p>
                <p>Last modification: {getDate(character.modified)}</p>
                <AppearanceSection
                  loading={comicsLoader}
                  message="Appearances in comics"
                  number={character.comics.available}
                  show={comicsToggle}
                  onClick={() => this.toggle('comics')}
                  values={comics}
                />
                <AppearanceSection
                  loading={seriesLoader}
                  message="Appearances in series"
                  number={character.series.available}
                  show={seriesToggle}
                  onClick={() => this.toggle('series')}
                  values={series}
                />
                <AppearanceSection
                  loading={storiesLoader}
                  message="Appearances in stories"
                  number={character.stories.available}
                  show={storiesToggle}
                  onClick={() => this.toggle('stories')}
                  values={stories}
                />
                <AppearanceSection
                  loading={eventsLoader}
                  message="Events"
                  number={character.events.available}
                  show={eventsToggle}
                  onClick={() => this.toggle('events')}
                  values={events}
                />
                <LinksSection links={character.urls} />
              </div>
            </>
          )}
          {!character && !loader && (
            <NotFoundPage>
              <h2>Sorry, this character doesn't exist !</h2>
              <span>
                Go back to the <a href='/home'>main page</a>
              </span>
            </NotFoundPage>
          )}
        </CharacterContainer>
      </CharacterView>
    );
  };
}

Character.propTypes = {
  character: PropTypes.any,
  comics: PropTypes.array,
  comicsLoader: PropTypes.bool.isRequired,
  events: PropTypes.array,
  eventsLoader: PropTypes.bool.isRequired,
  loader: PropTypes.bool.isRequired,
  series: PropTypes.array,
  seriesLoader: PropTypes.bool.isRequired,
  stories: PropTypes.array,
  storiesLoader: PropTypes.bool.isRequired,
};

const mapState = (state) => ({
  loader: characterLoader(state),
  comics: selectCharacterComics(state),
  comicsLoader: selectComicsLoader(state),
  events: selectCharacterEvents(state),
  eventsLoader: selectEventsLoader(state),
  series: selectCharacterSeries(state),
  seriesLoader: selectSeriesLoader(state),
  stories: selectCharacterStories(state),
  storiesLoader: selectStoriesLoader(state),
});

export default connect(mapState)(Character);
