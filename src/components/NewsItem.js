import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, desc, imageUrl, newsUrl, publishedAt, author, source}= this.props;
        let date=new Date(publishedAt).toGMTString();
        title=title ? title.slice(0,45) : "";
        author=author ? author : "Unknown";
        source=source ? source : "Unknown";
        desc= desc ? desc.slice(0,88) : "";
        imageUrl= imageUrl ? imageUrl : "./no_img.jpg";  // by default search in public(REACT)

        return (
            <div>
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="news" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{desc}...</p>
                        <p className="text-muted">Source: {source}</p>
                        <p className="card-text"><small className="text-muted">written by {author} at {date}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem;
