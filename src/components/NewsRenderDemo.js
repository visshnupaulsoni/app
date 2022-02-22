import NewsItem from "./NewsItem";
import Button from "./Button";
import Loading from "./Loading";
import NewsItemErrorBoundary from "./error-boundaries/NewsItemsErrorBoundary";

const NewsRenderDemo =()=>{
return(
    <div>
        <Button/>
        <Loading/>
        <NewsItemErrorBoundary>
        <NewsItem/>
        </NewsItemErrorBoundary>
    </div>
)
}
export default NewsRenderDemo;