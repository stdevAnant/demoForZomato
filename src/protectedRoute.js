import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import auth from './authHelper'

export const ProtectedRoute = ({component:Component,...rest}) => {
    return(
        <Route
        {...rest}
        render = {props => {
            if(auth.hasLoggedIn){
                return <Component {...props}/>;            
            }
            else{
                return <Redirect 
                to={
                    {
                        pathname:'/',
                        state : {
                            from:props.location
                        }
                    }
                }/>
            }
        }}
        />
    )
}