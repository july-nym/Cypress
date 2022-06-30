const wlpDict = {
  '10travlr': 'https://10travlr.freya.travlr.com',
  bali: 'https://bali.freya.travlr.com',
  stuff: 'https://travel-booking.preprod.stuff.co.nz',
  bookafly: 'https://bookafly.freya.travlr.com',
  bbc: 'https://bbc.freya.travlr.com',
};

module.exports = {
  getList() {
    return wlpDict;
  },
  getKeys() {
    return Object.keys(wlpDict);
  },
  getValue(key) {
    if (!wlpDict.hasOwnProperty(key)) {
      return '';
    }

    return wlpDict[key];
  },
};
