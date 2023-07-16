import React, { Component } from 'react'
import ItemsNews from './ItemsNews'
import Spin from './Spin'
import propTypes from 'prop-types'


export class news extends Component {
   
    static defaultProps = {
      country: 'in',
      pageSize: 9,
      category: 'general',
    }


    static propTypes = {
      country: propTypes.string,
      pageSize: propTypes.number,
      category: propTypes.string,
    }

    constructor(){
      super();
      this.state = {
            articles: [],
            loading : false,
            page: 1
      }
    }

   async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f21e77f2e58f44778e973f01abde92e3&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
                   articles: parsedData.articles,
                   totalResults: parsedData.totalResults,
                   loading:false
        })

    }

    handleNextClick = async ()=>{
      if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

      }
      else{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f21e77f2e58f44778e973f01abde92e3&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({articles: parsedData.articles})

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading:false
      })

    }
    }
 
    handlePrevClick = async ()=>{

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f21e77f2e58f44778e973f01abde92e3&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({articles: parsedData.articles})

      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading:false
      })

    }
  



  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">NewsBar - Today's Headlines</h2>
        {this.state.loading && <Spin/>}
     

        <div className="row my-4 ">
          
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
          <ItemsNews  title={element.title?element.title.slice(0,30):""} description={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
          })}
         
        </div>

        <div className="container my-3 d-flex justify-content-between">
        <button disabled={this.state.page <= 1}  type="button" className="btn btn-info btn-dark" onClick={this.handlePrevClick}> &larr; Previous </button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize) } type="button" className="btn btn-info btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      
      </div>
      

    )
  }
}

export default news
