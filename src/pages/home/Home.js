import React, { useState } from 'react'
import { Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom';
import Profile from '../../components/Profile';
import '../../styles/Home.css';
import './Home.scss'
// import ListPlaylists from '../../components/ListPlaylists';
import SearchDataComp from '../../components/SearchDataComp.tsx';
import SelectDataComp from '../../components/SelectDataComp';

const Home = () => {

  const [changeComp, setChangeComp] = useState(<SearchDataComp />);
  const [select, setSelect] = useState(true);

  const setSearchComp = () => {
    setChangeComp(<SearchDataComp />);
    setSelect(true);
  }

  const setSelectedComp = () => {
    setChangeComp(<SelectDataComp />)
    setSelect(false);
  }

  return (
    <div className='home'>
      <div className="container">
        <Row>
          <Col>
            <Profile />
            <div className="createPlaylist">
              <Button><Link to='./create-playlist'>Create Playlist</Link></Button> <br /> <br />
            </div>
            {/* <div className="list-playlist"> */}
            {/* <ListPlaylists /> */}
            {/* </div> */}
            <div className='search-select'>
              <Button onClick={setSearchComp} style={{
                backgroundColor: select ? 'rgba(255, 255, 255, 0.231)' : '',
              }}>Search Lagu</Button>
              <Button onClick={setSelectedComp} style={{
                backgroundColor: select ? '' : 'rgba(255, 255, 255, 0.231)',}}>Lagu Selected</Button>
              <hr />
              <div className="component-search-select">
              </div>
            </div>
            {changeComp}
          </Col>
        </Row >
      </div>
    </div>
  )
}

export default Home