import { useRouteError } from "react-router-dom"


export const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return(
        <div>
            <h1> Oops! An Error has occured. </h1>
            {error && <p>{error.data}</p>}
            <NavLink to="/"> Go Home </NavLink>
        </div>
    )
}