import React from 'react'
import './AppDownload.css'
const AppDownload = () => {
  return (
      <div className='app-download' id='app-download'>
        <p>
            For Better Experience Download <br /> our App
        </p>
        <div className="app-download-platforms">
            <img src="/apple.png" alt="" />
            <img src="/play.png" alt="" />
        </div>
        <p>
            Download App For Android And IOS Mobile Phone
        </p>
        <p>
            Download App For Windows Phone
        </p>
        <p>
            Download App For Mac OS X
        </p>
        <p>
            Download App For Linux OS
        </p>
      </div>
  )
}

export default AppDownload