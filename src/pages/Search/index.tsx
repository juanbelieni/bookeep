import React, { useState, useEffect, ChangeEvent } from 'react';
import {
  AiOutlineBook,
  AiFillHeart,
  AiOutlineSearch,
  AiOutlineHeart,
} from 'react-icons/ai';
import { DebounceInput } from 'react-debounce-input';
import createPersistedSate from 'use-persisted-state';
import Loading from 'react-loading';
import { useTheme } from 'styled-components';

import { Container, Header, SearchBar, Volume } from './styles';
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
  const [query, setQuery] = useState('');
  const [volumes, setVolumes] = useState<VolumeData[]>([]);
  const [searching, setSearching] = useState(false);
  const [favoritedVolumes, setFavoritedVolumes] = useFavoritedVolumesState<
    string[]
  >([]);

  const theme = useTheme();

  useEffect(() => {
    if (query.length > 0) {
      setVolumes([]);
      setSearching(true);
      bookApi.getVolumes(query).then((responseVolumes) => {
        setVolumes(responseVolumes);
        setSearching(false);
      });
    } else {
      setVolumes([]);
    }
  }, [query]);

  function handleSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  function handleFavoriteVolume(id: string) {
    if (favoritedVolumes.includes(id)) {
      setFavoritedVolumes((oldFavoritedVolumes) =>
        oldFavoritedVolumes.filter((volume_id) => volume_id !== id)
      );
    } else {
      setFavoritedVolumes([...favoritedVolumes, id]);
    }
  }

  return (
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
      <SearchBar>
        <DebounceInput
          debounceTimeout={600}
          value={query}
          onChange={handleSearchInputChange}
        />
        <div id="search-icon">
          <AiOutlineSearch size={22} />
        </div>
      </SearchBar>

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
