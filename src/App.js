import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Profile />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Hobbies />
      <Footer />
    </div>
  );
};

export default App;
