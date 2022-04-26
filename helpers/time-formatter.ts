export default function formatter(date: string) {
  return (
    date &&
    new Intl.DateTimeFormat('de-DE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(Date.parse(date))
  );
}
