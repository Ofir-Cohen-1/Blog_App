import React from 'react'

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: 'lorem1',
      desc: 'lorem',
      img: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
    },
    {
      id: 2,
      title: 'lorem2',
      desc: 'lorem',
      img: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
    },
    {
      id: 3,
      title: 'lorem3',
      desc: 'lorem',
      img: 'https://ychef.files.bbci.co.uk/1600x900/p0dqcyrk.webp',
    },
    {
      id: 4,
      title: 'lorem4',
      desc: 'lorem',
      img: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
    },
  ]

  return (
    <div className='menu'>
      <h1>Other posts yoy may like</h1>
      {posts.map((post) => (
        <div className='post' key={post.id}>
          <img src={post.img} alt='' />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
