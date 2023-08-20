import { Filtering } from 'modules/Filtrering';
import { CitiesList } from './modules/Cities';
import 'App.scss';

export const App = () => {
  return (
    <div className="App">
      <Filtering />
      <CitiesList />
    </div>
  );
};
