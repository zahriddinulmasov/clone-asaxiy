import { useQuery } from "react-query";

async function fetchPosts() {
  const  res  = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json()
}

export const Example = () => {
  const { data, error, isError, isLoading } = useQuery("posts", fetchPosts);

  if (isLoading) return <h1>Yuklanmoqda...</h1>;
  if (isError) return <h1>Xatolik {error.message}</h1>;
  return (
    <>
      <h1>Posts</h1>
      {data.map((post, index) => {
        return <h3 key={index}>{post.title} 11</h3>
      })}
    </>
  )
};
