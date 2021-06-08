import React from 'react';

export default (props) => {
  const user = props.userData;
  const date = user.birthDate.getDate();
  const month = user.birthDate.toLocaleString('en', {
    month: 'short',
  });
  const year = user.birthDate.getFullYear().toString().substr(-2);

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
