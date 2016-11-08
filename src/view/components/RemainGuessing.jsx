import React from 'react';
import '../css/remainguessing.css'

export default class RemainGuessing extends React.Component {
    render () {
        let classNameLives = `stickman-number-of-guess-left-${this.props.remainLives}`;
        return <div className={classNameLives}/>;
    }
}