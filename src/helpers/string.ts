export const capitalizeFirstLetter: any = (string: string = ''): string => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

export const toCamelCase: any = (str: string = ''): string => {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m: any, chr: any): string => chr.toUpperCase())
}
