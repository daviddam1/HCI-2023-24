interface Post {
  userID: number,
  id: number,
  title: string,
  body: string,
}

const fetchPostById = async (id: number): Promise<Post> => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const post: Post = await response.json();
    return post;
  } catch (error) {
    throw error;
  }
};


const fetchPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const posts = await response.json();
    return posts;
  } catch (error) {
    throw error;
  }
};

export {
  fetchPostById,
  fetchPosts
}
