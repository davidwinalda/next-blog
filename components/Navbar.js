import dynamic from 'next/dynamic'
import Link from 'next/link'

const ThemeSwitchWithNoSSR = dynamic(
  () => import('./ThemeSwitch'), { ssr: false }
)

export default function Navbar() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
          <ThemeSwitchWithNoSSR />
          <style jsx>{`
            nav {
              display: flex;
              justify-content: space-between;
            }
            ul {
              list-style-type: none;
              padding: 0
            }
            li {
              display: inline
            }
            li:not(:first-child) {
              margin-left: 0.75rem;
            }
          `}
          </style>
        </nav>
      </header>
    </>
  )
}