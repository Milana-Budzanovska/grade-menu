import React, { useState } from 'react';

const classes = [
  { id: 1, icon: 'backpack.png', uk: '1 клас', en: 'Grade 1' },
  { id: 2, icon: 'letter.png', uk: '2 клас', en: 'Grade 2' },
  { id: 3, icon: 'rocket-pencil.png', uk: '3 клас', en: 'Grade 3' },
  { id: 4, icon: 'globe.png', uk: '4 клас', en: 'Grade 4' },
  { id: 5, icon: 'cube.png', uk: '5 клас', en: 'Grade 5' },
  { id: 6, icon: 'microscope.png', uk: '6 клас', en: 'Grade 6' },
  { id: 7, icon: 'microscope-2.png', uk: '7 клас', en: 'Grade 7' },
  { id: 8, icon: 'brain-bulb.png', uk: '8 клас', en: 'Grade 8' },
  { id: 9, icon: 'vr.png', uk: '9 клас', en: 'Grade 9' }
];

const GradeMenu: React.FC = () => {
  const [isUkr, setIsUkr] = useState(true);
  const toggleLang = () => setIsUkr(prev => !prev);

  const goToClass = (id: number) => {
    if (id === 1) {
      window.location.href = 'https://focused-lesson-demo.vercel.app/';
    } else {
      window.location.href = `/class/${id}`;
    }
  };

  return (
    <div className="grade-menu">
      <button className="lang-toggle" onClick={toggleLang}>
        {isUkr ? 'EN' : 'UA'}
      </button>
      <h1>{isUkr ? 'Почати навчання' : 'Start Learning'}</h1>
      <p>{isUkr ? 'Обери свій клас і вперед до знань!' : 'Choose your grade and start learning!'}</p>

      <div className="grid">
        {classes.map(cls => (
          <div key={cls.id} className="card" onClick={() => goToClass(cls.id)}>
            <img src={`/icons/${cls.icon}`} alt={isUkr ? cls.uk : cls.en} className="icon" />
            <div className="grade">{isUkr ? cls.uk : cls.en}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradeMenu;
