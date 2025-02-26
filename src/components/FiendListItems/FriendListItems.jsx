import clsx from "clsx";
import css from "./FriendListItems.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const statusClx = clsx(css.text, isOnline ? css.isOnline : css.isOffline);

  return (
    <div className={css.container}>
      <img className={css.image} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={statusClx}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
