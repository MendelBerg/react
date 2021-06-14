import React from 'react';

const Expand = ({isOpen, title, children, onClick}) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onClick}>{
          !isOpen 
            ? <i className="fas fa-chevron-down"></i> 
            : <i className="fas fa-chevron-up"></i>
        }</button>
      </div>
      {!isOpen ? null : <div className="expand__content">{children}</div>}
    </div>
  );
};


export default Expand;
