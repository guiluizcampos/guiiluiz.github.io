import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { fetchData } from '../services/redditAPI';

const RedditContext = createContext();

const RedditProvider = ({ children }) => {
  const [data, setData] = useState({ data: [], isFetching: true });
  const [endpoint, setEndpoint] = useState('reactjs');
  
  const getData = (subreddit) => {
    setData({ data: '', isFetching: true });
    let endpoint;
    if (subreddit === 'reactjs') endpoint = 'https://www.reddit.com/r/reactjs.json';
    else endpoint = 'https://www.reddit.com/r/frontend.json';
    fetchData(endpoint)
      .then((data) => {
        setData({ data: data.data.children, isFetching: false });
      });
  };

  const context = {
    data,
    getData,
    endpoint,
    setEndpoint
  };

  return (
    <RedditContext.Provider value={context}>
      {children}
    </RedditContext.Provider>
  );
};

export { RedditContext, RedditProvider as Provider };

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
