'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function TireSelfCheck() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    tire_wear: '',
    tire_age: '',
    handle_vibration: '',
    road_noise: '',
    vehicle_pull: ''
  });
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors: string[] = [];

    if (!formData.tire_wear) newErrors.push('타이어 마모 정도를 선택해주세요.');
    if (!formData.tire_age) newErrors.push('타이어 교체 기간을 선택해주세요.');
    if (!formData.handle_vibration) newErrors.push('핸들 떨림 여부를 선택해주세요.');
    if (!formData.road_noise) newErrors.push('노면 소음을 선택해주세요.');
    if (!formData.vehicle_pull) newErrors.push('차량 쏠림 여부를 선택해주세요.');

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Calculate a score based on selections
      let score = 0;

      // Tire wear score (0-2)
      if (formData.tire_wear === 'good') score += 0;
      else if (formData.tire_wear === 'medium') score += 1;
      else if (formData.tire_wear === 'bad') score += 2;

      // Tire age score (0-2)
      if (formData.tire_age === '1-3') score += 0;
      else if (formData.tire_age === '4-5') score += 1;
      else if (formData.tire_age === '5+') score += 2;

      // Handle vibration score (0-2)
      if (formData.handle_vibration === 'none') score += 0;
      else if (formData.handle_vibration === 'high_speed') score += 1;
      else if (formData.handle_vibration === 'always') score += 2;

      // Road noise score (0-2)
      if (formData.road_noise === 'none') score += 0;
      else if (formData.road_noise === 'moderate') score += 1;
      else if (formData.road_noise === 'severe') score += 2;

      // Vehicle pull score (0-1)
      if (formData.vehicle_pull === 'none') score += 0;
      else if (formData.vehicle_pull === 'yes') score += 1;

      // Store the result in localStorage
      const result = {
        score,
        maxScore: 9,
        formData
      };

      if (typeof window !== 'undefined') {
        localStorage.setItem('tireCheckResult', JSON.stringify(result));
      }

      // Navigate to results page
      router.push('/self_test/tire_self_check/results');
    }
  };

  const getSelectedClass = (name: string, value: string) => {
    return formData[name as keyof typeof formData] === value
      ? 'bg-blue-100 border-blue-500'
      : '';
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
          <h1 className="font-16">타이어 자가 점검</h1>
        </div>
      </header>

      <section className="main_bx tire_review_form_area mt-50 mb-60">
        <form className="tire_review_form_area" onSubmit={(e) => e.preventDefault()}>
          <div className="p-20 font-14 pretendard_Bold">1. 타이어 마모 정도를 체크해 주세요</div>
          <div className="p-10-20-30 select_img">
            <label htmlFor="tire_self_01-01" className={getSelectedClass('tire_wear', 'good')}>
              <Image
                src="/images/tire_self_01.png"
                width={218}
                height={218}
                alt="Tire wear level 1"
              />
            </label>
            <label htmlFor="tire_self_01-02" className={getSelectedClass('tire_wear', 'medium')}>
              <Image
                src="/images/tire_self_02.png"
                width={218}
                height={218}
                alt="Tire wear level 2"
              />
            </label>
            <label htmlFor="tire_self_01-03" className={getSelectedClass('tire_wear', 'bad')}>
              <Image
                src="/images/tire_self_03.png"
                width={218}
                height={218}
                alt="Tire wear level 3"
              />
            </label>
            <input
              type="radio"
              id="tire_self_01-01"
              name="tire_wear"
              value="good"
              className="hidden"
              onChange={handleChange}
              checked={formData.tire_wear === 'good'}
            />
            <input
              type="radio"
              id="tire_self_01-02"
              name="tire_wear"
              value="medium"
              className="hidden"
              onChange={handleChange}
              checked={formData.tire_wear === 'medium'}
            />
            <input
              type="radio"
              id="tire_self_01-03"
              name="tire_wear"
              value="bad"
              className="hidden"
              onChange={handleChange}
              checked={formData.tire_wear === 'bad'}
            />
          </div>

          <div className="p-20 font-14 pretendard_Bold">2. 타이어 교체 하신지는 얼마나 되셨나요?</div>
          <div className="p-10-20-30 tire_self_check_item">
            <label
              htmlFor="tire_self_02-01"
              className={`flex justify-center items-center ${getSelectedClass('tire_age', '1-3')}`}
            >1년 ~ 3년</label>
            <label
              htmlFor="tire_self_02-02"
              className={`flex justify-center items-center ${getSelectedClass('tire_age', '4-5')}`}
            >4 ~ 5년</label>
            <label
              htmlFor="tire_self_02-03"
              className={`flex justify-center items-center ${getSelectedClass('tire_age', '5+')}`}
            >5년 이상</label>
            <input
              type="radio"
              id="tire_self_02-01"
              name="tire_age"
              value="1-3"
              className="hidden"
              onChange={handleChange}
              checked={formData.tire_age === '1-3'}
            />
            <input
              type="radio"
              id="tire_self_02-02"
              name="tire_age"
              value="4-5"
              className="hidden"
              onChange={handleChange}
              checked={formData.tire_age === '4-5'}
            />
            <input
              type="radio"
              id="tire_self_02-03"
              name="tire_age"
              value="5+"
              className="hidden"
              onChange={handleChange}
              checked={formData.tire_age === '5+'}
            />
          </div>

          <div className="p-20 font-14 pretendard_Bold">3. 주행 중 핸들 떨림이 느껴지시나요?</div>
          <div className="p-10-20-30 tire_self_check_item">
            <label
              htmlFor="tire_self_03-01"
              className={`flex justify-center items-center ${getSelectedClass('handle_vibration', 'none')}`}
            >안 느껴짐</label>
            <label
              htmlFor="tire_self_03-02"
              className={`flex justify-center items-center ${getSelectedClass('handle_vibration', 'high_speed')}`}
            >고속주행시</label>
            <label
              htmlFor="tire_self_03-03"
              className={`flex justify-center items-center ${getSelectedClass('handle_vibration', 'always')}`}
            >항상</label>
            <input
              type="radio"
              id="tire_self_03-01"
              name="handle_vibration"
              value="none"
              className="hidden"
              onChange={handleChange}
              checked={formData.handle_vibration === 'none'}
            />
            <input
              type="radio"
              id="tire_self_03-02"
              name="handle_vibration"
              value="high_speed"
              className="hidden"
              onChange={handleChange}
              checked={formData.handle_vibration === 'high_speed'}
            />
            <input
              type="radio"
              id="tire_self_03-03"
              name="handle_vibration"
              value="always"
              className="hidden"
              onChange={handleChange}
              checked={formData.handle_vibration === 'always'}
            />
          </div>

          <div className="p-20 font-14 pretendard_Bold">4. 타이어로 인한 노면 소음은 어떤가요?</div>
          <div className="p-10-20-30 tire_self_check_item">
            <label
              htmlFor="tire_self_04-01"
              className={`flex justify-center items-center ${getSelectedClass('road_noise', 'none')}`}
            >없음</label>
            <label
              htmlFor="tire_self_04-02"
              className={`flex justify-center items-center ${getSelectedClass('road_noise', 'moderate')}`}
            >적당히</label>
            <label
              htmlFor="tire_self_04-03"
              className={`flex justify-center items-center ${getSelectedClass('road_noise', 'severe')}`}
            >심함</label>
            <input
              type="radio"
              id="tire_self_04-01"
              name="road_noise"
              value="none"
              className="hidden"
              onChange={handleChange}
              checked={formData.road_noise === 'none'}
            />
            <input
              type="radio"
              id="tire_self_04-02"
              name="road_noise"
              value="moderate"
              className="hidden"
              onChange={handleChange}
              checked={formData.road_noise === 'moderate'}
            />
            <input
              type="radio"
              id="tire_self_04-03"
              name="road_noise"
              value="severe"
              className="hidden"
              onChange={handleChange}
              checked={formData.road_noise === 'severe'}
            />
          </div>

          <div className="p-20 font-14 pretendard_Bold">5. 평지 주행 중 차량이 한쪽으로 쏠리나요?</div>
          <div className="p-10-20-30 tire_self_check_item pb-100">
            <label
              htmlFor="tire_self_05-01"
              className={`flex justify-center items-center ${getSelectedClass('vehicle_pull', 'none')}`}
            >쏠리지 않음</label>
            <label
              htmlFor="tire_self_05-02"
              className={`flex justify-center items-center ${getSelectedClass('vehicle_pull', 'yes')}`}
            >쏠림</label>
            <input
              type="radio"
              id="tire_self_05-01"
              name="vehicle_pull"
              value="none"
              className="hidden"
              onChange={handleChange}
              checked={formData.vehicle_pull === 'none'}
            />
            <input
              type="radio"
              id="tire_self_05-02"
              name="vehicle_pull"
              value="yes"
              className="hidden"
              onChange={handleChange}
              checked={formData.vehicle_pull === 'yes'}
            />
          </div>

          {errors.length > 0 && (
            <div className="p-20">
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {errors.map((error, index) => (
                  <p key={index} className="text-sm">{error}</p>
                ))}
              </div>
            </div>
          )}

          <div className="info_item bottom_btn">
            <button
              type="button"
              className="btn font-18 ico_fff btn_none"
              onClick={handleSubmit}
            >
              결과보기
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
