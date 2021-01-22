
import React, { Component } from 'react'
import './Accueil.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Link } from 'react-router-dom';
import moment from 'moment'

class Accueil extends Component {
    render() {

        return(
            <div className="accueil">

               <Router>
                    <>
                    <Header/>
                        <Switch>
                            <Route path="/" exact component={Form}/>
                            <Route path="/creerusager" exact component={CreerUsager}/>
                            <Route path="/creermoyen" exact component={CreerMoyen}/>
                            <Route path="/creerpreference" exact component={CreerPreference}/>
                            <Route path="/transit" exact component={Transit}/>
                            <Route path="/chemin" exact component={Chemin}/>
                            <Route path="/moyen" exact component={Moyen}/>
                        </Switch>
                        
                    </>
                </Router>

            </div>
          )
    }
}

class Form extends Component {
     
    constructor(props) {
        super(props)

        this.creerusagerClicked = this.creerusagerClicked.bind(this)
        this.creermoyenClicked = this.creermoyenClicked.bind(this)
        this.creerpreferenceClicked = this.creerpreferenceClicked.bind(this)
    }
    creerusagerClicked() {
        console.log(this.state)
        this.props.history.push("/creerusager")
     }
     creermoyenClicked() {
        console.log(this.state)
        this.props.history.push("/creermoyen")
     }
     creerpreferenceClicked() {
        console.log(this.state)
        this.props.history.push("/creerpreference")
     }

     render() {
        return (
            <div> <br /> <br /> <br /> <h1>Bienvenue dans l'application Transport-app : </h1>
                <br />  <br />  <br />  <br /> 
                 <button type="button" className="btn" onClick={this.creerusagerClicked}>Creer un usager</button>
                 <br /> <br /> <br /> 
                 <button type="button" className="btn" onClick={this.creermoyenClicked}>Creer un moyen de transport</button>
                 <br /> <br /> <br /> 
                 <button type="button" className="btn" onClick={this.creerpreferenceClicked}>Creer une préférence</button>
            </div>

        )
    }
     

}

class Header extends Component {
    render() {

        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                <a className="navbar-brand" href="http://localhost:3000"> Transport-App </a>
                <br /> <br /> <br />
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-link"><Link className="nav-link" to="">Accueil</Link></li>
                        <li className="nav-link"><Link className="nav-link" to="/transit">Stations de transit</Link></li>
                        <li className="nav-link"><Link className="nav-link" to="/chemin">Chemin le plus court</Link></li>
                        <li className="nav-link"><Link className="nav-link" to="/moyen">Moyen le plus adequat</Link></li>
                    </ul>

                </nav>
            </header>
        )
    }
}

class CreerUsager extends Component {
    
constructor(props) {
    super(props)
    this.state = {
        fonction : '' ,
        annee :  '',
        handicap :  'o'
    }

   this.handleChange = this.handleChange.bind(this)
   this.creeruClicked = this.creeruClicked.bind(this)
}

   handleChange(event) {
       console.log(this.state);
       this.setState( {
           [event.target.name]
           : event.target.value
       }
       )
   }

    creeruClicked() {
       console.log(this.state)
       this.props.history.push("/creerusager")
    }
    render() {
        return (
            <div> <h1>Veuillez saisir les données du nouvel usager : </h1>
                <br />  <br />  <br />  <br /> 
                 Fonction : <input type="text" name="fonction" value={this.state.fonction} onChange={this.handleChange} /> <br />  <br /> 
                 Année de naissance : <input type="text" name="annee" value={this.state.annee} onChange={this.handleChange} /> <br /> <br /> 
                 <label>
                 Handicap : <br /> 
                 <select name="handicap" value={this.state.handicap}  onChange={this.handleChange}>
                        <option  value="o"> Oui</option>
                        <option value="n"> Non </option>
                    </select>    <br />  <br /> 
                    </label><br /> <br /> <br /> 
                 <button type="button" className="btn" onClick={this.creeruClicked}>Enregister</button>
            </div>

        )
    }
}

class CreerMoyen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name : '' ,
            numero :  0,
            information :  ''
        }
    
       this.handleChange = this.handleChange.bind(this)
       this.creermClicked = this.creermClicked.bind(this)
    }
    
       handleChange(event) {
           console.log(this.state);
           this.setState( {
               [event.target.name]
               : event.target.value
           }
           )
       }
    
       creermClicked() {
           console.log(this.state)
           this.props.history.push("/creermoyen")
        }
        render() {
            return (
                <div> <h1>Veuillez saisir les données du nouveau moyen de transport : </h1>
                    <br />  <br />  <br />  <br /> 
                     Nom du moyen de transport : <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /> <br /> <br /> 
                     Numéro : <input type="text" name="numero" value={this.state.numero} onChange={this.handleChange} /> <br /> <br /> 
                     Information : <input type="text" name="information" value={this.state.information} onChange={this.handleChange} /> <br /> <br /> 
                     <br /> <br /> <br /> 
                     <button type="button" className="btn" onClick={this.creermClicked}>Enregister</button>
                </div>
    
            )
        }
}

class CreerPreference extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id : 0,
            name : 'taxi',
            preference : 2 
        }
    
       this.handleChange = this.handleChange.bind(this)
       this.creerpClicked = this.creerpClicked.bind(this)
    }
    
       handleChange(event) {
           console.log(this.state);
           this.setState( {
               [event.target.name]
               : event.target.value
           }
           )
       }
    
       creerpClicked() {
           console.log(this.state)
           this.props.history.push("/creerpreference")
        }
        render() {
            return (
                <div> <h1>Veuillez saisir la préférence du moyen de transport : </h1>
                    <br />  <br />  <br />  <br /> 
                    Identifiant de l'usager : <input type="text" name="id" value={this.state.id} onChange={this.handleChange} /> <br /> <br /> 
                     <br /> <br /> <br /> 
                     <label>
                     Nom du moyen de transport : <br /> 
                     <select name="name" value={this.state.name}  onChange={this.handleChange}>
                        <option  value="taxi"> Taxi</option>
                        <option value="tram"> Tram </option>
                        <option value="bus"> Bus </option>
                        <option value="covoiturage"> Covoiturage </option>
                    </select>    <br />  <br /> 
                    </label><br /> <br /> <br /> 
                     <label>
                     Préférence : <br /> 
                     <select name="preference" value={this.state.preference}  onChange={this.handleChange}>
                        <option  value="2"> Préféré</option>
                        <option value="1"> Moyen </option>
                        <option value="0"> Non préféré </option>
                    </select>    <br />  <br /> 
                    </label><br /> <br /> <br /> 
                     <button type="button" className="btn" onClick={this.creerpClicked}>Enregister</button>
                </div>
    
            )
        }
}

class Transit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name : 'taxi',
            stationd : '',
            stationa : '' 
        }
    
       this.handleChange = this.handleChange.bind(this)
       this.affichertClicked = this.affichertClicked.bind(this)
    }
    
       handleChange(event) {
           console.log(this.state);
           this.setState( {
               [event.target.name]
               : event.target.value
           }
           )
       }
    
       affichertClicked() {
           console.log(this.state)
           this.props.history.push("/transit")
        }
        render() {
            return (
                <div> <h3>Veuillez saisir les données : </h3>
                    <br />  <br />  
                     <label>
                     Nom du moyen de transport : <br /> 
                     <select name="name" value={this.state.name}  onChange={this.handleChange}>
                        <option  value="taxi"> Taxi</option>
                        <option value="tram"> Tram </option>
                        <option value="bus"> Bus </option>
                        <option value="covoiturage"> Covoiturage </option>
                    </select>    <br />  <br /> 
                    </label><br /> 
                    Station de départ : <input type="text" name="stationd" value={this.state.stationd} onChange={this.handleChange} /> <br /> <br /> 
                    Station d'arrivée : <input type="text" name="stationa" value={this.state.stationa} onChange={this.handleChange} /> <br /> <br /> 
                     <button type="button" className="btn" onClick={this.affichertClicked}>Afficher les stations de transit</button>
                     <br />  <br /> 
                     <table className="table">
                        <thead>
                            <tr>

                                <th>Moyen de transport</th>
                                <th>Station de départ</th>
                                <th>Station d'arrivée</th>
                                <th>Stations de transit</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                
                                        <tr >
                                            
                                            <td> Tram </td>
                                            <td> Station Agdal Avenue de France </td>
                                            <td> Station Madinat Al Irfane </td>
                                            <td> Station Médina Rabat - Station Ibn Sina - Station Bab Chellah - Station Sidi Mohammed Ben Abdellah - Station Nations Unies - Station Bab El Had - Station Place Al Joulane L2 - Station Tour Hassan - Station Gare de Rabat Ville - Station Hôpital Moulay Youssef</td>
                                        </tr>                          
                        </tbody>
                    </table>
                </div>
    
            )
        }

}

class Moyen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : 0,
            stationd : '',
            stationa : '' 
        }
    
       this.handleChange = this.handleChange.bind(this)
       this.affichermClicked = this.affichermClicked.bind(this)
    }
    
       handleChange(event) {
           console.log(this.state);
           this.setState( {
               [event.target.name]
               : event.target.value
           }
           )
       }
    
       affichermClicked() {
           console.log(this.state)
           this.props.history.push("/moyen")
        }
        render() {
            return (
                <div> <h3>Veuillez saisir les données : </h3>
                    <br />  <br /> 
                    Identifiant de l'usager : <input type="text" name="id" value={this.state.id} onChange={this.handleChange} /> <br /> <br /> 
                    Station de départ : <input type="text" name="stationd" value={this.state.stationd} onChange={this.handleChange} /> <br /> <br /> 
                    Station d'arrivée : <input type="text" name="stationa" value={this.state.stationa} onChange={this.handleChange} /> <br /> <br /> 
                     <button type="button" className="btn" onClick={this.affichermClicked}>Afficher le moyen le plus adequat</button>

                     <table className="table">
                        <thead>
                            <tr>
                                <th>L'id de l'usager </th>
                                <th>Station de départ</th>
                                <th>Station d'arrivée</th>
                                <th>Moyen de transport</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                
                                        <tr >
                                            <td> 3 </td>
                                            <td> Station Agdal Avenue de France </td>
                                            <td> Station Madinat Al Irfane </td>
                                            <td> Taxi </td>
                                        </tr>                          
                        </tbody>
                    </table>
                </div>
    
            )
        }
    

}

class Chemin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name : 'taxi',
            stationd : '',
            stationa : '' 
        }
    
       this.handleChange = this.handleChange.bind(this)
       this.affichercClicked = this.affichercClicked.bind(this)
    }
    
       handleChange(event) {
           console.log(this.state);
           this.setState( {
               [event.target.name]
               : event.target.value
           }
           )
       }
    
       affichercClicked() {
           console.log(this.state)
           this.props.history.push("/chemin")
        }
        render() {
            return (
                <div> <h3>Veuillez saisir les données : </h3>
                    <br />  <br /> 
                    <label>
                     Nom du moyen de transport : <br /> 
                     <select name="name" value={this.state.name}  onChange={this.handleChange}>
                        <option  value="taxi"> Taxi</option>
                        <option value="tram"> Tram </option>
                        <option value="bus"> Bus </option>
                        <option value="covoiturage"> Covoiturage </option>
                    </select>    <br />  <br /> 
                    </label><br />  
                    Station de départ : <input type="text" name="stationd" value={this.state.stationd} onChange={this.handleChange} /> <br /> <br /> 
                    Station d'arrivée : <input type="text" name="stationa" value={this.state.stationa} onChange={this.handleChange} /> <br /> <br /> 
                     <button type="button" className="btn" onClick={this.affichercClicked}>Afficher le chemin le plus court</button>
                </div>
    
            )
        }

}


export default Accueil