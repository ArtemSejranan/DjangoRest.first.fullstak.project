import Eye from "../../assets/icons/Eye.png";
import { useState } from "react";
import { axiosCall, accessTokenValid, refreshTokenLS } from "../../conf/axios.js";
import {REFRESH_TOKEN_KEY, ACCESS_TOKEN_KEY} from "../../conf/common.js";

function Login(props) {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Create the submit method.
    const submit = async e => {
        e.preventDefault();
        const user = {
            'username': username,
            'password': password
        }
        const data = await axiosCall('api/token/create', user, null, "POST")
        localStorage.setItem(ACCESS_TOKEN_KEY, data.access )
        localStorage.setItem(REFRESH_TOKEN_KEY, data.refresh )
    };

    function fireSetUsername(e) {setUsername(e.target.value)}
    function fireSetPassword(e) {setPassword(e.target.value)}


    return (
        <div>
            <form className="form-group" onSubmit={submit}>
                <div>
                    <input
                        type="text"
                        id="login-name-input"
                        onCange={fireSetUsername}
                        placeholder="Никнейм или электронная почта"
                    />
                </div>
                <div>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="login-pass-input"
                        onCange={fireSetPassword}
                        className="pass-input"
                        placeholder="Пароль"
                    />
                    <img src={Eye} onClick={() => { setShowPassword(!showPassword) }} alt="" />
                </div>
                <p className='помошник'>
                    <span>Забыли пароль?</span>
                    <a className='восстановить' href='#'>Восстановить</a>
                </p>
                <button className='войти'>Войти</button>
            </form>
        </div>
    );
}

export default Login;