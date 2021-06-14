import React from 'react';

const Expand = ({isOpen, title, children, onClick}) => {
  const btn = !isOpen 
      ? <i className="fas fa-chevron-down"></i> 
      : <i className="fas fa-chevron-up"></i>; 

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onClick}>
          {btn}
        </button>
      </div>
      <div className="expand__content" style={{display: isOpen ? 'flex' : 'none'}}>{children}</div>
    </div>
  );
};


export default Expand;
