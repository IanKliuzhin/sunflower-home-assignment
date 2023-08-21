import { CitiesList } from 'modules/Cities';
import { Filtering } from 'modules/Filtrering';

export const MainPage = () => {
  return (
    <div className="page">
      <Filtering />
      <CitiesList />
    </div>
  );
};
