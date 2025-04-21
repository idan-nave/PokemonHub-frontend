import { HomePage } from '@/pages/Home/HomePage';
import { checkCorsOptions } from '@/api/optionsApi';
import { useEffect } from 'react'

const App = () => {

  useEffect(() => {
    checkCorsOptions();
  }, []);
  return <HomePage />;
};

export default App;