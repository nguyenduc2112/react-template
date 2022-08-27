import { BackgroundTasks } from 'components/BackgroundTasks'

import s from './style.module.scss'

function App(): JSX.Element {
  return (
    <div className={s.app}>
      <BackgroundTasks />

      <p>Hello duck )))</p>
    </div>
  )
}

export default App
