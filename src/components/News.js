import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: '9',
        category: 'general'
    }

    static propTypes = {
        country : PropTypes.string.isRequired,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=6f2a115e385440fd85c9bb0d3c3623cb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6f2a115e385440fd85c9bb0d3c3623cb&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }
    handleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6f2a115e385440fd85c9bb0d3c3623cb&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    render() {
        let { theme } = this.props;
        return (
            <div className='container my-4'>
                <h1 className='text-center my-4'>NewsMonkey - Top Headlines</h1>
                {this.state.loading&&<Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url} >
                                <NewsItem theme={theme} title={element.title ? element.title.slice(0,40) : ""} description={element.description ? element.description.slice(0,80) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        )
                    })}
                </div>
                {!this.state.loading && <div className="d-flex justify-content-between mt-4">
                    <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} className={`btn btn-${theme}`}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handleNextClick} className={`btn btn-${theme}`}>Next &rarr;</button>
                </div>}
            </div>
        )
    }
}

export default News