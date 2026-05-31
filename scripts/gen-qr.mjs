import QRCode from 'qrcode';
import fs from 'fs';
const payload = [
  'BCD','002','1','SCT','RZOOAT2L060','Cure MCOPS12','AT033406000000824 3362'.replace(/\s+/g,''),'','','','Spende Cure MCOPS12'
].join('\n');
console.log('IBAN in payload:', 'AT0334060000008243362');
console.log('Payload:\n'+payload);
await QRCode.toFile('src/assets/bank-qr.png', payload, { errorCorrectionLevel:'M', margin:2, scale:10, color:{dark:'#0c2340', light:'#ffffff'} });
console.log('written');
