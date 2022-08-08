import React from "react";
import "./userCard.css";

const UserCard = ({ user }) => {
 
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img className="rounded-t-lg" src={user.picture.large} alt="" />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {user.name.title}
            {user.name.first}
            {user.name.last}({user.dob.age})
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {user.email}
            <ul>
              <li key={user.id}>
                {user.dob.age}

                {user.cell}
              </li>
            </ul>
          </p>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            MATCH NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
