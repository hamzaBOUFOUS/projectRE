import { useEffect, useState } from 'react';

export const useUserAuthentication = () => {

    const [loading, setLoading] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        return () => setLoading(false)
    }, [])

    return {
        loading,
        isLoggedIn,
    }
}