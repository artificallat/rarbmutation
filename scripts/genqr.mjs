import QRCode from 'qrcode';
const payload = ['BCD','002','1','SCT','RZOOAT2L060','Cure MCOPS12','AT0334060000008243362','','','','Spende Cure MCOPS12'].join('\n');
await QRCode.toFile('src/assets/bank-qr.png', payload, { errorCorrectionLevel: 'M', margin: 2, width: 512, color: { dark: '#0F2A44', light: '#FFFFFF' }});
console.log('ok');
