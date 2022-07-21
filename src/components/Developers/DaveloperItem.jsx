export const DeveloperItem = ({ firstName, lastName, phone, city, options, isFullTime, framework }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{`${firstName} ${lastName}`}</h5>
        <p className="card-text">{options}</p>
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item">Phone: {phone}</li>
        <li className="list-group-item">City: {city}</li>
        <li className="list-group-item">Framework: {framework}</li>
        <li className="list-group-item">{isFullTime ? 'Full time' : 'Part time'}</li>
      </ul>
    </div>
  );
};
