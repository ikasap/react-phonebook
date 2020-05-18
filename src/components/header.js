import React from 'react'

export const Header = (props) => <div className="ui fixed inverted menu">
    <div className="ui container">
        <div className="header item"><img className="logo" src="/images/logo.png" alt={props.Title} />{props.Title}</div>
    </div>
</div>