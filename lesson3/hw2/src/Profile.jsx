import React from 'react';
import moment from 'moment';

export default (props) => {
  const user = props.userData;

  const [date, month, year] = moment(user.birthDate)
    .format('DD MMM YY')
    .split(' ');
  

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
