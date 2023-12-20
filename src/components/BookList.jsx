import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";

function BookList() {
  const [data, setData] = useState([]);
  const [searchItem,setSearchItem] = useState('')

  useEffect(() => {
    axios
      .get(`https://reactnd-books-api.udacity.com/books`, {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => {
        setData(res.data.books);
      })
      .catch((err) => {
        console.log("Status Code: " + err.response.status);
        if (err.response.status === 404) {
          console.log("Website not found");
        } else {
          console.log(err);
        }
      });
  }, []);

  const filterBook = data.filter((item) =>
    item.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="search">
          <div className="search-img">
            <img
              src="https://imgs.search.brave.com/eAkBP1NL6penAfZFCrl2Dg_56vb2TkjnNE8eCcKhGnE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMTQ5LzE0OTg1/Mi5wbmc"
              alt=""
            />
          </div>
          <div className="search-input">
            <input
              className="search-btn"
              type="text"
              placeholder="Search books..."
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              
            />
          </div>
        </div>
        <div className="main-container-flex" >
      <div className="main-container">
        {filterBook.map((item) => {
          return (
            <div className="book-container" key={item.id}>
              <div className="flex">
                <img
                  className="book-img"
                  src={item.imageLinks.smallThumbnail}
                  alt=""
                ></img>
              </div>

              <div className="book-details">
                <h4 className="">{item.title}</h4>
                
                <h3> Rating : ⭐{item.averageRating ? item.averageRating : "4.5"}{"  Free"}</h3>
                
                <span> Written by: {item.authors[0]}{item.authors.length>1? ` and ${item.authors[1]}`: ""} </span>
            
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
}

export default BookList;
