import { useState } from 'react'
import './App.css'
import { ColorSwitcher, LoginPage, Sidebar, SignUpPage, StatsCard, TopbarHeader } from './component'

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebarVisibility = () => { setShowSidebar(oldState => !oldState) }

  return (
    <>
      <div id='wrapper' className={`${!showSidebar && 'toggled'}`}>
        <ColorSwitcher />
        <TopbarHeader toggleSidebarVisibility={toggleSidebarVisibility} />
        <Sidebar showSidebar={showSidebar} toggleSidebarVisibility={toggleSidebarVisibility} />

        <div class="content-wrapper">
          <div class="container-fluid">
            <StatsCard />
            <LoginPage />
            <SignUpPage />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
