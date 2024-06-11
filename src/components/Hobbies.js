import React from 'react';
import './Hobbies.css';

const hobbies = [
  {
    hobby: "サイクリング",
    description: "大学時代にサイクリングサークルを立ち上げ、週末には仲間と共に遠出を楽しんでいます。自然の中でリフレッシュしながら、健康を維持することができる最高のアクティビティです。",
  },
  {
    hobby: "アウトドア活動",
    description: "キャンプやハイキングなど、自然の中での活動が好きです。新しい場所を探索し、自然の美しさを堪能することで、日常のストレスを解消しています。",
  },
  {
    hobby: "写真撮影",
    description: "風景や自然を撮影することが趣味で、旅行先で撮った写真をSNSでシェアしています。写真を通じて、自分の視点を他の人と共有することが楽しみです。",
  },
];

const Hobbies = () => {
  return (
    <section className="hobbies" id="hobbies">
      <h2>趣味・興味</h2>
      <div className="hobby-list">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-item">
            <h3>{hobby.hobby}</h3>
            <p>{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
