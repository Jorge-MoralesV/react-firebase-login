import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { createUserDocument } from "../firebaseService";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context
}

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const signUp = async (email, password) => {
        const userCredencial = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredencial.user;
        await createUserDocument(user);
    }

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const logout = () => signOut(auth)

    const resetPassword = (email) => sendPasswordResetEmail(auth, email)

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe()
    }, []);

    return (
        <AuthContext.Provider value={{ signUp, login, user, logout, loading, loginWithGoogle, resetPassword }}>
            {children}
        </AuthContext.Provider>
    )
}