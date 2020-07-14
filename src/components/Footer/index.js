import React from 'react';
import {Query} from '@apollo/react-components';
import FOOTER_QUERY from '../../queries/footer/footer'
import ReactHtmlParser from 'react-html-parser'

const Footer = () => {
    return ( 
        <>
        <footer>
            <Query query={FOOTER_QUERY}>
                {({loading, error, data})=> {
                    if (loading) return "Loading..."
                    if (error) return `Error!: ${error.message}`
                    const {components} = data
                    return (
                    <>
                    {
                        components.map(el=>(
                            <div>
                                {ReactHtmlParser(el.content)}
                            </div>
                        ))
                    }
                    </> 
                    )
                }}
            </Query>
        </footer>
        </>
     );
}
 
export default Footer;