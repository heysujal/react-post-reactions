import { IconType, PostReactions } from "./components/PostReactions"

function App() {
  const icons: IconType[]=[
  {
    src: 'https://img.icons8.com/?size=100&id=Li62CRyJSreB&format=png&color=000000',
    alt: 'link-icon'
  },
  {
    src: 'https://img.icons8.com/?size=100&id=6nc0mE9ICHsC&format=png&color=000000',
    alt: 'share-icon'
  },
  {
    src: 'https://img.icons8.com/?size=100&id=FBO05Dys9QCg&format=png&color=000000',
    alt: 'chatgpt-icon'
  },
  {
    src: 'https://img.icons8.com/?size=100&id=18515&format=png&color=000000',
    alt: 'fire-icon'
  },
]
 return <PostReactions icons={icons} className="mx-auto mt-48" iconHeight={50} iconWidth={50}/>
}

export default App


// TODO: 4 types of animations when popup happens
// TODO: animation on icons too
// 
