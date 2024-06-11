import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Uber配達情報スクレイピング",
    description: "過去のUber配達情報をスクレイピングし、データ分析を行うプロジェクトです。Pythonを使用してデータを収集し、解析と可視化を行いました。これにより、配達パターンや効率の向上に関する貴重なインサイトを得ることができました。",
    technologies: ["Python"],
    link: "#",
    image: "/img/project1.jpg"
  },
  {
    title: "ToDoアプリ",
    description: "シンプルかつ直感的なタスク管理アプリです。JavaScriptとReactを用いて開発し、タスクの追加、削除、完了状態の管理ができます。ユーザーフレンドリーなインターフェースと効率的なタスク管理を提供します。",
    technologies: ["JavaScript", "React"],
    link: "#",
    image: "/img/project2.jpg"
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>プロジェクト・作品</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>使用技術: {project.technologies.join(", ")}</p>
              <a href={project.link}>プロジェクトリンク</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
