const companyInfo = [
  { label: '社名', value: '株式会社HIGHFLAT / HIGHFLAT co.,ltd.' },
  { label: '所在地', value: '〒101-0025 東京都千代田区神田佐久間町3-38 大陽ビル4F1' },
  { label: 'TEL', value: '050-3852-7092' },
  { label: 'FAX', value: '03-5670-8079' },
  { label: '設立', value: '2017年8月1日' },
  { label: '資本金', value: '300万円' },
  { label: '取引銀行', value: '三井住友銀行 恵比寿支店' },
  { label: '顧問', value: '黒岩法律事務所' },
];

const accessInfo = [
  {
    line: 'JR山手線・京浜東北線・総武線',
    station: '秋葉原駅',
    time: '徒歩5分',
  },
  {
    line: '東京メトロ日比谷線',
    station: '秋葉原駅',
    time: '徒歩5分',
  },
  {
    line: 'つくばエクスプレス',
    station: '秋葉原駅',
    time: '徒歩6分',
  },
];

export const CompanyInfo = () => {
  return (
    <section id="company" className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-20 after:h-1 after:bg-highlight">
          Company
        </h2>
        <p className="text-lg text-text-light mb-16 mt-8">会社概要</p>

        {/* Company Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0 mb-20">
          {companyInfo.map((item, index) => (
            <div
              key={item.label}
              className={`flex py-5 border-b border-gray-200 ${
                index >= companyInfo.length - 2 ? 'lg:border-b-0' : ''
              } ${index === companyInfo.length - 1 ? 'border-b-0' : ''}`}
            >
              <span className="text-primary font-bold w-28 shrink-0">{item.label}</span>
              <span className="text-text">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Map & Access */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.0891!2d139.7749354!3d35.6977419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ea8db6bf3b3%3A0x94064f8d0044957!2z44CSMTAxLTAwMjUg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy656We55Sw5L2Q5LmF6ZaT55S677yT5LiB55uu77yT77yY!5e0!3m2!1sja!2sjp!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HIGHFLAT オフィス所在地"
            />
          </div>

          {/* Access Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">アクセス</h3>
            <div className="space-y-4">
              {accessInfo.map((info) => (
                <div key={info.line} className="p-4 bg-light rounded-xl">
                  <p className="text-sm text-text-light">{info.line}</p>
                  <p className="font-bold">
                    {info.station} <span className="text-highlight font-normal">{info.time}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
