const accessInfo = [
  {
    icon: '🚃',
    line: 'JR山手線・京浜東北線・総武線',
    station: '秋葉原駅',
    time: '徒歩5分',
  },
  {
    icon: '🚇',
    line: '東京メトロ日比谷線',
    station: '秋葉原駅',
    time: '徒歩5分',
  },
  {
    icon: '🚇',
    line: 'つくばエクスプレス',
    station: '秋葉原駅',
    time: '徒歩6分',
  },
];

export const Access = () => {
  return (
    <section id="access" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-white">
      <h2 className="font-serif text-4xl md:text-5xl mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-20 after:h-1 after:bg-highlight">
        Access
      </h2>
      <p className="text-lg text-text-light mb-16 mt-8">アクセス情報</p>

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

        {/* Info */}
        <div>
          {/* Address */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-primary mb-4">所在地</h3>
            <p className="text-lg leading-relaxed">
              〒101-0025
              <br />
              東京都千代田区神田佐久間町3丁目38
            </p>
          </div>

          {/* Access */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">アクセス</h3>
            <div className="space-y-4">
              {accessInfo.map((info) => (
                <div key={info.line} className="flex items-start gap-4 p-4 bg-light rounded-xl">
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <p className="text-sm text-text-light">{info.line}</p>
                    <p className="font-bold">
                      {info.station} <span className="text-highlight font-normal">{info.time}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
