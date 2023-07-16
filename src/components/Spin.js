import React, { Component } from 'react'
import loading from './img/loading.gif'
export class Spin extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="spinner"   />
      </div>
    )
  }
}

export default Spin
