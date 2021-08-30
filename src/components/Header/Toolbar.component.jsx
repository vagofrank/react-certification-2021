import styled from 'styled-components';

export const Header = styled.section`
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
  position: fixed;
  width: 100%;
  z-index: 3;
  top: 4px;

  & a{ 
    font-size: .5rem;
  }

  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #fff;
  }

  & li a {
    display: block;
    padding: 20px 20px;
    border-right: 1px solid #f4f4f4;
    text-decoration: none;
  }

  & li a:hover, .menu-btn:hover {
    background-color: #f4f4f4;
  }

  & .logo {
    display: block;
    float: right;
    font-size: 2em;
    padding: 10px 20px;
    text-decoration: none;
  }


 & .menu {
    clear: both;
    max-height: 0;
    transition: max-height .2s ease-out;
  }



  & .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: left;
    padding: 28px 20px;
    position: relative;
    user-select: none;
  }

  & .menu-icon .navicon {
    display: block;
    height: 2px;
    position: relative;
    transition: background .2s ease-out;
    width: 18px;
  }

  & .menu-icon .navicon:before,
    .menu-icon .navicon:after {
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      transition: all .2s ease-out;
      width: 100%;
  }

  & .menu-icon .navicon:before {
    top: 5px;
  }

  & .menu-icon .navicon:after {
    top: -5px;
  }

  & .menu-btn {
    display: none;
  }

  & .menu-btn:checked ~ .menu {
    max-height: 240px;
  }

  & .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  & .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  & .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  & .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
    .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }`;
