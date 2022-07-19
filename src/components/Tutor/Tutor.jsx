import PropTypes from 'prop-types';
import './Tutor.css';

const isLoading = false;
const generateColor = () => {
  return Math.random() > 0.5 ? 'red' : 'blue';
};

export const Tutor = ({ firstName, lastName, phone, avatar, city, email }) => {
  return (
    <div className="card" style={{ borderRadius: '10px', opacity: isLoading ? '0.5' : '1' }}>
      <img src={avatar} className="card-img-top" alt="avatar" />
      <div className="card-body">
        <h5 className="card-title">{`${firstName} ${lastName}`}</h5>
        <p className="card-text" style={{ color: generateColor() }}>
          Phone: {phone}
        </p>
        <p className="card-text">Email: {email}</p>
        <p className="card-text">City: {city}</p>

        <button type="button" className="btn btn-primary">
          Chat
        </button>
      </div>
    </div>
  );
};

Tutor.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  city: PropTypes.string.isRequired,
};
