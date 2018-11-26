import React, { Component } from "react";
// import NotFound from '../images.jpg'
var ReactDOMServer = require('react-dom/server');
var HtmlToReactParser = require('html-to-react').Parser;

class Loading extends Component {
    render() {
        const html = '<p>asdasdsa <strong>asdsad </strong><span style="font-size: 24px;font-family: Impact;"><strong>AS </strong></span><span style="font-size: 12px;font-family: Impact;"><strong>haha</strong></span></p>'
        var htmlInput = '<div><h1>Title</h1><p>A paragraph</p></div>';
        var htmlToReactParser = new HtmlToReactParser();
        var reactElement = htmlToReactParser.parse(htmlInput);
        var reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);

        return (
                <div>
                    {/* <img src={NotFound} style={{width: "100vw", height: "100vh"}} /> */}
                    <p dangerouslySetInnerHTML={{__html: html}} ></p>
                </div>
        );
    }
}

export default Loading;
