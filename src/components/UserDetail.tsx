import React from "react";
import { UserModel } from "../shared/User";

export interface UserDetailProp {
  user: UserModel;
}
const UserDetail: React.FC<UserDetailProp> = ({ user }: UserDetailProp) => {
  return (
    <div className="row">
      <div className="col-sm">{user.id}</div>
      <div className="col-sm">{user.name}</div>
      <div className="col-sm">{user.email}</div>
    </div>
  );
};

export default UserDetail;
