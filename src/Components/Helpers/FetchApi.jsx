import React, { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";
import Spinner from "./Spinner";

const FetchApi = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    
    const fetchUser = new Promise ((resolve, reject) => { 
        setTimeout(() => {
          fetch("https://randomuser.me/api/?results=1", {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              resolve(data.results[0]);
            }).catch((err) => {
              reject(err);
            }
            );
        }, 500);
        
      }
    );
     
    useEffect(() => {
        setLoading(true);
        fetchUser.then(data => {
            setUser(data);
            setLoading(false);
           
        }).catch(err => {
            console.log(err);
        }
        );
    } , []);



    return (
      <div>
     { loading ?  <Spinner/> : <UserCard user={user}/> }
     </div>
    );
  }


export default FetchApi;
