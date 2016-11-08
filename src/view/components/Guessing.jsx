import React from 'react';
import '../css/guessing.css';

export default class Guessing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
        aLive: true};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSubmit = props.onclick;
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit() {
        let livesRemain = this.onSubmit(this.state.value);
        this.setState({value : ''});
        if(livesRemain == 0){
            this.setState({aLive : false});
        }
    }

    render() {
        return (
            <div className="guess-zone">
                <div className="guess-zone-container">
                    <label className="guess-zone-label">New letter:</label>
                    <input type="text"
                           id="guess"
                           size="1"
                           maxLength={1}
                           placeholder="_"
                           className="guess-box"
                           value={this.state.value}
                           onChange={this.handleChange}/>
                    <button disabled={!this.state.aLive}
                        onClick={this.handleSubmit} className="submit-button">
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}