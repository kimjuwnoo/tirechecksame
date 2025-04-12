'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Home as HomeIcon, Calendar, User, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div id="wrap" className="bg-wh">
      {/* Navigation */}
      <nav>
        <ul id="nav">
          <li>
            <Link href="/" className="active">
              <HomeIcon className="font-24" />
              <span className="menu_txt font-12">홈</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="">
              <Calendar className="font-24" />
              <span className="menu_txt font-12">예약</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="">
              <User className="font-24" />
              <span className="menu_txt font-12">내정보</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Search Area */}
      <section className="main_search_area">
        <div className="main_title_area">
          <div className="main_txt_bx">
            <p className="sub_title_main ico_gray_04">믿음,신뢰,저렴 모든걸 한곳에</p>
            <p className="title_main">타이어체크</p>
          </div>
        </div>
      </section>

      {/* Notice Area */}
      <section className="notice_area bg-wh bx-shdw-20px">
        <h3 className="font-14 text-center mb-4">타이어체크 서비스</h3>
      </section>

      {/* Content Link Area */}
      <section className="main_bx mt-4">
        <h3 className="font-16 pretendard_Bold mb-4">타이어 관리 정보</h3>
        <div className="content_lnk_area">
          <ul>
            <li className="main_banner_item">
              <Link href="/self_test/tire_self_check">
                <div className="lnk_left_bx">
                  <p className="title">타이어 자가점검</p>
                  <p className="sub_title">타이어 상태를 체크해보세요</p>
                </div>
                <div className="lnk_right_bx">
                  <ChevronRight />
                </div>
              </Link>
            </li>
            <li className="main_banner_item">
              <Link href="/self_test/tire_change_test">
                <div className="lnk_left_bx">
                  <p className="title">타이어 교체 시기</p>
                  <p className="sub_title">타이어 수명 계산하기</p>
                </div>
                <div className="lnk_right_bx">
                  <ChevronRight />
                </div>
              </Link>
            </li>
            <li className="main_banner_item">
              <Link href="/faq">
                <div className="lnk_left_bx">
                  <p className="title">자주 묻는 질문</p>
                  <p className="sub_title">타이어 FAQ</p>
                </div>
                <div className="lnk_right_bx">
                  <ChevronRight />
                </div>
              </Link>
            </li>
            <li className="main_banner_item">
              <Link href="#">
                <div className="lnk_left_bx">
                  <p className="title">타이어 정보</p>
                  <p className="sub_title">타이어 기초 정보 알아보기</p>
                </div>
                <div className="lnk_right_bx">
                  <ChevronRight />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <ul className="footer_link_area">
          <li><Link href="#">회사소개</Link></li>
          <li><Link href="#">이용약관</Link></li>
          <li><Link href="#">개인정보처리방침</Link></li>
        </ul>
        <div className="company_info_area">
          <p>상호명: 골든 | 대표: 배건,김준우</p>
          <p>사업자등록번호: 123-45-67890</p>
          <p>주소: 부산광역시 동구 범일로98-2</p>
          <p>고객센터: 010-4100-0520</p>
          <p>© 2023 TireCheck. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
