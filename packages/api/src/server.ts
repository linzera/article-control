import app from './app';
import Constants from 'config/constants';

app.listen(Constants.PORT, () => {
  console.log(`Server listening on port ${Constants.PORT}`);
});
