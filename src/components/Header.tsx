import { Link, useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate()
    const onAboutclick = () => {
        navigate("/about")
    }

    const onHomeclick = () => {
        navigate("/")
    }

    return (
        <header>
            <ul>
                <li onClick={onHomeclick}>Home</li>
                <li onClick={onAboutclick}>About</li>
            </ul>
        </header>
    )
}

export default Header;