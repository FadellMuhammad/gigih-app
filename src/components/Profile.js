import React, { useState } from 'react'
import { getCurrentUserProfile } from '../api/Services'
import '../styles/Profile.css'
import { useDispatch } from 'react-redux'
import { getUserId } from '../reducers/apiSlice'

const Profile = () => {

    const [profile, setProfile] = useState('');
    const dispatch = useDispatch();

    useState(() => {
        getCurrentUserProfile()
            .then((data) => {
                setProfile(data)
                dispatch(getUserId(data.id))
            })
    }, [])

    return (
        <div className='profile'>
            <h2>Profile</h2>
            {
                profile !== '' ?
                    <div className="profile-comp">
                        <img src={profile.images[0].url} alt={profile.display_name} />
                        <div className="name">
                            <p>{profile.display_name}</p>
                            <p>{profile.country}</p>
                        </div>
                    </div> : ''
            }
        </div>
    )
}

export default Profile