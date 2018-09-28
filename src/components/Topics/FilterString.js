import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            squad: ['McCray', 'Troy', 'Kraick', 'Kory', 'Shook', 'Dono', 'Ron', 'Hayden', 'Kirk', 'Tawwwd', 'Team5', 'Melvin'],
            userInput: '',
            filterdSquad: []
        };
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterSquad(userInput) {
        var squad = this.state.squad;
        var filteredSquad = [];

    for (var i = 0; i < squad.length; i++){
        if( squad[i].includes(userInput) ) {
            filteredSquad.push(squad[i]);
        }
    }
    this.setState({ filteredSquad: filteredSquad });
    }
    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"> My dudes: { JSON.stringify(this.state.names, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterSquad(this.state.userInput) }> Filter </button>
                <span className= "resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredSquad, null, 10) }</span>
            </div>
        )
    }
}

export default FilterString;