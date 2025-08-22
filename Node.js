const express = require('express');
const app = express();

const startDate = new Date('2025-08-20T00:00:00Z'); // 시작일 (UTC 기준)
const endDate = new Date('2025-09-01T23:59:59Z');   // 종료일 (UTC 기준)
const targetUrl = 'https://lite.tiktok.com/t/ZShCj7qhA/';

app.get('/', (req, res) => {
  const now = new Date();

  if (now >= startDate && now <= endDate) {
    // 기간 내면 원본 링크로 리다이렉트
    res.redirect(targetUrl);
  } else {
    // 기간 만료 시 안내 메시지
    res.send('<h1>링크 기간이 만료되었습니다.</h1><p>접근하실 수 없습니다.</p>');
  }
});

// Glitch 환경에서 포트 자동 지정
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
