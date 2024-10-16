import React from 'react'
import "../styles/apiFetching.css";
export default function Card(props) {
  return (
    <>
      <div className="card" style={{ width: "20rem" }}>
        <img src={props.imageUrl} className="card-img-top imageSet" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p></div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">ID : {props.id}</li>
          <li className="list-group-item">Rate : {props.rate}</li>
          <li className="list-group-item">Count : {props.count}</li>
        </ul>
        <div className="card-body">
          <a href="/open-item" className="btn btn-primary">Open Item</a>
        </div>

      </div>
    </>
  )
}
