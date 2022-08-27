interface IOptions {
  minFDigits?: number
  maxFDigits?: number
}

export const toCurrency: any = (
  num: number | string,
  options?: IOptions
): string => {
  const _options: any = {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: options?.maxFDigits ? options?.maxFDigits : 2
  }
  if (typeof options?.minFDigits === 'number') {
    _options.minimumFractionDigits = options?.minFDigits
  }

  const currencyOptions: any = new Intl.NumberFormat(
    'de-DE',
    _options
  ).resolvedOptions()

  const value: string = Number(num).toLocaleString('de-DE', {
    ...currencyOptions,
    style: 'decimal'
  })

  return value.replace(/\./g, '*').replace(/,/g, '.').replace(/\*/g, ',')
}

export const getCurrencyArrFromCurrencyPairStr: any = (
  currencyPair: string
): string[] => {
  return [currencyPair.substring(0, 3), currencyPair.substring(3)]
}

export const convertStrToNumber: any = (value: string): number => {
  return Number(value.replace(/,/g, ''))
}
