import db from './db';

export const getPosts = async () => {
  const data = await db.post.findMany();
  return data;
};
