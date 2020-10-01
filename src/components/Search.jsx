import React, { Component } from 'react';
import './search.css'

export default class Search extends Component {
    state={output:""}
    render() {
        return (
            <div>
                <h1>NABASIRYE LOYCE</h1>
            <div className="FormSearch">
                <form>
                    <input type="text" placeholder="search here" onChange={e=>this.setState({output: e.target.value})}/>
                </form>
                <p className="paragraph-output">{this.state.output}</p>
            </div>
            </div>
        )
    }
}
