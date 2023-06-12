import React from 'react'
import { Link } from 'react-router-dom'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Tooltip } from 'react-tooltip'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img
          src='https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg'
          alt=''
        />
        <div className='user'>
          <img
            className='userimg'
            src='https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg'
            alt='user'
          />
          <div className='info'>
            <span>Ofir</span>
            <p>posted 2 days ago</p>
          </div>
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
              <img src={Delete} alt='Delete' />
            </Link>
          </div>
        </div>
        <h1>lorem ipsum dolor sit amet, consectetur adip</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, at
          quaerat. Incidunt nisi enim laborum unde hic reprehenderit ipsam?
          Exercitationem quaerat harum asperiores optio repudiandae nihil sit
          maiores molestias commodi!
        </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single
