import React from 'react';
import styled from 'styled-components';

function Header(props) {
    return (
      <Nav>
        <Logo src="/images/logo.svg" />
        <NavMenu>
          <a href="#">
            <img src="/images/home-icon.svg" />
            <span>Home</span>
          </a>
          <a href="#">
            <img src="/images/search-icon.svg" />
            <span>search</span>
          </a>
          <a href="#">
            <img src="/images/watchlist-icon.svg" />
            <span>watchlist</span>
          </a>
          <a href="#">
            <img src="/images/original-icon.svg" />
            <span>original</span>
          </a>
          <a href="#">
            <img src="/images/movie-icon.svg" />
            <span>movies</span>
          </a>
          <a href="#">
            <img src="/images/series-icon.svg" />
            <span>series</span>
          </a>
        </NavMenu>
        <UserImg src="https://yt3.ggpht.com/yti/APfAmoFrMXCZ5lDPc4Hex2VrpC69vV79zdBBNUsS1CTLXsI=s88-c-k-c0x00ffffff-no-rj-mo" />
      </Nav>
    );
}

export default Header;

const Nav = styled.nav`
  background: #090b13;
  height:70px;
  padding:0 36px;
  display:flex;
  align-items:center;
  overflow-x:hidden;
 
`;
const Logo = styled.img`
    width:80px;

`
const NavMenu = styled.nav`
    display:flex;
    flex:1;
    margin-left:25px;
    a {
        display:flex;
        padding:0 12px;
        img {
            height:20px;
        }
        span {
            font-size:13px;
            letter-spacing: 1.24px;
            position:relative;
            &:after {
                content:"";
                height:2px;
                background:white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform:scaleX(0);
                transition:all 250ms linear 0s;
                transform-origin:left center;
            }
        }
        &:hover {
            span:after{
                opacity:1;
                transform: scaleX(1);
            }
        }
    }
`;
const UserImg = styled.img`
    height:40px;
    border-radius:50%;
`