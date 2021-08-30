import React,{ useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/fontawesome-free-solid'

function SearchBar(props){

    const [textToFind, setTextToFind] = useState('');

    const handleChange = (event) => {
        setTextToFind(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.handleFormSubmit(textToFind);
    }

    return (
        <div style={{marginTop: "8px"}}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="videoSearch" className="displayed">Video Search&nbsp;</label>
                    <input onChange={handleChange} name='videoSearch' type="text" value={textToFind} className="videoSearch"/>
                    <i className="displayed"><FontAwesomeIcon icon={faSearch}/></i>
                </div>
            </form>
        </div>
    )
    
}

export default SearchBar;