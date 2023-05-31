import { Link } from "react-router-dom";
import { authors } from "../db";

function Home() {
    return (
        <div>
            <h1>Best Seller Authors</h1>
            {/* <ul>
                <li><Link to="/">J.K.Rowling</Link></li>
                <li><Link to="/about">J.R.R.Tolkien</Link></li>
            </ul> */}
            {authors.map((author) => (
                <li key={author.id}>
                    <Link to={`/author/${author.name}`}>{author.name}</Link>
                </li>
            ))}
        </div>
    );
    }

export default Home;