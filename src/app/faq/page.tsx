'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('전체');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter(item => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
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
          <h1 className="font-16">FAQ</h1>
        </div>
      </header>

      <section className="main_bx mt-50">
        {/* FAQ Tabs */}
        <div className="faq-tabs">
          {['전체', '예약', '시스템', '타이어', '기타', '파트너스'].map((tab) => (
            <button
              key={tab}
              className={`faq-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="faq-list">
          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleItem('1')}>
              <div className="faq-question-text">[시스템] 네트워크 연결 예외</div>
              {expandedItems.includes('1') ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            <div className={`faq-answer ${expandedItems.includes('1') ? 'open' : ''}`}>
              제한된 Wifi 환경에서 사용시 오류가 날 수 있습니다. Wifi 연결을 해제하고 다시 시도해 보세요.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleItem('2')}>
              <div className="faq-question-text">[시스템] 위치정보 오류</div>
              {expandedItems.includes('2') ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            <div className={`faq-answer ${expandedItems.includes('2') ? 'open' : ''}`}>
              위치 정보가 정확하지 않을 수 있습니다. 위치 서비스를 켜고 다시 시도해보세요.
              지속적으로 문제가 발생한다면 고객센터로 문의해주세요.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleItem('3')}>
              <div className="faq-question-text">[시스템] 방문 예약 후 문자가 오지 않아요</div>
              {expandedItems.includes('3') ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            <div className={`faq-answer ${expandedItems.includes('3') ? 'open' : ''}`}>
              Wifi 연결 문제일 수 있습니다. Wifi 연결을 해제한 후 다시 시도해보세요.
              계속해서 문제가 발생하면 고객센터로 연락해주세요: 1588-1234 (평일 09:00~18:00, 공휴일 휴무)
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleItem('4')}>
              <div className="faq-question-text">[예약] 표시된 금액은 확실한가요?</div>
              {expandedItems.includes('4') ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            <div className={`faq-answer ${expandedItems.includes('4') ? 'open' : ''}`}>
              타이어체크에 제공된 정보는 각 매장에서 &quot;실시간&quot;으로 업데이트 됩니다.
              각 매장의 &quot;실시간 재고&quot; 정보가 없더라도 방문 예약은 가능합니다.
              하지만 예약 시점과 실제 방문 시점의 차이로 재고가 &quot;소진&quot; 되었을 수 있습니다.
              이런 경우 타이어 교체 전에 담당자가 안내해 드립니다.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleItem('5')}>
              <div className="faq-question-text">[예약] 수수료는 없나요?</div>
              {expandedItems.includes('5') ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            <div className={`faq-answer ${expandedItems.includes('5') ? 'open' : ''}`}>
              타이어체크는 무료 서비스입니다. 예약 및 앱 사용에 따른 별도의 수수료는 없습니다.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleItem('6')}>
              <div className="faq-question-text">[예약] 방문 예약 후 취소?</div>
              {expandedItems.includes('6') ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            <div className={`faq-answer ${expandedItems.includes('6') ? 'open' : ''}`}>
              방문 예약 후 취소는 &apos;내 정보 &rarr; 예약 내역&apos;에서 가능합니다.
              혹은 매장에 직접 연락하셔서 취소하실 수 있습니다.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleItem('7')}>
              <div className="faq-question-text">[타이어] 타이어 사이즈 확인 방법</div>
              {expandedItems.includes('7') ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            <div className={`faq-answer ${expandedItems.includes('7') ? 'open' : ''}`}>
              타이어 옆면에 표기되어 있습니다. 예) 225/55R/17 (폭 225mm / 편평비 55% / 휠 17인치)
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleItem('8')}>
              <div className="faq-question-text">[타이어] 타이어 연식 확인 방법</div>
              {expandedItems.includes('8') ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            <div className={`faq-answer ${expandedItems.includes('8') ? 'open' : ''}`}>
              타이어 옆면에 DOT 표기 뒤 4자리 숫자를 확인하시면 됩니다. 앞 2자리는 주차, 뒤 2자리는 연도입니다.
              예) 1721 = 2021년 17주차
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleItem('9')}>
              <div className="faq-question-text">[타이어] 타이어 교체 주기</div>
              {expandedItems.includes('9') ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            <div className={`faq-answer ${expandedItems.includes('9') ? 'open' : ''}`}>
              일반적으로 50,000km 정도입니다. 하지만 주행 환경과 운전 습관에 따라 달라질 수 있습니다.
              타이어 옆면의 마모 한계선을 확인하거나, 홈의 깊이가 1.6mm 이하면 교체가 필요합니다.
              타이어 제조일로부터 7년이 지난 경우에도 교체를 권장합니다.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleItem('10')}>
              <div className="faq-question-text">[예약] 계약금을 요구합니다.</div>
              {expandedItems.includes('10') ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
            <div className={`faq-answer ${expandedItems.includes('10') ? 'open' : ''}`}>
              타이어체크를 통한 예약은 계약금이 필요하지 않습니다.
              만약 계약금을 요구받으셨다면 고객센터로 연락주시기 바랍니다.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
