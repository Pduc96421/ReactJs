import { useState, useEffect } from "react";

// 1.useEffect(callback)
// - gọi callback mỗi khi component re-render
// - gọi callback sau khi component thêm element vào DOM
// 2.useEffect(callback, [])
// -  cho phép callback 1 lần sau khi component được mounted
// 3.useEffect(callback, [deps])
// -  callback sẽ được gọi lại mỗi khi deps thay đổi

// -  callback luôn được gọi sau khi conponent mounted (cả ba)
// -  cleanUp function luôn được gọi trước khi component unmounted

const tabs = ['posts', 'comments', 'albums']

const lessons = [
  {
    id: 1,
    name: "React.js",
  },
  {
    id: 2,
    name: "SPA/MPA",
  },
  {
    id: 3,
    name: "Arrow function",
  }
]

const Content = () =>  {

  const [title, setTitle] = useState('');
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState('posts');
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [avatar, setAvatar] = useState();
  const [lessonId, setlessonId] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(posts => {
        setPosts(posts);
      })
  }, [type])

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >= 200){
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleWidth);

    return () => {
      window.addEventListener('resize', handleWidth);
    }
  })

  useEffect(() => {
    return () => {
      if(avatar){
        URL.revokeObjectURL(avatar.preview)
      }
    }
  }, [avatar]);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    }

    window.addEventListener(`lesson-${lessonId}`, handleComment);

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    }

  }, [lessonId]);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);

    setAvatar(file);
  }

  return (
    <div>
      <div>
        <ul>
          {lessons.map(lesson => (
            <li
              key={lesson.id}
              style={{
                color: lessonId === lesson.id ? 'red' : '#333'
              }}
              onClick={() => setlessonId(lesson.id)}
            >
              {lesson.name}
            </li>
          ))}
        </ul>
      </div>

      <input 
        type="file"
        onChange={handlePreviewAvatar}
      />
      {avatar && (
        <img src={avatar.preview} alt="" width="80%"/>
      )}

      <h1>{width}</h1>

      {tabs.map(tab => (
        <button 
          key={tab}
          style={type === tab ? {
            color: '#fff',
            background: '#333',
          } : {}}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul> */}

      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
          }}
        > 
          Go to top
        </button>
      )}

    </div>
  )
}

export default Content;