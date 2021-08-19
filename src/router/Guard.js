import {Route, Redirect} from 'react-router-dom'

const Guard = ({ component: Component, ...rest}) => {
    const token = localStorage.getItem('token')
    return(
        <Route {...rest} render={
            (props) => {
                if(token === "123"){
                    return <Component {...props} />
                }else{
                    return <Redirect to="/" />
                }
            }
        } />
    )
}

export default Guard