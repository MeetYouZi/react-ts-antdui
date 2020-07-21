import React from 'react'

interface IHelloProps {
  name?: string
  message?: string
}

// const Hello = (props: IHelloProps) => {
//   return <h2>{props.message}</h2>
// }

// FC 是 FunctionComponent 别名
const Hello: React.FC<IHelloProps> = (props) =>{
return <h2>{props.name}-{props.message}</h2>
}

// defaultProps: 默认值
Hello.defaultProps = {
  name: '小柚',
  message: 'hello word'
}

export default Hello
