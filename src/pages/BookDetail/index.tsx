import React, { useEffect, useState } from 'react';
import { AiOutlineSearch, AiFillHeart } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import Loading from 'react-loading';
import bookApi from '../../services/bookApi';
import Header from '../../components/Header';
import { Container } from './styles';
import { useTheme } from 'styled-components';

interface VolumeData {
  id: string;
  title: string;
  authors?: string;
  description: string;
  imageLarge?: string;
  industryIdentifiers: [
    {
      type: string;
      identifier: string;
    }
  ];
  publisher: string;
  publishedDate: string;
}

const BookDetail = () => {
  const { id } = useParams();
  const theme = useTheme();

  const [volume, setVolume] = useState<VolumeData>();
  const authorsArray = volume?.authors?.split(', ') || [volume?.authors];

  useEffect(() => {
    bookApi.getVolume(id).then((volume) => setVolume(volume));
  }, [id]);

  return (
    <Container>
      <Header>
        <div className={'header-nav'}>
          <Link className="header-link" to="/search">
            <span>Search</span>
            <AiOutlineSearch size={25} />
          </Link>
          <Link className="header-link" to="/favorite">
            <span>Favorite books</span>
            <AiFillHeart size={25} />
          </Link>
        </div>
      </Header>
      {!volume ? (
        <div id="loading">
          <Loading type="spin" color={theme.primary} height={45} width={45} />
        </div>
      ) : (
        <div className="container">
          <div className={'tile'}>
            <img src={volume?.imageLarge} alt="volume" />
          </div>
          <div className={'tile'}>
            <h1 className={'title'}>{volume?.title}</h1>
            <p
              className={'description'}
              dangerouslySetInnerHTML={{ __html: volume?.description }}
            ></p>
            <p className={'authors'}>
              The author{authorsArray.length > 1 ? 's are' : ' is'}{' '}
              {volume?.authors}
            </p>
            <p className={'publisher'}>Published by: {volume?.publisher}</p>
            <p className={'publish-date'}>
              Published on: {new Date(volume?.publishedDate).toDateString()}
            </p>
            <p>Industry Identifiers: </p>
            <ul className={'isbn-list'}>
              {volume?.industryIdentifiers.map((industryIdentifier, index) => (
                <li className={'isbn-item'} key={index}>
                  {industryIdentifier.type}: {industryIdentifier.identifier}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Container>
  );
};

export default BookDetail;
