// import logo from './logo.svg';
// import './App.css';
import React from "react";
import './Header.css';
import LOGO from "./SETTINGS_LOGO.png";
// import { ReactComponent as SVGIMG } from "./logo.svg";
import reactLogo from "./logo512.png";
function Header() {
  return (
    <header>
      <nav className="NB">
        <div className="E_CELL_LOGO"><img src={"https://s3-alpha-sig.figma.com/img/22a6/6119/0712b6f7a1118e1fffb918a6938e7ace?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kfkkyOKecgm9n38bOYEmOZ3uCK9Hanwsee3Qdj7nqBGcqQH9bS1bGoWzdJb5Vndq5ikvYkX7toUjmX6cE~CMt8BzFmQ2huQKgQRhb-RBddm6KQnQGekqDngsJDonuFf84sxjtr54XWq5LQauLbWLqK~9ff4t8FCIUFSm~PQ8zGn4PauTUtAiZhQImSiSBjgfRViiD-F-dNYCurSuoHjh3RejBIEr9DwwmnfITXrN6QEOQllUrOAEjk56URd-Qr~32o9gSF7Ap07vScDlNu9IRviUWTdLTo2bggajXf0xBXniA7nerLkoPF4LiTn8nB6YRT9ijq0ouI~LTC-lg6diKg__"} style={{height:"3rem",width:"3rem"}}/></div>
        <div className='navigators'>
            <ul>
                <li className="HOME">
                    <a className="NAVLINKS" href="#">HOME</a>
                </li>
                <li className="EVENTS">
                <a className="NAVLINKS" href="#">EVENTS</a>
                </li>
                <li className='INIZIO_LOGO'>
                <img src={LOGO} className="logo" style={{height:"2rem",width:"2rem"}}/>
                </li>
                <li>
                    <a className="NAVLINKS" href="#">TEAMS</a>
                </li>
                <li className="SP">
                  <a className="NAVLINKS" href="#">SPONSORS</a>
                </li>
                <li className='CONTACT_US'>
                    <a className="NAVLINKS" href="#">CONTACT US</a>
                </li>
            </ul>
        </div>
      </nav>
      <div className='SPONSORS'>
        <h1 className='Heading'>sponsors</h1>
        <center><p className='para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo consectetur distinctio fugiat voluptas velit exercitationem</p></center>
      </div>
    </header>
  );
}

export default Header;
