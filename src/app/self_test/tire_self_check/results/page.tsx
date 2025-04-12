'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

interface TireCheckResult {
  score: number;
  maxScore: number;
  formData: {
    tire_wear: string;
    tire_age: string;
    handle_vibration: string;
    road_noise: string;
    vehicle_pull: string;
  };
}

export default function TireCheckResults() {
  const [result, setResult] = useState<TireCheckResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve the results from localStorage
    try {
      const storedResult = localStorage.getItem('tireCheckResult');
      if (storedResult) {
        setResult(JSON.parse(storedResult));
      }
    } catch (error) {
      console.error('Failed to parse result:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const getConditionText = () => {
    if (!result) return '결과를 불러올 수 없습니다.';

    const { score, maxScore } = result;
    const percentage = (score / maxScore) * 100;

    if (percentage < 30) {
      return '양호';
    } else if (percentage < 60) {
      return '점검 필요';
    } else {
      return '교체 필요';
    }
  };

  const getConditionColor = () => {
    if (!result) return 'text-gray-500';

    const { score, maxScore } = result;
    const percentage = (score / maxScore) * 100;

    if (percentage < 30) {
      return 'text-green-500';
    } else if (percentage < 60) {
      return 'text-yellow-500';
    } else {
      return 'text-red-500';
    }
  };

  return (
    <div id="wrap" className="bg-wh">
      <header>
        <div id="header">
          <div className="btn_back">
            <Link href="/self_test/tire_self_check">
              <button type="button">
                <ChevronLeft />
              </button>
            </Link>
          </div>
          <h1 className="font-16">타이어 자가 점검 결과</h1>
        </div>
      </header>

      <section className="main_bx tire_review_form_area mt-50 mb-60">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <p className="mb-2">결과를 불러오는 중...</p>
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500 mx-auto"></div>
            </div>
          </div>
        ) : !result ? (
          <div className="p-20 text-center">
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-8 rounded">
              <p className="text-lg font-bold mb-2">결과를 찾을 수 없습니다</p>
              <p className="mb-4">타이어 자가 점검을 다시 진행해주세요.</p>
              <Link
                href="/self_test/tire_self_check"
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              >
                다시 테스트하기
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="p-20">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold text-center mb-6">타이어 상태 점검 결과</h2>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">점수:</span>
                  <span className="font-bold">{result.score} / {result.maxScore}</span>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">상태:</span>
                  <span className={`font-bold text-lg ${getConditionColor()}`}>
                    {getConditionText()}
                  </span>
                </div>

                <div className="mt-6">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${getConditionColor().replace('text', 'bg')}`}
                      style={{ width: `${(result.score / result.maxScore) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-20 mt-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-bold text-blue-800 mb-2">다음 단계</h3>
                <p className="text-blue-700 mb-4">
                  가까운 타이어 전문점에서 정확한 진단을 받아보세요.
                </p>
                <Link
                  href="/"
                  className="block w-full bg-blue-500 text-white text-center py-3 rounded-md font-medium hover:bg-blue-600"
                >
                  홈으로 돌아가기
                </Link>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
