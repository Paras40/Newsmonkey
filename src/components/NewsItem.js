import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { theme, title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={imageUrl?imageUrl:"https://static.india.com/wp-content/uploads/2022/10/NASA-bubble.jpg"} className="card-img-top"  style={{height:'220px'}} alt="No image" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className={`btn btn-sm btn-${theme}`}>Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem