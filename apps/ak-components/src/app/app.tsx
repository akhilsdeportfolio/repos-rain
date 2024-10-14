// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import {hello} from '@ak-monorepo-web/hello';

export function App() {
  return (
    <div>
      <NxWelcome title={hello()} />
      <div/>
    </div>
  );
}

export default App;
