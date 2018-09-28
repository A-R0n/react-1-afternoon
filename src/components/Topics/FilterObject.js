import React, { Component } from 'react';

class FilterObject extends Component {

    constructor(){
        super();

        this.state = {
            players: [
                {
                    nickname: 'Aaron Rodgers',
                    position: "QB",
                    team: "Packers"
                },
                {
                    name: "Davante Adams",
                    postion: "WR",
                    team: "Packers"
                },
                {
                    name: "Mike Williams",
                    position: "WR",
                    super: "Chargers"
                }
            ],

            userInput: '',
            filteredPlayers: []
        }

    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterPlayers(prop) {
        var players = this.state.players;
        var filteredPlayers = [];

        for( var i = 0; i < players.length; i++){
            if(players[i].hasOwnProperty(prop) ) {
                filteredPlayers.push(players[i]);
            }
        }

        this.setState({ filteredPlayers: filteredPlayers });
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>My players</h4>
                <span className="puzzleText"> Orginial: { JSON.stringify(this.state.players, null, 10) } </span>
                <input className="inputLine" onChange={ (e)=> this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () =>  this.filterPlayers(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredPlayers, null, 10) } </span>
            </div>
        )
    }
}

export default FilterObject;