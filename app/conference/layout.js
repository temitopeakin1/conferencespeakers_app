import style from './styles.css'

export default function ConferenceLayout({ children }) {
  return (
    <>
      <header style={style.header}>Tech Conference Dymystified</header>
      <section>{children}</section>
    </>
  )
}
