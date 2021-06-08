import React from 'react';

// const getDate = (date) => date.getDate();
// const getMonth = (date) =>
//   date.toLocaleString('en', {
//     month: 'short',
//   });
// const getYear = (date) => date.getFullYear().toString().substr(-2);

// const getTimeItem = (time, date) => {
//   if (time === 'date') return new Date(date).getDate();
//   if (time === 'month')
//     return new Date(date).toLocaleString('en', {
//       month: 'short',
//     });
//   return new Date(date).getFullYear().toString().substr(-2);
// };

export default (props) => {
  const user = props.userData;
  return (
    <div className="profile">
      <div className="profile__name">
        {user.firstName} {user.lastName}
      </div>
      <div className="profile__birth">
        {`Was born ${new Date(user.birthDate).getDate()} 
        ${new Date(user.birthDate).toLocaleString('en', {
          month: 'short',
        })} 
        ${new Date(user.birthDate).getFullYear().toString().substr(-2)} 
        in ${user.birthPlace}`}
      </div>
    </div>
  );
};
