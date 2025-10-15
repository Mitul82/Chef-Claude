import ReactMarkdown from 'react-markdown';

function Recepie(props) {
    return (
       <section className='suggested-recipe-container'>
            <ReactMarkdown>{ props.recipe }</ReactMarkdown>
       </section>
    );
}

export default Recepie;