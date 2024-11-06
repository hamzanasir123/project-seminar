import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <Link href={"/HomePage"} id='Link'>
        Lets Start
      </Link>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #Link {
    align-items: center;
    background-color: transparent;
    color: #64748b;
    cursor: pointer;
    display: flex;
    font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5;
    text-decoration: none;
    text-transform: uppercase;
    outline: 0;
    border: 0;
    padding: 1rem;
  }

  #Link:before {
    background-color: #fff;
    content: "";
    display: inline-block;
    height: 1px;
    margin-right: 10px;
    transition: all .42s cubic-bezier(.25,.8,.25,1);
    width: 0;
  }

  #Link:hover:before {
    background-color: #64748b;
    width: 3rem;
  }`;

export default Button;
