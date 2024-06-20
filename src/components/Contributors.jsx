"use client"
import React from 'react'
import Profilecard from "./ProfileCard"
import styles from '../styles/Profilecard.module.css';
import contributors from './utils/contributors';


const Contributors = () => {
  return (
    <div className='h-[100%] flex justify-center flex-col py-10  pb-[10rem] contributors-bg ' id="contributors">
      <div>
      <h2 className='font-bold text-lg text-[#6C6C6CF7] flex justify-center ' >Team Dove 🕊️</h2>
      </div>

      <div>
      <br /> <h1 className="text-3xl  font-bold flex justify-center ">Our Contributors</h1><br /><br />
      </div>

      {/* <Profilecard name="Joshua" role="Team Leader"/>
      <Profilecard name="Jennifer"/>
      <Profilecard />
      <Profilecard /> */}

      <div className =" flex items-center  flex-col gap-5 ">
      {
        contributors.map(contributor => (
          <div key={contributor.id}>
            <Profilecard name={contributor.name} role={contributor.role} photo={contributor.photo}/>
          </div>
        ))
      }

      </div>

     
     
    </div>
  )
}

export default Contributors