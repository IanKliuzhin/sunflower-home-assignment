import { Filtering } from 'modules/Filtrering';
import { useBoundStore } from 'store';
import { CitiesList } from './modules/Cities';
import 'App.scss';

export const App = () => {
  // zustand store needs to be initialized instantly
  // or it fails to work on first call
  useBoundStore();
  return (
    <div className="App">
      <Filtering />
      <CitiesList />
    </div>
  );
};
