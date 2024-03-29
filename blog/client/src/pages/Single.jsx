import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Tooltip } from 'react-tooltip'
import Menu from '../components/Menu'
import axios from 'axios'
import moment from 'moment'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

const Single = () => {
  const [post, setPost] = useState({})

  const location = useLocation()
  const navigate = useNavigate()

  const postId = location.pathname.split('/')[2]

  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`)
        setPost(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [postId])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='single'>
      <div className='content'>
        <img src={post?.img} alt='' />
        <div className='user'>
          {post.userImg && (
            <img className='userimg' src={post.userImg} alt='user' />
          )}
          <div className='info'>
            <span>{post.username}</span>
            <p>posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className='edit'>
              <Tooltip id='my-tooltip' />
              <Link
                to={'/write?edit=2'}
                data-tooltip-id='my-tooltip'
                data-tooltip-content='Edit'
                data-tooltip-place='top'
              >
                <img src={Edit} alt='Edit' />
              </Link>

              <Link
                to={'/write?edit=2'}
                data-tooltip-id='my-tooltip'
                data-tooltip-content='Delete'
                data-tooltip-place='top'
              >
                <img onClick={handleDelete} src={Delete} alt='Delete' />
              </Link>
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
      </div>
      <Menu cat={post.cat} />
    </div>
  )
}

export default Single
