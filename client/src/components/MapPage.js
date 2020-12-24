import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/styles';
import MapClient from './MapClient';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'inline-flex',
    padding: '40px',
  },
  top: {
    flex: 1,
    border: '1px solid black',
    boxShadow: '0 0 10px #000000',
    width: '1415px',
    height: 'auto',
    padding: '20px',
    backgroundColor: 'white',

  },
  cell: {
    'border': '1px solid black',
    'boxShadow': '0 0 10px #000000',
    'height': '300px',
    'width': '1200px',
    'margin': '0 auto',
    '&hover': {
      background: '#BBD1EA',
    },
  },
  main: {
    flex: 1,
    border: '1px solid black',
    boxShadow: '0 0 10px #000000',
    backgroundColor: 'white',
    width: 'auto',
    height: 'auto',
    margin: '0 auto',
    padding: '30px',
  },
  toolbar: {
    border: '1px solid white',
    // eslint-disable-next-line max-len
    backgroundColor: '#a3c5d6',
    height: '35px',
    width: 'auto',

  },
  map: {
    flex: 1,
    padding: '10px',
  },
  sidebar: {
    flex: 1,
    border: '1px solid black',
    boxShadow: '0 0 10px #000000',
    backgroundColor: 'white',
    width: '300px',
    padding: '20px',
  },
  sidebarSettings: {
    backgroundColor: '#bbd1ea',
    padding: '10px',
  },
  mapSettings: {
    flex: 1,
    backgroundColor: 'grey',
    height: '20px',
  },
  section: {
    display: 'flex',
    border: '2px solid blue',
    padding: '20px',
    flexDirection: 'row',
  },
  photo: {
    padding: '50px',
    maxHeight: '400px',
    maxWidth: '400px',
  },


}));


/**
 * Map Page design component
 * @component MapPage
 * @return {Component}
 */
function MapPage() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const url = 'http://localhost:1337/api/logs';
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
  };

  return (
    <React.Fragment>
      <Header />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '20px',
      }}>
        <div className={classes.container}>
          <div className={classes.top}>
            <h1>Visits</h1>
            {posts.map((post) => {
              return (
                <div className={classes.section} key={post._id}>
                  <ul>
                    <h3>{post.title}</h3>
                    <li>Comments: {post.comments}</li>
                    <li>Rating: {post.rating}</li>
                  </ul>
                  <img className={classes.photo} src={post.image} />
                </div>
              );
            })}
            <div>

            </div>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.sidebar}>
            <h3>Filter by:</h3>
            <div className={classes.sidebarSettings}>
              <h4>Budget per night:</h4>
              <h4>----</h4>
              <h4>Frequently use:</h4>
              <h4>----</h4>
              <h4>Review score:</h4>
              <h4>----</h4>
            </div>
          </div>
          <div className={classes.main}>
            <div className={classes.toolbar}></div>
            <div className={classes.map}>
              <MapClient mapSizeWidth='1000' mapSizeHeight='500' />
            </div>
            <div className={classes.mapSettings}></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MapPage;
