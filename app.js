const Reviews = () => {
    return (
        <div>
            <h3>Reviews</h3>
            <h4>1,281</h4>
        </div>
    )
};

const AverageRating = () => {
    return (
        <div>
            <h3>Average Rating</h3>
            <h4>4.6</h4>
        </div>
    )
};

const SentimentAnalysis = () => {
    return (
        <div>
            <h3>Sentiment Analysis</h3>
            <ul>
                <li>960</li>
                <li>122</li>
                <li>321</li>
            </ul>
        </div>
    )
};

const WebsiteVisitors = () => {
    return (
        <div>
            <h3>Website Visitors</h3>
            <h4>821</h4>
        </div>
    )
};

const Sidebar = () => {
    return (
        <div>
            <ul>
                <li>Dashboard</li>
                <li>Widget</li>
                <li>Reviews</li>
                <li>Customers</li>
                <li>Online Analysis</li>
                <li>Settings</li>
            </ul>
        </div>
    )
};

class App extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />
                <Reviews />
                <AverageRating />
                <SentimentAnalysis />
                <WebsiteVisitors />
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById("root"))