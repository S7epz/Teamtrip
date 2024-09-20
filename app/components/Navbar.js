import Link from 'next/link';
import altro from '../altro/page.js'
import { FaBeer } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav>
      <ul>
      <li className='icon'>
          <FaBeer/>
        </li>
        <li>
        <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="./altro">
            Altro
          </Link>
        </li>
        <li>
          <Link href="contatti">
          Contatti
          </Link>
        </li>
      </ul>
      <style>{`
        nav{
          background: #333;
          padding: 0.2rem;
          border-radius: 25px;
        }
        ul{
          display: flex;
          justify-content: space-between;
          align-items: center;
          list-style-type: none;

          
        }
        li{
          color: white;
          margin-right: 15px;
          margin-left: -15px;
          display: inline;
        }
        li a{
          color: white;
          text-decoration: none;
          font-weight: normal;
          
          padding: 8px;
          padding-top: 3px;
          padding-bottom: 3px;
          border-radius: 15px;
        }
        a:hover{
          background-color: lightblue;
        }
        .icon{
          margin-right: auto;
        }
        `}
      </style>
    </nav>

    //1 2 6 7
    
  )
}

export default Navbar;