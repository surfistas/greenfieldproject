import React from 'react'
import Header from './maincomponnent/header.jsx'
import Body from    './maincomponnent/body.jsx'

export default class Project extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Body/>
            </div>
        )
    }
}
