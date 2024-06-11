import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = {
    programmingLanguages: ["Python", "JavaScript", "HTML", "CSS"],
    mechanicalEngineering: ["CAD設計", "3Dモデリング", "シミュレーション"],
    languages: ["日本語（ネイティブ）", "英語（流暢）"],
  };

  return (
    <section className="skills" id="skills">
      <h2>スキル</h2>
      <div className="skills-section">
        <h3>プログラミング言語</h3>
        <p>{skills.programmingLanguages.join(", ")}</p>
      </div>
      <div className="skills-section">
        <h3>機械工学に関するスキル</h3>
        <p>{skills.mechanicalEngineering.join(", ")}</p>
      </div>
      <div className="skills-section">
        <h3>言語</h3>
        <p>{skills.languages.join(", ")}</p>
      </div>
    </section>
  );
};

export default Skills;
