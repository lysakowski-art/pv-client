import React from 'react';
import './CookieModal.scss';
const CookieModal = ({setIsOpen,isOpen}) => {
    const handleClick = () =>{
        setIsOpen(!isOpen);
    }
    return ( 
        <div className="cookie_info_cnt">
            <p className="cookie_info_content">
            Informujemy, że ta strona korzysta z plików cookies. Odwiedzając naszą stronę bez dokonania zmian ustawień swojej przeglądarki, wyrażasz zgodę na wykorzystanie przez nas plików cookies w celu ułatwienia korzystania z serwisu.   
            </p>
            <button className="cookie_info_button" onClick={handleClick}>
                Zamknij
            </button>
        </div>
     );
}
 
export default CookieModal;