import tutors from './assets/tutors.json';
import { Button } from './components/Button/Button';
import { Button2 } from './components/Button2/Button';
import { TutorList } from './components/TutorList/TutorList';

export const App = () => {
  return (
    <div>
      <TutorList tutors={tutors} />
      <Button />
      <Button2 />
    </div>
  );
};
