import css from './FriendList.module.css';

export function FriendListItem({ status, avatar, name }) {
  return (
    <li className={css.item}>
      <span className={status ? css.online : css.offline}></span>
      <img
        className={css.avatar}
        src={avatar}
        alt={name + '`s avatar'}
        width="50"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
}
