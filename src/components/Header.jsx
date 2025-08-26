import styles from './styles/Header.module.css';

function Header() {

  return (
    <>
      <header style={styles}>
        <h1>Diagnosify</h1>
        <a href="/">Home</a>
      </header>
    </>
  )
}

export default Header