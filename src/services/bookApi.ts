import axios from 'axios';

interface Volume {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
}

interface Volumes {
  items: Volume[];
}

const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
});

export default {
  async getVolumes(query: string) {
    const response = await api.get<Volumes>('/volumes', {
      params: {
        q: query,
        printType: 'books',
        maxResults: 40,
        fields:
          'items(id,volumeInfo/title,volumeInfo/authors,volumeInfo/description,volumeInfo/imageLinks/thumbnail)',
      },
    });

    if (!response.data) {
      return [];
    }

    const serializedVolumes = response.data.items.map((volume) => ({
      id: volume.id,
      title: volume.volumeInfo.title,
      authors: volume.volumeInfo.authors?.join(', '),
      description: volume.volumeInfo.description,
      image: volume.volumeInfo.imageLinks?.thumbnail,
    }));

    return serializedVolumes;
  },
  async getVolume(id: string) {
    const response = await api.get<Volume>(`/volumes/${id}`);

    const volume = response.data;

    const serializedVolume = {
      id: volume.id,
      title: volume.volumeInfo.title,
      authors: volume.volumeInfo.authors?.join(', '),
      description: volume.volumeInfo.description,
      image: volume.volumeInfo.imageLinks?.thumbnail,
    };

    return serializedVolume;
  },
};
