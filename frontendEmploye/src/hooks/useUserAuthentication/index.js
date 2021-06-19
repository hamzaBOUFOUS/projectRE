import { useCallback, useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import history from '../../histore'
export const useUserAuthentication = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(useSelector(
        (state) => state.users.isLoggedIn));
    const [loading, setLoading] = useState();
    const token = window.localStorage.getItem('tokenUser');
    
    const fetchUser = useCallback(() => {
        if(token){
            setIsLoggedIn(true);
            history.push("/");
        }else{
            setIsLoggedIn(false);
            history.push('/login');
        }
    }, [token, isLoggedIn]);
    useEffect(() => {
        if (isLoggedIn === false) {
            fetchUser()
        }
        return () => setLoading(false)
    }, [fetchUser])

    return {
        loading,
        isLoggedIn,
        setIsLoggedIn,
        fetchUser,
    }
}