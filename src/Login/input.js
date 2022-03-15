import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
class Input extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username:"",
            password:"" 
        }
        this.changeuserName = this.changeuserName.bind(this)
        this.changePassword = this.changePassword.bind(this)
    }
    changeuserName(event){
        this.setState({username: event.target.value});
    }
    changePassword(event){
        this.setState({password: event.target.value});
    }
    render(){
        return(
            <div className="right">
                <div className="Text-Container ">
                    <h1 className="Text-input">Вход в платформу</h1>
                    <p className="Right-P">Имя пользователья <span className="Star">*</span></p>
                    <div className="Input-Container">
                        <FontAwesomeIcon icon={faUser} className="Icons" />
                        <input type="text" onChange={this.changeuserName} value={this.state.username} className="input " placeholder="Арина Соколова"></input>
                    </div>
                  
                    <p className="Right-P">Пароль <span className="Star">*</span></p>
                    <div className="Input-Container">
                        <FontAwesomeIcon icon={faLock} className="Icons" />
                        <input type="password" onChange={this.changePassword} value={this.state.password} className="input" placeholder="Введите пароль"></input>
                        <FontAwesomeIcon icon={ faEye } className="Icons" />
                    </div>
                    <div className="Checkbox">
                        <input type="checkbox"></input>
                        <p className="CheckText">Запомнить меня</p>
                    </div>
                    <Link to="/order">
                        <button type="button" className="btn btn-outline-primary btn-block button">Войти</button>
                    </Link>
                    <p className="P-button">Copyright ©Girgitton. Все права защищены</p>
                </div>
            </div>
        )
    }
}

export default Input