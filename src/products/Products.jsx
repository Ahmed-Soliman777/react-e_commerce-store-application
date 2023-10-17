import React from 'react'
import './Products.scss'
// import Card from '../components/Card'

export default function Products({ result }) {
  return (
    <section className="card-container">{result}</section>
  )
}
