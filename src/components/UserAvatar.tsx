import Avatar from "@material-ui/core/Avatar";
import React from "react";

const UserAvatar = (user: { name: string; avatarUrl: string }) => (
  <Avatar alt={user.name} src={user.avatarUrl} />
);

export default UserAvatar;
