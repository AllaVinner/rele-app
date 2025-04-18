import React from "react"

interface IntroductionProps {
  children?: React.ReactNode
}


const Introduction: React.FC<IntroductionProps> = (_props) => {
  return (
    <div>
      Hello
    </div>
  )
}


export default Introduction;

