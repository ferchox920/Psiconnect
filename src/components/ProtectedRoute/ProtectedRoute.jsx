import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"

export default function ProtectedRoute({ children, type }) {
    const user = useSelector(state => state.user.user)
	// return  user?.rol === type ? <section> {children} </section> : <Navigate to={"/"} replace />
	 return 1 === 1 ? <section> {children} </section> : <Navigate to={"/"} replace />
}