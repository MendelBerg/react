import React from 'react';

export default (props) => {
  const user = props.userData;
  // const date = new Date(user.birthDate).getDate() + '';
  // const month = new Date(user.birthDate).toLocaleString('en', {
  //   month: 'short',
  // });
  // const year = new Date(user.birthDate).getFullYear().toString().substr(-2);

  return (
    <div className="profile">
      <div className="profile__name">
        {user.firstName} {user.lastName}
      </div>
      <div className="profile__birth">
        {`Was born ${new Date(user.birthDate).getDate()} ${new Date(
          user.birthDate
        ).toLocaleString('en', {
          month: 'short',
        })} ${new Date(user.birthDate)
          .getFullYear()
          .toString()
          .substr(-2)} in ${user.birthPlace}`}
      </div>
    </div>
  );
};
