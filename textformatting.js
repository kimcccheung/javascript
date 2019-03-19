//Date and time formatting
const msPerDay = 24 * 60 * 60 * 1000;
 
// July 17, 2014 00:00:00 UTC.
const july172014 = new Date(msPerDay * (44 * 365 + 11 + 197));

const options = { year: '2-digit', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
const americanDateTime = new Intl.DateTimeFormat('en-US', options).format;
 
console.log(americanDateTime(july172014)); // 07/16/14, 5:00 PM PDT


//Number formatting
const gasPrice = new Intl.NumberFormat('en-US',
                        { style: 'currency', currency: 'USD',
                          minimumFractionDigits: 3 });
 
console.log(gasPrice.format(5.259)); // $5.259

const hanDecimalRMBInChina = new Intl.NumberFormat('zh-CN-u-nu-hanidec',
                        { style: 'currency', currency: 'CNY' });
 
console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五


//The Collator object is useful for comparing and sorting strings
const names = ['Hochberg', 'Hönigswald', 'Holzman'];
 
const germanPhonebook = new Intl.Collator('de-DE-u-co-phonebk');
 
// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(', '));
// logs "Hochberg, Hönigswald, Holzman"

const germanDictionary = new Intl.Collator('de-DE-u-co-dict');
 
// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(', '));
// logs "Hochberg, Holzman, Hönigswald"