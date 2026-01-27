import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // StrictMode 는 개발모드에서만 동작하는 잠재적 문제를 미리 잡아주는 검사도구.
  // 예) 오래된 API를 쓴다거나, 오래된 LifeCycle 메서드, 잘못된 위치의 side-effect 등
  // UI 에 영향을 주지 않으며 실제 운영환경에서는 무시된다. 별도로 제거할 필요 X
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>
)
