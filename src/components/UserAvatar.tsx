import Avatar from "@material-ui/core/Avatar";
import React from "react";
import { BASE_PATH } from "./util";

const UserAvatar = ({
  name,
  avatarUrl,
}: {
  name: string;
  avatarUrl: string;
}) => (
  <Avatar alt={name} src={avatarUrl} component="a" href={`${BASE_PATH}user`} />
);

export default UserAvatar;
