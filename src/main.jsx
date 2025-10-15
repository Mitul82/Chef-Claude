import ReactDom from 'react-dom/client';
import App from './app.jsx';

const root = ReactDom.createRoot(document.getElementById('root'));

function Page() {
    return (
        <App/>
    );
}

root.render(
    <Page/>
);