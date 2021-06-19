import { useCallback, useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import history from '../../histore'
export const useUserAuthentication = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(useSelector(
        (state) => state.users.isLoggedIn));
    const [loading, setLoading] = useState();
    const token = window.localStorage.getItem('token');
    
    const fetchUser = useCallback(() => {
        if(token){
            setIsLoggedIn(true);
            history.push("/");
        }else{
            history.push('/login');
        }
    }, [token]);
    useEffect(() => {
        fetchUser()
        return () => setLoading(false)
    }, [fetchUser])

    return {
        loading,
        isLoggedIn,
    }
}