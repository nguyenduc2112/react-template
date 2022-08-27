interface IParamsItemObj {
  [key: string]: boolean
}

export const css: any = (...params: (string | IParamsItemObj)[]): string => {
  const classes: string[] = []

  for (const [, value] of Object.entries(params)) {
    if (typeof value === 'string' && value) {
      classes.push(value)
      continue
    }

    if (typeof value === 'object') {
      const list: any = Object.entries(value)

      list.forEach((item: any): void => {
        const [className, isShow]: any = item

        if (isShow) {
          classes.push(className)
        }
      })
    }
  }

  return classes.join(' ')
}
