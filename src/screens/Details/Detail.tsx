import { Link, Outlet, useParams } from "react-router-dom";
import { authors } from "../../db";
import React, { useState } from "react";

function Detail(){
    const { name } = useParams();

    const [bookName, setbookName] = useState("")

    const onClick = (event) => {
        setbookName(event.target.innerText)
        console.log(event.target.innerText)
    }
    
    return (
        <div>
            <h1>{name}</h1>
            <ul>
                {authors.map((author) => (
                    author.name === name ? 
                    author.books.map((book) => (
                    <li key={book}>
                        <Link to={`${book}`} onClick={onClick}>{book}</Link>
                    </li>)) : ""
                ))}
            </ul>
            <hr />
            <Outlet context={{
                nameOfBook: bookName
            }}/>
        </div>
    )
}

export default Detail;