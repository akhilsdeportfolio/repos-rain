// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Ui } from '@ak-monorepo-web/ui';
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import {hello} from '@ak-monorepo-web/hello';
import { phonenumber } from '@ak-monorepo-web/phonenumber';
import { utils } from '@ak-monorepo-web/utils';

export function App() {
  return (
    <div>
      <NxWelcome title={hello()+phonenumber()+utils()} />
      <Ui/>
      <div/>
    </div>
  );
}

export default App;
