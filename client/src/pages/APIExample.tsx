import { Combobox, makeStyles, Option, Label, SelectionEvents, OptionOnSelectData } from "@fluentui/react-components";
import axios from "axios";
import React, { useState } from "react"
import { useQuery, UseQueryResult } from "react-query";

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

const retrieveBasicAPI = async (name: string): Promise<Basic> => {
  const response = await axios.get(
    `${API_BASE_URL}/basic/${name}`,
  )
  return response.data
}


function useBasic(basicName: string): UseQueryResult<Basic> {
  return useQuery({
    queryKey: ["basic", basicName],
    queryFn: () => retrieveBasicAPI(basicName),
    enabled: !!basicName,
  })
}


const APIExample: React.FC<PageProps> = (_props) => {
  const options = ["Cat", "Dog", "Ferret", "Fish", "Hamster", "Snake"];
  const [basicName, setName] = useState(options[0])
  const styles = useStyles()
  const { data: posts, error, isLoading } = useQuery<BulletItem[], Error>("postsData", retrievePosts);
  const { data: basic } = useBasic(basicName)
  const onOptionSelect = (_ev: SelectionEvents, data: OptionOnSelectData) => {
    setName(data.selectedOptions[0])
  }
  if (isLoading) return <div> NOT LOADED </div>
  if (error) return <div> GOT ERROR: {error.message} </div>
  if (!posts) return <div> A</div>

  return (
    <div className={styles.plotRoot}>
      <div>
        <Label>From Webpage</Label>
        <ul>
          {posts.filter((_p, i) => i < 4).map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <Label> Static From Server </Label>
        {basic?.message}
      </div>
      <div>
        <Combobox
          placeholder="Select an animal" value={basicName} onOptionSelect={onOptionSelect}
        >
          {options.map((option) => (
            <Option key={option}>
              {option}
            </Option>
          ))}
        </Combobox>
      </div>
    </div>
  )
}

export default APIExample;
