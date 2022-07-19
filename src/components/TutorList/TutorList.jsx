import PropTypes from 'prop-types';

import { Tutor } from '../Tutor/Tutor';

export const TutorList = ({ tutors }) => {
  return tutors.map(tutor => (
    <Tutor
      key={tutor.email + tutor.phone}
      city={tutor.city}
      email={tutor.email}
      avatar={tutor.avatar}
      firstName={tutor.firstName}
      lastName={tutor.lastName}
      phone={tutor.phone}
    />
  ));
};

// [ PropTypes.arrayOf
//   { PropTypes.shape
//     "firstName": "Мария",
//     "lastName": "Руденко",
//     "phone": "+38(097) 448 73 11",
//     "city": "Полтава",
//     "avatar": "https://images.unsplash.com/photo-1658200685735-074e6bb53fcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
//   },
// ]

TutorList.propTypes = {
  tutors: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      city: PropTypes.string.isRequired,
    }),
  ),
};
