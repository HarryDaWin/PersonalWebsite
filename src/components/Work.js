import React from 'react';

function work({ photo, title, companyName, companyDate, description, skills }) {
  return (
    <div className="work-item">
      
      <div className='work-content'>
        <h3>{title}</h3>
        {companyName && <h4 className="company-name">{companyName}</h4>}
        {companyDate && <h4 className="company-date">{companyDate}</h4>}
        {description && <p className="description">{description}</p>}
        {skills && (
            <p className="skills">{skills ? skills : null}</p>
        )}
      </div>
      <img src = {photo} alt = "WorkPhoto" className='work-photo'></img>
      

    </div>
  );
}

export default work;
