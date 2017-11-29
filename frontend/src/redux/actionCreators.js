import * as types from './actionTypes';


export const refreshStyleSheetStatus = () => ({
  type: types.REFRESH_STYLESHEET_STATUS,
  payload: null
});

export const fetchSpotifyAccessToken = () => ({
  type: types.FETCH_SPOTIFY_TOKEN_REQUESTED,
  payload: null
});

export const determineSimilarArtists = (initialArtistName, accessToken, applyFilter = true) => ({
  type: types.DETERMINE_SIMILAR_ARTISTS_REQUESTED,
  payload: [initialArtistName, accessToken, applyFilter]
});

export const fetchVideos = (artist, maxResults = 10) => ({
  type: types.FETCH_VIDEOS_REQUESTED,
  payload: [artist, maxResults]
});