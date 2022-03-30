import React from 'react'
import Auth from '../Auth/AuthAPI'
import TrackComp from '../component/TrackComp';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            search: '',
            token: ''
        }
    }

    addInput = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    componentDidMount() {
        const auth = new Auth();
        this.setState({
            token: auth.getToken()
        })
    }

    render() {
        const auth = new Auth();
        const { data, token } = this.state;

        const getData = () => {
            const { search } = this.state;
            // const token = auth.getToken();

            if (search !== '' && token !== null) {
                auth.getAPI(search, token).then(res => this.setState({ data: res }));
            }
        }

        const authorizedSpotify = () => {
            if (auth.getToken() === null || auth.getToken() === '') {
                auth.redirectToSpotify()
                this.setState({ token: auth.getToken() });
            }
        }

        return (
            <div className='home'>
                <h1 className='title'>Search Song Spotify</h1>

                <button onClick={authorizedSpotify} className="login">Login</button> <br />
                {
                    auth.getToken() !== null && auth.getToken() !== '' ? <div className="search">
                        <input name='search' type="text" placeholder="Search" onChange={this.addInput} className="input" />
                        <button onClick={getData} className='btn-search'>Search</button>
                        <div className='track'>
                            <table>
                                <tbody>
                                    {
                                        <TrackComp data={data} />
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div> : null
                }

            </div>
        )
    }
}

export default Home