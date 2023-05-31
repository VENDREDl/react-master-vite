import { Outlet, useNavigate, useOutletContext, useParams } from "react-router-dom";

interface DetailContext {
    nameOfBook: string;
}

function BookDetail(){
    const { nameOfBook } = useOutletContext<DetailContext>();
    const navigate = useNavigate()

    const onChaptersClick = () => {
        navigate("chapters")
    }

    const onCharactersClick = () => {
        navigate("characters")
    }

    return (
        <div>
            {nameOfBook != "" ? 
            <div>
                <h2>{nameOfBook}</h2>
                <p onClick={onChaptersClick}>Chapters</p>
                <p onClick={onCharactersClick}>Characters</p>
            </div> : ""
            }
            <Outlet />
        </div>
    )
}

export default BookDetail;