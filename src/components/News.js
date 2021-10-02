import React, { Component } from 'react';
import propTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

import NewsItem from './NewsItem';
import Loader from './Loader';

export class News extends Component {
    articles = [];

    static defaultProps = {
        country: 'in',
        pageSize: 10,
        category: 'general'

    };

    static propTypes = {
        country: propTypes.string,
        pageSize: propTypes.number,
        category: propTypes.string
    };

    constructor(props) {
        super(props);
        console.log("Hello Constructor");
        this.state = {
            articles: this.articles,
            loading: true,
            page: 1,
            totalResults: 0
        };
        document.title = (this.props.category[0].toUpperCase() + this.props.category.slice(1)) + " News";   // set at starting
    }

    async componentDidMount() {
        let setProgress= this.props.setProgress;
        setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=${this.props.pageSize}&apiKey=${this.props.apiKey}&page=${this.state.page}&category=${this.props.category}`;
        this.setState({
            loading: true
        });

        let data = await fetch(url);
        setProgress(40);
        let parsedData = await data.json();     // remember bracket
        setProgress(80);
        // console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        setProgress(100);
        // setProgress(0);
    }

    fetchMoreData = async() => {
        this.setState({
            page: this.state.page+1
        });

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=${this.props.pageSize}&apiKey=${this.props.apiKey}&page=${this.state.page}&category=${this.props.category}`;

        let data = await fetch(url);
        let parsedData = await data.json();     // remember bracket
        // console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        });

      };

    render() {
        // console.log("Hello Render");
        return (
            <div>
                <h1 className="text-center">Todays News</h1>
                {this.state.loading && <Loader />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}  // articles array will concatinate
                    loader={<Loader />}
                >
                    <div className="infinite-scroll-component " style={{height: "auto", overflow: "hidden"}}>
                    <div className="row">
                        {
                            this.state.articles.map((one_article) => {
                                let { url, title, description, urlToImage, publishedAt, author, source } = one_article;
                                return <div className="col-md-6 my-3" key={url}>
                                    <NewsItem title={title} desc={description} imageUrl={urlToImage} newsUrl={url} publishedAt={publishedAt} author={author} source={source.name} />
                                </div>
                            })
                        }
                    </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default News;
