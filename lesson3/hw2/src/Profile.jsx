import React from 'react';

export default (props) => {
  const user = props.userData;
  const birthDate = new Date(user.birthDate);

  const date = birthDate.getDate();
  const month = birthDate.toLocaleString('en', {
    month: 'short',
  });
  const year = birthDate.getFullYear().toString().substr(-2);

  return (
    <div className="profile">
      <div className="profile__name">
        {user.firstName} {user.lastName}
      </div>
      <div className="profile__birth">
        {`Was born ${date} ${month} ${year} in ${user.birthPlace}`}
      </div>
    </div>
  );
};
