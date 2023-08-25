import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import classes from './Model.module.css'

const Overlay = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.Close}>

    </div>
  )
}

const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
  
}

const PortalElement = document.getElementById('portal');

const Model = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Overlay />, PortalElement)}
      {ReactDOM.createPortal(<ModelOverlay>{ props.children}</ModelOverlay>, PortalElement)}
    </Fragment>
  )
}

export default Model