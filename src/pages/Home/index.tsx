import React from 'react';
import { AiOutlineBook, AiFillHeart, AiOutlineSearch } from 'react-icons/ai';
import {Link} from 'react-router-dom'

import { Container, Header, Main } from './styles';

const Home = () => (
  <Container>
    <Header>
      <div id="header-logo">
        <AiOutlineBook size={30} />
        <h1>Bookeep</h1>
      </div>
      <a id="header-link" href="/favorites">
        <span>Favorite books</span>
        <AiFillHeart size={25} />
      </a>
    </Header>
    <Main>
      <h2>A place to find and save your favorite books.</h2>
      <Link to="/search" id="main-button">
        <span>
          <AiOutlineSearch size={30} />
        </span>
        <strong>Search a book</strong>
      </Link>
    </Main>
  </Container>
);

export default Home;
