import { useState } from 'react'
import './App.css'

function App() {
  const [mood, setMood] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState('');

  // 以下の関数に処理を追加していきましょう
  const getTodayMessage = () => {
    // ステップ2: 条件に合わせたメッセージが出力されるようにしてください
    //           気分（mood）が'challenge'、時間（time）が'short'という条件する
    if (mood === 'challenge' && time === 'short') {
      setResult('短い時間で一歩目を踏み出して、課題や試験に手をつけよう！');
    } else {
      setResult('自分のペースで学習を楽しみましょう！');
    }
  };

  const reset = () => {
    setResult('');
    setTime('');
    setMood('');
  };

  return (
    <div className="app-container">
      <h1>今日頑張るあなたへのメッセージ</h1>

      {result === '' ? (
        <>
          <div className="question-block">
            <p>今日はどんな気分？</p>
            <div className="choices">
              <label className={`choice-label ${mood === 'challenge' ? 'selected' : ''}`}>
                <input type="radio" name="mood" value="challenge" className="choice-input" onChange={() => setMood('challenge')} />
                チャレンジしたい
              </label>
              <label className={`choice-label ${mood === 'review' ? 'selected' : ''}`}>
                <input type="radio" name="mood" value="review" className="choice-input" onChange={() => setMood('review')} />
                復習したい
              </label>
              <label className={`choice-label ${mood === 'relax' ? 'selected' : ''}`}>
                <input type="radio" name="mood" value="relax" className="choice-input" onChange={() => setMood('relax')} />
                リラックスしたい
              </label>
            </div>
          </div>

          <div className="question-block">
            <p>学習タイムはどれくらい？</p>
            <div className="choices">
              <label className={`choice-label ${time === 'short' ? 'selected' : ''}`}>
                <input type="radio" name="time" value="short" className="choice-input" onChange={() => setTime('short')} />
                サクッと集中（30分未満）
              </label>
              <label className={`choice-label ${time === 'long' ? 'selected' : ''}`}>
                <input type="radio" name="time" value="long" className="choice-input" onChange={() => setTime('long')} />
                じっくり習得（30分以上）
              </label>
            </div>
          </div>

          <button className="primary-button" onClick={getTodayMessage}>メッセージを受け取る</button>
        </>
      ) : (
        <>
          <div className="result-card">
            <img src="/images/result-bg.png" alt="result-image" className="result-bg" />
            <div className="result-message">{result}</div>
          </div>
          
          <button className="secondary-button" onClick={reset}>もう一度試す</button>
        </>
      )}
    </div>
  );
}

export default App;
