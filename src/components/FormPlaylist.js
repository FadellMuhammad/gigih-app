import React, { useState } from 'react'
import { addItemsToPlaylist, createPlaylist } from '../api/Services'
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Playlists.css'
import { getPlaylistId, getSelect } from '../reducers/apiSlice';
import { Form, Button, Input, message } from 'antd';
import './FormPlaylist.scss'
import { useHistory } from 'react-router-dom';

const FormPlaylist = () => {

  const [formInput, setFormInput] = useState('');
  const { userId } = useSelector((state) => state.userId);
  const { dataSelect } = useSelector((state) => state.dataSelect);
  const dataSelected = Object.values(dataSelect)
  const dispatch = useDispatch();
  const history = useHistory();

  const getPlaylist = async () => {
    return await createPlaylist(formInput, userId).then(res => {
      dispatch(getPlaylistId(res.id))
      return res.id
    })
  }

  const addPlaylistId = async (playlistId) => {
    await addItemsToPlaylist(playlistId, dataSelected)
      .then(res => console.log(res))
      .then(() => {
        message.success('Success create playlist')
        history.push('/home')
      })
      .catch(() => message.error('Failed create playlist'))
  }

  const handleSubmit = async () => {
    // e.preventDefault()
    getPlaylist()
      .then((playlistId) => addPlaylistId(playlistId))

    setFormInput('')
    delete { ...dataSelect }
    dispatch(getSelect(''))
  }


  const handleChange = (e) => {
    setFormInput({
      ...formInput, [e.target.name]: e.target.value
    })
  }

  return (
    <div className='form-playlist'>
      <h1>Create Playlist</h1>
      <Form labelCol={{
        span: 6,
      }}
      onFinish={handleSubmit}
      onChange={handleChange}
      >
        <Form.Item className='title' label='Title' name="name" rules={[
          {
            required: true,
            message: 'Please input title min 10 character',
            min: 10,
          },
        ]}>
          <Input type='text' name='name' />
        </Form.Item>
        <Form.Item label='description' name="description" rules={[
          {
            required: true,
            message: 'Please input description min 10 character',
            min: 10,
          },
        ]}>
          <Input.TextArea name='description' />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className='btn-submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default FormPlaylist