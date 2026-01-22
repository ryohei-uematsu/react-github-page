const jobDetails = [
  { label: '雇用形態', value: '正社員・契約社員' },
  {
    label: '仕事内容',
    value: 'システム開発における設計及び製造開発\nヘルプデスク、サポート業務',
  },
  { label: '応募資格', value: '学歴不問\n上記仕事内容の経験' },
  { label: '勤務地', value: '本社勤務又は弊社クライアント指定場所' },
  { label: '給与', value: '弊社規定による\n平均月収45万円程度' },
  {
    label: '勤務時間',
    value: '9:00〜18:00　休憩1時間\nプロジェクトにより変動あり',
  },
  { label: '休日休暇', value: '週休2日制（土・日）、祝日' },
  { label: '待遇', value: '通勤手当\n営業手当' },
  {
    label: '福利厚生',
    value: '社会保険完備（雇用・健康・労災・厚生年金）\n社員旅行\nお小遣い制度',
  },
  { label: '選考方法', value: '書類審査、面接' },
  { label: '採用人数', value: '複数名' },
];

import { useInView } from '../hooks/useInView';

export const Recruitment = () => {
  const { ref, isInView } = useInView();
  return (
    <section
      ref={ref}
      id="recruitment"
      className={`py-32 px-6 md:px-12 section-bg-scroll text-center ${isInView ? 'in-view' : ''}`}
    >
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-highlight">
          Recruitment
        </h2>
        <p className="text-lg text-text-light mb-16 mt-8">一緒に未来を創りませんか</p>

        <div className="max-w-[900px] mx-auto">
          <p className="text-lg md:text-xl leading-loose mb-12">
            HIGHFLATでは、システムエンジニア、フロントエンドエンジニア、Webデザイナーなど、
            <br className="hidden md:block" />
            様々なジャンルの人材を募集しています。
            <br className="hidden md:block" />
            あなたの持つスキルを活かし、やりたいことをしませんか?
          </p>

          {/* Job Details Table */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden text-left">
            <table className="w-full">
              <tbody>
                {jobDetails.map((item, index) => (
                  <tr
                    key={item.label}
                    className={index !== jobDetails.length - 1 ? 'border-b border-gray-100' : ''}
                  >
                    <th className="bg-primary/10 text-primary font-bold py-4 px-6 w-1/4 md:w-1/5 align-top text-sm md:text-base">
                      {item.label}
                    </th>
                    <td className="py-4 px-6 text-text whitespace-pre-line text-sm md:text-base">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScpzWx-7777Ubaj3FVrbNV0I-v8uoaar3l8ZyGOGoDBr839CA/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 gradient-primary text-white font-bold rounded-full mt-12 transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl"
          >
            採用に応募する
          </a>
        </div>
      </div>
    </section>
  );
};
