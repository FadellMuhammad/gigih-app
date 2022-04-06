import React from 'react'
import Profile from '../../components/Profile';
import { Row, Col, Button } from 'antd'
import '../../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className='home'>
            <div className="container">
                <Row>
                    <Col span={6}>
                        <Profile />
                        <Button><Link to='./create-playlist'>Create Playlist</Link></Button> <br /> <br />
                        <Button><Link to='./search'>Search Lagu</Link></Button> <br /> <br />
                        <Button><Link to='./lagu-selected'>Lagu Selected</Link></Button>
                    </Col>
                    {/* <Col span={16}>
                
                </Col> */}
                </Row >
            </div>
        </div>
    )
}

export default Home