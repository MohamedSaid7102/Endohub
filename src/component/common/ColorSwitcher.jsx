import React, { useState } from 'react';

// ColorSwitcher Component
export const ColorSwitcher = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleShowSideBar = () => { setShowSideBar(oldState => !oldState) }

  const updateTheme = (newTheme) => {
    document.body.classList = `bg-theme pace-done bg-${newTheme}`;
  }

  return (
    <div className={`right-sidebar ${showSideBar && 'right-toggled'}`}>
      <div className="switcher-icon" onClick={toggleShowSideBar}>
        <i className="zmdi zmdi-settings zmdi-hc-spin"></i>
      </div>
      <ColorSwitcherContent updateTheme={updateTheme} />
    </div>
  );
};

// ColorSwitcherContent Component
const ColorSwitcherContent = ({ updateTheme }) => {
  return (
    <div className="right-sidebar-content">
      <GaussianTextureSection updateTheme={updateTheme} />
      <GradientBackgroundSection updateTheme={updateTheme} />
    </div>
  );
};

const GaussianTextureSection = ({ updateTheme }) => {
  const gaussianThemes = ['theme1', 'theme2', 'theme3', 'theme4', 'theme5', 'theme6'];

  return (
    <div>
      <p className="mb-0">Gaussion Texture</p>
      <hr />
      <ul className="switcher">
        {gaussianThemes.map(theme => (
          <li key={theme} id={theme} onClick={() => updateTheme(theme)}></li>
        ))}
      </ul>
    </div>
  );
};

const GradientBackgroundSection = ({ updateTheme }) => {
  const gradientThemes = ['theme7', 'theme8', 'theme9', 'theme10', 'theme11', 'theme12', 'theme13', 'theme14', 'theme15'];

  return (
    <div>
      <p className="mb-0">Gradient Background</p>
      <hr />
      <ul className="switcher">
        {gradientThemes.map(theme => (
          <li key={theme} id={theme} onClick={() => updateTheme(theme)}></li>
        ))}
      </ul>
    </div>
  );
};

