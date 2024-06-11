import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <section className="profile" id="profile">
      <img src="/img/profile-illustration.png" alt="Profile" className="profile-img" />
      <div className="profile-text">
        <h2>藤井紘貴</h2>
        <p>
          こんにちは、私は藤井紘貴です。機械工学を専攻する学生として、様々な技術分野での経験を積んできました。現在はプログラミングに焦点を当て、技術分野でのキャリアを築くことを目指しています。多様なスキルセットを持ち、特に問題解決能力とクリエイティブなアプローチに自信があります。
        </p>
        <p>
          私のキャリア目標は、フリーランスのITエンジニアとして、場所にとらわれない働き方を実現し、世界中を旅しながら生活することです。技術を通じて社会に貢献し、自身のスキルを常に向上させていくことを信条としています。
        </p>
      </div>
    </section>
  );
};

export default Profile;
