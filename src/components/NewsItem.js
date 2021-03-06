import React from 'react';
import { connect } from 'react-redux'
const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
width: '50%',
margin: '0 auto',
color: 'olive'
}


let NewsItem = ({ article }) => (
article ?
<article style={articleStyle} >
  <div>
    <h1>{article.title}</h1>
    <img style={imgStyle} src={article.urlToImage} alt="" />
    <h4>{article.description}</h4>
  <ul>
    {//{}
    }
  </ul>
  {//<h1 onClick={handleClick}>click me throw error</h1>
  }
  </div>
</article> :
null
);
const mapStateToProps = (state) => ({
article: state.reducer3.news,
})
NewsItem = connect(mapStateToProps,null)(NewsItem)
export default NewsItem;