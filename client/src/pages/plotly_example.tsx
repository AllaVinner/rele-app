import { makeStyles } from "@fluentui/react-components";
import React from "react"
import Plot from "react-plotly.js"

interface PageProps {
  children?: React.ReactNode
}


const useStyles = makeStyles({
  plotRoot: {
    height: "100%",
    width: "100%",
  }
})


const Page: React.FC<PageProps> = (_props) => {
  const styles = useStyles()
  return (
    <div className={styles.plotRoot}>
      Hello
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'red' },
          },
          { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
        ]}
        layout={{ autosize: true, title: { text: 'A Fancy Plot' } }}
      />

    </div>
  )
}


export default Page;
