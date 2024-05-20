import React from 'react'

export default function Alert(props) {
    const capital = (word) => {
        let lowest = word.toLowerCase();
        return lowest.charAt(0).toUpperCase() + lowest.slice(1);
    }
    
  return (
    <div style={{height:"50px" }}>
  {props.alert && <div className={`alert alert-${props.alert.Type} alert-dismissible fade show`} role="alert">
      <strong> {capital(props.alert.Type)}</strong> : {props.alert.msg}
      {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>}
</div>
  )
}
