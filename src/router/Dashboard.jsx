import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { credentials } from "../mocks/credentials";
export default function Dashboard() {
  const navigateTo = useNavigate();
  const { username, age, profilePic, email } = credentials;
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(JSON.parse(localStorage.getItem("auth")));
  }, []);

  return isLogged ? (
    <div className="Dashboard">
      <p>{username}</p>
      <img src={profilePic} />
      <p>{email}</p>
      <p>{age}</p>
      <p onClick={() => setIsLogged(false)}>Log Out</p>
    </div>
  ) : (
    navigateTo("/Login")
  );
}
