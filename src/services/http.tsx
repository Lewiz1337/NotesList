import axios from 'axios';

const _apiKey = 'https://633dbdc4f2b0e623dc7a9137.mockapi.io/api/v1/todoList';

export const getAllNotes = async () => {
  return await axios.get(_apiKey);
};

export const getNoteById = async (id: string) => {
  return await axios.get(_apiKey + `/${id}`);
};

export const postNote = async (body: { title: string; text: string; tags: string[] }) => {
  const { title, text, tags } = body;
  const tagsArr: string[] = [...tags];
  text.split(' ').forEach((item) => {
    if (item[0] === '#') {
      tagsArr.push(item.slice(1));
    }
  });
  return await axios.post(_apiKey, {
    title: title,
    text: text,
    tags: Array.from(new Set(tagsArr)),
  });
};

export const deleteNote = async (id: string) => {
  return await axios.delete(_apiKey + `/${id}`);
};

export const editNote = async (
  id: string,
  body: { title: string; text: string; tags: string[] },
) => {
  const { title, text, tags } = body;
  const tagsArr: string[] = [...tags];

  text.split(' ').forEach((item) => {
    if (item[0] === '#') {
      tagsArr.push(item.slice(1));
    }
  });
  return await axios.put(_apiKey + `/${id}`, {
    title: title,
    text: text,
    tags: Array.from(new Set(tagsArr)),
  });
};
