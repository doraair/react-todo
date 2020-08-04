import React, { useState, useEffect } from "react";
import { UserModel } from "../shared/User";
import UserDetail from "../components/UserDetail";
const User = () => {
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    const getUsers = async (): Promise<UserModel[]> => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/"
      );
      let data: UserModel[] = await response.json();

      setUsers(data);
      console.log(data);
      return data;
    };

    getUsers();
  }, []);

  const displayUserName = users.map((user) => {
    return <UserDetail user={user} />;
  });

  return <div className="container">{displayUserName}</div>;
};

export default User;
