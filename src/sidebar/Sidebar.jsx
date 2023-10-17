import React from 'react'
import Category from './category/Category'
import Price from './price/Price'
import Colors from './colors/Colors'
import './Sidebar.css'

export default function Sidebar({handleChange}) {
  
  return (
    <div>
      <section className="sidebar">
        <div className="logo-container">
            <h1>Logo</h1>
        </div>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
      </section>
    </div>
  )
}
