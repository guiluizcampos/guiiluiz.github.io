import React, { useEffect, useContext } from 'react';
import { RedditContext } from '../context/RedditContext';

function MainScreen() {
  const { data: { data, isFetching }, getData, endpoint, setEndpoint } = useContext(RedditContext);

  useEffect(() => {
    getData(endpoint);
  }, [endpoint]);

  return (
    <div className="App">
      <p className="title">Selecionado: {endpoint}</p>
      <select name="subreddit" onChange={(e) => setEndpoint(e.target.value)}>
        <option value="reactjs">reactjs</option>
        <option value="frontend">frontend</option>
      </select>
      {isFetching && <p>Loading...</p>}
      <div className="subtitle">
        {!isFetching && <p>Last updated at {new Date().toString()}</p>}
        {data && <button type="button" onClick={() => getData(endpoint)}>Refresh</button>}
      </div>
      <ul className="subreddit-list">
        {data && data.map((subreddit) => <li key={subreddit.data.title}>{subreddit.data.title}</li>)}
      </ul>
    </div>
  );
}

export default MainScreen;
