import Article from './Article'
import {Row,Col,Card} from 'react-bootstrap'
import React, { useEffect, useState } from "react";





const ArticlesGrid = () => {
    
    const [articles, setArticles] = useState([]);

    const getData = async () => {
    
    
        const API_KEY="412b689d363c477cabc67261a9663461";
        const url = "https://newsapi.org/v2/everything?q=apple&from=2022-04-07&to=2022-04-07&sortBy=popularity&apiKey="+API_KEY;
        const articles = await fetch(url);
        const parsedArticles = await articles.json();
        
        setArticles(parsedArticles.articles);
    }

    useEffect(() => {
        getData();
      }, []);
    

    console.log(articles);
    return (
    <Row xs={1} md={3} className="g-4">
      {articles.map((_, idx) => (
        <Col>
          <Article key={idx} title={_.title} url={_.url} imgurl={_.urlToImage} description={!_.description?"":_.description.slice(0,100)}></Article>
        </Col>
      ))}
    </Row>
    )
}

export default ArticlesGrid