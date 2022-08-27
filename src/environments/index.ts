import { environments as development } from './development'
import { environments as production } from './production'

import { Environemt } from './environment'

interface ListENV {
  development: Environemt
  production: Environemt
}

const currentEnv: string = process.env.REACT_APP_ENV || 'production'

const listEnv: ListENV | any = { development, production }

export const env: Environemt = listEnv[currentEnv]
