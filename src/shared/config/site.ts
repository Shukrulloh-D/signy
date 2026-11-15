export const SITE = {
  name: 'Signy',
  phones: ['0 800 750 643', '+380 44 334 56 43', '+380 44 338 86 43'],
  email: 'infosmartsign@smarttender.biz',
  address: 'пр-т Миколы Бажана, 14 А, Киев, 02072',
  facebook: 'https://www.facebook.com/',
  appUrl: 'https://app.signy.example/login',
}

export function phoneHref(phone: string): string {
  return 'tel:' + phone.replace(/[^\d+]/g, '')
}
