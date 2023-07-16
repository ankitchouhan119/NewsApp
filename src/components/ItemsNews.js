import React, { Component } from 'react'
// import img1 from './img/img1.jpg'

export class ItemsNews extends Component {
  render() {
    let {title, description, imgUrl, newsUrl} = this.props;

    return (
      <div className="my-3">
        
        <div className="card" >
  <img src={!imgUrl?"https://www.gannett-cdn.com/presto/2023/05/08/USAT/92ef0dce-c967-4aa4-bcbf-710a8d824cce-169317_1935.jpg?crop=2999,1687,x0,y0&width=2999&height=1687&format=pjpg&auto=webp":imgUrl} className="card-img-top" alt="..."/>
  
  {/* <img src={img1} className="card-img-top" alt="..." /> */}
  <div className="card-body">
    <h5 className="card-title">{title}... </h5>
    <p className="card-text">{description}...</p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm  btn-primary">Read More</a>
  </div>
</div>

      </div>
    )
  }
}

export default ItemsNews
