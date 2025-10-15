// you can even link the css file to the component instead of the html file
import './index.css';
import Header from './components/header.jsx';
import Main from './components/main.jsx';

function App() {
    return (
        <>
            <Header/>
            <Main/>
        </>
    )
}

export default App;