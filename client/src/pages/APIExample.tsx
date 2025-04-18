import { makeStyles } from "@fluentui/react-components";
import axios from "axios";
import React from "react"
import { useQuery } from "react-query";

interface PageProps {
  children?: React.ReactNode
}


const useStyles = makeStyles({
  plotRoot: {
    height: "100%",
    width: "100%",
  }
})

const API_BASE_URL = import.meta.env.VITE_API_URL;


interface BulletItem {
  id: string,
  title: string,
}

interface Basic {
  message: string
}


const retrievePosts = async (): Promise<BulletItem[]> => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
  )
  return response.data
}

const retrieveBasicAPI = async (): Promise<Basic> => {
  const response = await axios.get(
    `${API_BASE_URL}/basic`,
  )
  return response.data
}


const APIExample: React.FC<PageProps> = (_props) => {
  const styles = useStyles()
  const { data: posts, error, isLoading } = useQuery<BulletItem[], Error>("postsData", retrievePosts);
  const { data: basic } = useQuery<Basic, Error>("basicAPI", retrieveBasicAPI);
  if (isLoading) return <div> NOT LOADED </div>
  if (error) return <div> GOT ERROR: {error.message} </div>
  if (!posts) return <div> A</div>

  return (
    <div className={styles.plotRoot}>
      <div>
        {basic?.message}
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default APIExample;
