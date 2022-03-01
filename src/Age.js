import {useParams} from "react-router-dom";
const Age= () =>{
    const urlParams = useParams();
    return(
        <div>
            <h1>My age is {urlParams.age} </h1>
        </div>
    )
}
export default Age;