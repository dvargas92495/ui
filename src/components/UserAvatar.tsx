import Avatar from "@mui/material/Avatar";
import React from "react";

const UserAvatar = ({
  name,
  avatarUrl,
}: {
  name: string;
  avatarUrl: string;
}) => (
  <Avatar alt={name} src={avatarUrl} component="a" href={`/user`} />
);

export default UserAvatar;
