import React, {Component} from 'react';
import data from './data';

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            property: data,
            index: 0
        }
    }
    previousPage = () => {
        this.setState({
            index: this.state.index === 0 ? this.state.index = 24 : this.state.index - 1
        })
    }
    nextPage = () => {
        this.setState({
            index: this.state.index === 24 ? this.state.index = 0 : this.state.index + 1
}) 
        console.log(this.nextPage);
    }
    render() {
        return (    
    <div className="body">
               <header className="App-header">
       <div className="employee"> 
         <div className="margin">
          <h2>{this.state.property[this.state.index].id + ' / 25'}</h2>
          <h1>{this.state.property[this.state.index].name.first + " " + this.state.property[this.state.index].name.last}</h1>
          <h3>{`From:  ` + this.state.property[this.state.index].city + ", " + this.state.property[this.state.index].country}</h3>
          <h3>Job Title: {this.state.property[this.state.index].title}</h3>
          <h3>Employer: {this.state.property[this.state.index].employer}</h3>
          <h3 className="fav">Favorite Movies:
              <p>1. {this.state.property[this.state.index].favoriteMovies[0]}</p>
              <p>2. {this.state.property[this.state.index].favoriteMovies[1]}</p>
              <p>3. {this.state.property[this.state.index].favoriteMovies[2]}</p>
          </h3>
        </div>  
       </div>
       
       <div className="buttons">      
            <div className="btns" onClick= {this.previousPage}>{"< Previous"}</div>
            <div className="btns" onClick= {this.nextPage}>{"Next >"}</div>
       </div>
      </header>
    </div>
        );
    }
}
export default Slide;