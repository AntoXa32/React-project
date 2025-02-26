import FriendListItem from "../FiendListItems/FriendListItems";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.container}>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
}
