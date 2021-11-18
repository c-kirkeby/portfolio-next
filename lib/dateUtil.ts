export const epochToLocaleDateString = (date: string, locale: string) => {
  return new Date(parseInt(date)).toLocaleDateString(locale);
}