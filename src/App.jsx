import React from 'react'
import Tweet from './Tweet'
import './index.css'

export default function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <div className='items'>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  )
}
