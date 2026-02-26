import { Children, createContext, useState } from "react";

export const AuthValContext = createContext(null);

export const AuthContext = ({ Children }) => {
    const [auth, setAuth] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    return (
        <AuthValContext.Provider
        value={{ auth, setAuth, loading, setLoading, error, setError }}
        >
            {Children}
        </AuthValContext.Provider>
    );
};