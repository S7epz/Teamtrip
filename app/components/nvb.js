import Link from 'next/link';
import { FaBeer } from 'react-icons/fa';



const Navbar = () => {
  return (
    <>
    <nav>
      <ul>
      <li className='icon'>
        <Link href="./">
          <FaBeer/>
        </Link>
        </li>
        <div className='center'> 
          <li>
          <Link href="/" className='link'>
              Home
            </Link>
          </li>
          <li>
            <Link href="./altro" className='link'>
              Altro
            </Link>
          </li>
          <li>
            <Link href="contatti" className='link'>
            Contatti
            </Link>
          </li>
        </div>
        <li>
          <Link href="./sign-in">
            Sign in
          </Link>
        </li>
        <li>
          <Link href="./sign-up">
            Sign up
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
          
          display: inline;
        }
        li a{
          color: white;
          text-decoration: none;
          font-weight: normal;
          
          
          
        }
        a:hover.link{
          background-color: rgba(128, 128, 128, 0.7);
        }
        a:active.link{
          background-color: rgba(128, 128, 128, 0.5);
          
        }
        .icon{
          padding-top: 15px;
          margin-right: auto;
        }
        .center{
          display: flex;
          flex-grow: 1;
          justify-content: center;
        }
        
        `}
      </style>
    </nav>

    </>
    
  )
}

export default Navbar;