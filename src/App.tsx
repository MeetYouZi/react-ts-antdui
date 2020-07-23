import React from 'react'
import Hello from './components/Hello'
import LikeButton from './components/LikeButton'
import useURLLoader from './hooks/useURLLoader'
import Button, {ButtonType, ButtonSize} from './components/Button/button'

interface IHelloProps {
  name?: string
  message?: string
}

interface IThemeProps {
  [key: string]: {color: string; background: string;}
}

const themes: IThemeProps = {
  'light': {
    color: '#000',
    background: '#eee'
  },
  'dark': {
    color: '#fff',
    background: '#333'
  }
}

// 创建 useContext 以便子组件使用
export const ThemeContext = React.createContext(themes.light)

const App: React.FC = () => {
  // 自定义 Hooks
  const [data, loading] = useURLLoader('http://baidu.com')

  // as 类型变量
  const dataResult = data as IHelloProps
  console.log(dataResult, 'dataResult')

  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <header className="App-header">
          <Hello/>
          <Button btnType={ButtonType.Primary} size={ButtonSize.Small}> hello </Button>
          <Button btnType={ButtonType.Link} href="http://www.baidu.com"> hello </Button>
          <LikeButton></LikeButton>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </header>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
