export function dateFromTimestamp(timestamp: string): string{
  let dateFormat = new Date(parseInt(timestamp));
  return `${dateFormat.getDate()}.${dateFormat.getMonth()+1}.${dateFormat.getFullYear()}`
}
