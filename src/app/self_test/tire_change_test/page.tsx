'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

// Define types for Slider props
interface SliderProps {
  value?: number[];
  defaultValue?: number[];
  onValueChange?: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

// Local slider component
const Slider: React.FC<SliderProps> = ({
  value,
  defaultValue = [0],
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  className = ""
}) => {
  const [internalValue, setInternalValue] = useState<number[]>(defaultValue);
  const actualValue = value || internalValue;

  const handleChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percentage = (e.clientX - rect.left) / rect.width;
    const newValue = min + percentage * (max - min);
    const steppedValue = Math.round(newValue / step) * step;

    // Clamp value to min-max range
    const clampedValue = Math.max(min, Math.min(max, steppedValue));

    if (onValueChange) {
      onValueChange([clampedValue]);
    } else {
      setInternalValue([clampedValue]);
    }
  };

  return (
    <div
      className={`relative h-2 w-full bg-gray-200 rounded-full my-8 ${className}`}
      onClick={handleChange}
    >
      <div
        className="absolute h-full bg-blue-500 rounded-full"
        style={{ width: `${((actualValue[0] - min) / (max - min)) * 100}%` }}
      />
      <div
        className="absolute w-5 h-5 bg-white rounded-full border-2 border-blue-500 -top-1.5 -ml-2.5"
        style={{ left: `${((actualValue[0] - min) / (max - min)) * 100}%` }}
      />
    </div>
  );
};

export default function TireChangeCalculator() {
  const [treadwear, setTreadwear] = useState<string>('');
  const [annualDistance, setAnnualDistance] = useState<number>(0);
  const [currentDistance, setCurrentDistance] = useState<number>(0);
  const [showResults, setShowResults] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  // Calculate remaining distance and replacement date
  const calculateResults = () => {
    if (!treadwear) {
      setErrors(['마모지수(트레드웨어)를 선택해주세요.']);
      return;
    }

    if (annualDistance <= 0) {
      setErrors(['연평균 이동 거리를 설정해주세요.']);
      return;
    }

    setErrors([]);

    // Show the results section
    setShowResults(true);

    // Scroll to the results section
    setTimeout(() => {
      const resultsElement = document.querySelector('.tire_test_result');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Calculate the remaining life of the tire based on treadwear, annual distance, and current distance
  const calculateRemainingDistance = () => {
    if (!treadwear || annualDistance <= 0) return 0;

    // Simplified formula:
    // Average tire life = Treadwear rating × 100 (in miles)
    // Convert to km and adjust based on current distance
    const treadwearNumber = parseInt(treadwear);
    const totalLifeKm = treadwearNumber * 160; // Approximate conversion of 100 miles to km
    const remainingKm = Math.max(0, totalLifeKm - currentDistance);

    return Math.round(remainingKm);
  };

  // Calculate the estimated replacement date
  const calculateReplacementDate = () => {
    if (!treadwear || annualDistance <= 0) return '';

    const remainingKm = calculateRemainingDistance();

    if (remainingKm <= 0) {
      return '즉시 교체 필요';
    }

    // Calculate days until replacement
    const daysUntil = Math.round((remainingKm / annualDistance) * 365);

    // Create a date object for the future date
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + daysUntil);

    // Format the date as YYYY-MM-DD
    const year = futureDate.getFullYear();
    const month = String(futureDate.getMonth() + 1).padStart(2, '0');
    const day = String(futureDate.getDate()).padStart(2, '0');

    return `${year}년 ${month}월 ${day}일 (${daysUntil}일 후)`;
  };

  return (
    <div id="wrap" className="bg-wh">
      <header>
        <div id="header">
          <div className="btn_back">
            <Link href="/">
              <button type="button">
                <ChevronLeft />
              </button>
            </Link>
          </div>
          <h1 className="font-16">타이어 교체 거리 계산</h1>
        </div>
      </header>

      <section className="main_bx tire_review_form_area mt-50 mb-60">
        <form className="tire_review_form_area" onSubmit={(e) => e.preventDefault()}>
          <div className="p-20 font-14 pretendard_Bold">1. 타이어 마모지수(트레드웨어)를 선택해 주세요</div>
          <div className="p-10-20-30 tire_change_item">
            <select
              className="select_car"
              value={treadwear}
              onChange={(e) => setTreadwear(e.target.value)}
            >
              <option value="">마모지수(트레드웨어) 선택</option>
              <option value="320">320</option>
              <option value="330">330</option>
              <option value="340">340</option>
              <option value="350">350</option>
              <option value="360">360</option>
              <option value="370">370</option>
              <option value="380">380</option>
              <option value="390">390</option>
              <option value="400">400</option>
              <option value="420">420</option>
              <option value="440">440</option>
              <option value="460">460</option>
              <option value="480">480</option>
              <option value="500">500</option>
              <option value="520">520</option>
              <option value="540">540</option>
              <option value="560">560</option>
              <option value="580">580</option>
              <option value="600">600</option>
              <option value="620">620</option>
              <option value="640">640</option>
              <option value="660">660</option>
              <option value="680">680</option>
              <option value="700">700</option>
              <option value="720">720</option>
              <option value="740">740</option>
              <option value="760">760</option>
              <option value="780">780</option>
              <option value="800">800</option>
            </select>
          </div>

          <div className="p-20 font-14 pretendard_Bold">2. 연평균 이동 거리를 선택해 주세요</div>
          <div className="p-20-20-30 tire_change_item">
            <div className="slider">
              <div className="range">
                <span
                  className="setyear font-12"
                  style={{ transform: `translateX(${(annualDistance / 50000) * 100}%)` }}
                >{annualDistance.toLocaleString()} km</span>
              </div>
              <Slider
                value={[annualDistance]}
                max={50000}
                step={1000}
                onValueChange={(values) => setAnnualDistance(values[0])}
              />
            </div>
            <div className="length_area font-12 ico_999">
              <span className="min">0km</span>
              <span className="max">50,000km</span>
            </div>
          </div>

          <div className="p-20 font-14 pretendard_Bold">3. 타이어 교체 후 지금까지 이동 거리</div>
          <div className="p-20 tire_change_item">
            <div className="slider">
              <div className="range">
                <span
                  className="setyear font-12"
                  style={{ transform: `translateX(${(currentDistance / 50000) * 100}%)` }}
                >{currentDistance.toLocaleString()} km</span>
              </div>
              <Slider
                value={[currentDistance]}
                max={50000}
                step={1000}
                onValueChange={(values) => setCurrentDistance(values[0])}
              />
            </div>
            <div className="length_area font-12 ico_999 pb-100">
              <span className="min">0km</span>
              <span className="max">50,000km</span>
            </div>
          </div>

          {errors.length > 0 && (
            <div className="p-20">
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {errors.map((error, i) => (
                  <p key={`error-${i}`} className="text-sm">{error}</p>
                ))}
              </div>
            </div>
          )}

          <div className="info_item bottom_btn">
            <button
              type="button"
              className="btn font-18 ico_fff btn_none"
              onClick={calculateResults}
            >결과보기</button>
          </div>
        </form>

        {/* This section is shown when results are available */}
        <section
          className="tire_test_result"
          style={{ visibility: showResults ? 'visible' : 'hidden' }}
        >
          <div className="text_result_title_area p-20">
            <h5 className="font-16 pretendard_Bold">테스트 결과</h5>
          </div>
          <div className="result_tire_change_content">
            <span className="result_title font-14">
              남은거리 : <strong className="num_font_mdm">{calculateRemainingDistance().toLocaleString()} km</strong>
            </span>
            <span className="result_title font-14">
              타이어 교체 일시 : <strong className="num_font_mdm">{calculateReplacementDate()}</strong>
            </span>
            <div className="result_range_area">
              <div className="range_body">
                <div
                  className="result_range_fin range_value_num font-12"
                  style={{
                    left: `${Math.min(100, (currentDistance / (parseInt(treadwear) * 160 || 1)) * 100)}%`
                  }}
                >
                  {currentDistance.toLocaleString()} km
                  <br />
                  <i className="bi bi-caret-down-fill font-14" />
                </div>
              </div>
            </div>
            <div className="length_area font-12 ico_414042 pb-12">
              <span className="min">0km</span>
              <span className="max">{treadwear ? (parseInt(treadwear) * 160).toLocaleString() : 0} km</span>
            </div>
          </div>
          <span className="ico_999 font-12 p-10-20 d-block">※ 본 결과는 실제와 다를 수 있습니다.</span>
        </section>
      </section>
    </div>
  );
}
