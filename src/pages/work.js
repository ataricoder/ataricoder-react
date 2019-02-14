import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card';
import '../layouts/work.css'



const WorkPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Projects</h1>
      </div>
    </div>
    <div className="Cards">
      <div className="CardGroup">
      <Card
        title ="Project 1"
        text="12 sections"
        images="https://cl.ly/2db5c9f489d2/wallpaper.jpg"/>
      <Card
        title ="Project 2"
        text="12 sections"
        images="https://cl.ly/2db5c9f489d2/wallpaper.jpg"/>
      <Card
        title ="project 3"
        text="12 sections"
        images="https://cl.ly/2db5c9f489d2/wallpaper.jpg"/>
      <Card
        title ="Project 4"
        text="12 sections"
        images="https://cl.ly/2db5c9f489d2/wallpaper.jpg"/>
      <Card
        title ="Project 5"
        text="12 sections"
        images="https://cl.ly/2db5c9f489d2/wallpaper.jpg"/>
      <Card
        title ="Project 6"
        text="12 sections"
        images="https://cl.ly/2db5c9f489d2/wallpaper.jpg"/>
      <Card
        title ="project 7"
        text="12 sections"
        images="https://cl.ly/2db5c9f489d2/wallpaper.jpg"/>
      <Card
        title ="Project 8"
        text="12 sections"
        images="https://cl.ly/2db5c9f489d2/wallpaper.jpg"/>
      </div>
    </div>
  </div>
)

export default WorkPage
