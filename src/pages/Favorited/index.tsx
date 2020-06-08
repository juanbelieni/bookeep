import React, { useState, useEffect } from 'react';
import { AiFillHeart, AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';
import createPersistedSate from 'use-persisted-state';
import Loading from 'react-loading';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import { Container, Volume } from './styles';
import bookApi from 'services/bookApi';

const useFavoritedVolumesState = createPersistedSate('favorited-volumes');

interface VolumeData {
  id: string;
  title: string;
  authors?: string;
  description: string;
  image?: string;
}

const Search = () => {
  const [volumes, setVolumes] = useState<VolumeData[]>([]);
  const [searching, setSearching] = useState(false);
  const [favoritedVolumes, setFavoritedVolumes] = useFavoritedVolumesState<
    string[]
  >([]);

  const theme = useTheme();

  useEffect(() => {
    setSearching(true);
    Promise.all(
      favoritedVolumes.map((favoritedVolume) =>
        bookApi.getVolume(favoritedVolume)
      )
    ).then((unsortedVolumes) => {
      const sortedVolumes = unsortedVolumes.sort((a, b) => {
        if (a.title === b.title) {
          return 0;
        }
        return a.title > b.title ? 1 : -1;
      });
      setVolumes(sortedVolumes);
      setSearching(false);
    });
  }, [favoritedVolumes]);

  function handleFavoriteVolume(id: string) {
    if (favoritedVolumes.includes(id)) {
      setFavoritedVolumes((oldFavoritedVolumes) =>
        oldFavoritedVolumes.filter((volumeId) => volumeId !== id)
      );
    } else {
      setFavoritedVolumes([...favoritedVolumes, id]);
    }
  }

  return (
    <Container>
      <Header>
        <Link id="header-link" to="/search">
          <span>Search</span>
          <AiOutlineSearch size={25} />
        </Link>
      </Header>

      <h1>Favorited books</h1>

      {searching ? (
        <div id="loading">
          <Loading type="spin" color={theme.primary} height={45} width={45} />
        </div>
      ) : (
        volumes.map((volume) => (
          <Volume key={volume.id}>
            <img
              src={
                volume.image ||
                'https://booksforphysicists.com/static/cover-not-available.f94fb02e99a0.png'
              }
              alt="volume"
            />
            <div className="volume-info">
              <div className="volume-header">
                <h1>{volume.title}</h1>
                {favoritedVolumes.includes(volume.id) ? (
                  <AiFillHeart
                    size={25}
                    onClick={() => handleFavoriteVolume(volume.id)}
                  />
                ) : (
                  <AiOutlineHeart
                    size={25}
                    onClick={() => handleFavoriteVolume(volume.id)}
                  />
                )}
              </div>
              <h2>{volume.authors}</h2>
              <p>{volume.description}</p>
            </div>
          </Volume>
        ))
      )}
    </Container>
  );
};

export default Search;
