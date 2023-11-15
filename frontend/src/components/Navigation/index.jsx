import {Outlet, Link} from 'react-router-dom'
import styles from '.style.scss' 

export default function Navigation(){
    return(
        <div>
            <h2>
                nav
            </h2>

            <Outlet/>
        </div>
    )
}