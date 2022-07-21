import { DeveloperItem } from './DaveloperItem';

export const DeveloperList = ({ developersList }) => {
  return developersList.map(({ id, firstName, lastName, phone, city, options, isFullTime, framework }) => (
    <DeveloperItem
      key={id}
      firstName={firstName}
      lastName={lastName}
      phone={phone}
      city={city}
      options={options}
      isFullTime={isFullTime}
      framework={framework}
    />
  ));
};
