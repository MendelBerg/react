import React from 'react';

export default (props) => {
  const user = props.userData;
  const date = new Date(user.birthDate).getDate();
  const month = new Date(user.birthDate).toLocaleString('en', {
    month: 'short',
  });
  const year = +new Date(user.birthDate).getFullYear().toString().substr(-2);
  console.log(date);
  console.log(month);
  console.log(year);

  return (
    <div className="profile">
      <div className="profile__name">
        {user.firstNam} {user.lastNam}
      </div>
      <div className="profile__birth">
        {`Was born ${date} ${month} ${year} in ${user.birthPlace}`}
      </div>
    </div>
  );
};
