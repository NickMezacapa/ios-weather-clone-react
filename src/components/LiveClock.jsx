import Clock from 'react-live-clock';

export default function LiveClock() {
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

  return (
    <Clock format={'h:mm'} ticking={true} />
  )
}
