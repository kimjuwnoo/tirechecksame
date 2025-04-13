'use client';

import { useState } from 'react';

export default function SelectTirePage() {
  const [frontWidth, setFrontWidth] = useState('');
  const [frontRatio, setFrontRatio] = useState('');
  const [frontInch, setFrontInch] = useState('');

  const widthOptions = ['195', '205', '215', '225', '235', '245', '255', '265', '275'];
  const ratioOptions = ['30', '35', '40', '45', '50', '55', '60', '65', '70'];
  const inchOptions = ['15', '16', '17', '18', '19', '20', '21', '22'];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold text-center mb-4">타이어 선택</h2>
      <p className="text-center text-sm mb-6">
        교체를 희망하는 <strong>타이어 사이즈</strong>와 <strong>교체 수량</strong>을 입력해 주세요<br />
        <span className="text-xs text-blue-500">※ 앞타이어와 뒷타이어의 사이즈는 다를 수 있습니다.</span>
      </p>

      <div className="flex justify-center mb-6">
        <img src="/images/tire-size-guide.png" alt="타이어 이미지" className="w-64" />
      </div>

      {/* 앞 타이어 */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">앞 타이어</h3>
        <div className="grid grid-cols-3 gap-4">
          <select value={frontWidth} onChange={e => setFrontWidth(e.target.value)} className="border p-2 rounded">
            <option value="">단면폭</option>
            {widthOptions.map(w => <option key={w} value={w}>{w}</option>)}
          </select>

          <select value={frontRatio} onChange={e => setFrontRatio(e.target.value)} className="border p-2 rounded">
            <option value="">편평비</option>
            {ratioOptions.map(r => <option key={r} value={r}>{r}</option>)}
          </select>

          <select value={frontInch} onChange={e => setFrontInch(e.target.value)} className="border p-2 rounded">
            <option value="">휠사이즈</option>
            {inchOptions.map(i => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>
      </div>

      {/* 다음 버튼 */}
      <div className="text-center mt-6">
        <button
          disabled={!(frontWidth && frontRatio && frontInch)}
          className={`px-6 py-2 rounded text-white font-bold ${
            frontWidth && frontRatio && frontInch ? 'bg-blue-600' : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          다음
        </button>
      </div>
    </div>
  );
}
