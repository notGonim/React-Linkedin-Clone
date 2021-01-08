import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './widget.css'

export const Widget = () => {
    const articles = (heading, subtitle) => {
        return (<div className="widget_article">
            <div className="widget_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widget_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>)
    }
    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            {articles("new react post", "this is a new react post")}
            {articles("angular post", "this is a new react post")}
            {articles("frontend articles", "see all the new frontend news")}
            {articles("new desgin patter", "Just try to learn new design")}

        </div>
    )
}
