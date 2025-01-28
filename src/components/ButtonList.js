import React from 'react'
import Button from './Button'

const list = ["All","Live","Game"]

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All" />
      <Button name="Game" />
      <Button name="Live"/>
      <Button name="Cricket"/>
      <Button name="News"/>
      <Button name="Cooking"/>
      <Button name="Valentines"/>
      <Button name="Songs"/>
      <Button name="News"/>
      <Button name="Cooking"/>
      <Button name="Valentines"/>
      <Button name="Songs"/>
      <Button name="News"/>
    </div>
  )
}

export default ButtonList
