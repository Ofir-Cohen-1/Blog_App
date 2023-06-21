import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Home = () => {
  const [posts, setPosts] = useState([])

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`)
        setPosts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [cat])

  // {
  //   id: 1,
  //   title: 'lorem1',
  //   desc: 'lorem',
  //   img: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
  // },
  // {
  //   id: 2,
  //   title: 'lorem2',
  //   desc: 'lorem',
  //   img: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
  // },
  // {
  //   id: 3,
  //   title: 'lorem3',
  //   desc: 'lorem',
  //   img: 'https://ychef.files.bbci.co.uk/1600x900/p0dqcyrk.webp',
  // },
  // {
  //   id: 4,
  //   title: 'lorem4',
  //   desc: 'lorem',
  //   img: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
  // },

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post) => (
          <div className='post' key={post.id}>
            <div className='img'>
              <img src={post.img} alt='' />
            </div>
            <div className='content'>
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
