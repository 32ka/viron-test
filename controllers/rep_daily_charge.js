const moment = require('moment-timezone');
let datas = [
  {
    summary_datetime: '2018-01-01',
    site_id: 'g',
    sum_charge_count: 1128,
    sum_charge_price: 1485300
  },
  {
    summary_datetime: '2018-01-02',
    site_id: 'g',
    sum_charge_count: 1437,
    sum_charge_price: 1933700
  },
  {
    summary_datetime: '2018-01-03',
    site_id: 'g',
    sum_charge_count: 1423,
    sum_charge_price: 1876800
  },
  {
    summary_datetime: '2018-01-04',
    site_id: 'g',
    sum_charge_count: 1552,
    sum_charge_price: 2063300
  },
  {
    summary_datetime: '2018-01-05',
    site_id: 'g',
    sum_charge_count: 1409,
    sum_charge_price: 1868700
  },
  {
    summary_datetime: '2018-02-01',
    site_id: 'g',
    sum_charge_count: 1552,
    sum_charge_price: 2063300
  },
  {
    summary_datetime: '2018-02-02',
    site_id: 'g',
    sum_charge_count: 1437,
    sum_charge_price: 1933700
  },
  {
    summary_datetime: '2018-02-03',
    site_id: 'g',
    sum_charge_count: 1423,
    sum_charge_price: 1876800
  },
  {
    summary_datetime: '2018-02-04',
    site_id: 'g',
    sum_charge_count: 1409,
    sum_charge_price: 1868700
  },
  {
    summary_datetime: '2018-02-05',
    site_id: 'g',
    sum_charge_count: 1128,
    sum_charge_price: 1485300
  },
  {
    summary_datetime: '2018-02-01',
    site_id: 'm',
    sum_charge_count: 1558,
    sum_charge_price: 1956400
  },
  {
    summary_datetime: '2018-02-02',
    site_id: 'm',
    sum_charge_count: 1111,
    sum_charge_price: 1404900
  },
  {
    summary_datetime: '2018-02-03',
    site_id: 'm',
    sum_charge_count: 1647,
    sum_charge_price: 1834400
  },
  {
    summary_datetime: '2018-02-04',
    site_id: 'm',
    sum_charge_count: 1166,
    sum_charge_price: 1446600
  },
  {
    summary_datetime: '2018-02-05',
    site_id: 'm',
    sum_charge_count: 985,
    sum_charge_price: 1244400
  },
  {
    summary_datetime: '2018-01-01',
    site_id: 'm',
    sum_charge_count: 1558,
    sum_charge_price: 1956400
  },
  {
    summary_datetime: '2018-01-02',
    site_id: 'm',
    sum_charge_count: 1647,
    sum_charge_price: 1834400
  },
  {
    summary_datetime: '2018-01-03',
    site_id: 'm',
    sum_charge_count: 1166,
    sum_charge_price: 1446600
  },
  {
    summary_datetime: '2018-01-04',
    site_id: 'm',
    sum_charge_count: 985,
    sum_charge_price: 1244400
  },
  {
    summary_datetime: '2018-01-05',
    site_id: 'm',
    sum_charge_count: 1111,
    sum_charge_price: 1404900
  },
  {
    summary_datetime: '2018-02-01',
    site_id: 'c',
    sum_charge_count: 428,
    sum_charge_price: 574500
  },
  {
    summary_datetime: '2018-02-02',
    site_id: 'c',
    sum_charge_count: 359,
    sum_charge_price: 477300
  },
  {
    summary_datetime: '2018-02-03',
    site_id: 'c',
    sum_charge_count: 469,
    sum_charge_price: 627200
  },
  {
    summary_datetime: '2018-02-04',
    site_id: 'c',
    sum_charge_count: 463,
    sum_charge_price: 605100
  },
  {
    summary_datetime: '2018-02-05',
    site_id: 'c',
    sum_charge_count: 320,
    sum_charge_price: 393000
  },

  {
    summary_datetime: '2018-01-01',
    site_id: 'c',
    sum_charge_count: 463,
    sum_charge_price: 605100
  },
  {
    summary_datetime: '2018-01-02',
    site_id: 'c',
    sum_charge_count: 428,
    sum_charge_price: 574500
  },
  {
    summary_datetime: '2018-01-03',
    site_id: 'c',
    sum_charge_count: 359,
    sum_charge_price: 477300
  },
  {
    summary_datetime: '2018-01-04',
    site_id: 'c',
    sum_charge_count: 469,
    sum_charge_price: 627200
  },
  {
    summary_datetime: '2018-01-05',
    site_id: 'c',
    sum_charge_count: 320,
    sum_charge_price: 393000
  },
  {
    summary_datetime: '2018-02-01',
    site_id: 'r',
    sum_charge_count: 501,
    sum_charge_price: 599100
  },
  {
    summary_datetime: '2018-02-02',
    site_id: 'r',
    sum_charge_count: 494,
    sum_charge_price: 634400
  },
  {
    summary_datetime: '2018-02-03',
    site_id: 'r',
    sum_charge_count: 460,
    sum_charge_price: 488500
  },
  {
    summary_datetime: '2018-02-04',
    site_id: 'r',
    sum_charge_count: 493,
    sum_charge_price: 614800
  },
  {
    summary_datetime: '2018-02-05',
    site_id: 'r',
    sum_charge_count: 351,
    sum_charge_price: 397900
  },
  {
    summary_datetime: '2018-01-01',
    site_id: 'r',
    sum_charge_count: 494,
    sum_charge_price: 634400
  },
  {
    summary_datetime: '2018-01-02',
    site_id: 'r',
    sum_charge_count: 501,
    sum_charge_price: 599100
  },
  {
    summary_datetime: '2018-01-03',
    site_id: 'r',
    sum_charge_count: 460,
    sum_charge_price: 488500
  },
  {
    summary_datetime: '2018-01-04',
    site_id: 'r',
    sum_charge_count: 351,
    sum_charge_price: 397900
  },
  {
    summary_datetime: '2018-01-05',
    site_id: 'r',
    sum_charge_count: 493,
    sum_charge_price: 614800
  },
];

/**
 * Controller : List RepDailyCharge
 * HTTP Method : GET
 * PATH : /rep_daily_charge
 *
 * @returns {Promise.<TResult>}
 */
const list = (req, res) => {
  const siteId = req.query.site_id;
  const resultData = [];
  datas.forEach(data => {
    if (siteId && data.site_id !== siteId) {
      return;
    }
    resultData.push(data);
  });
  return res.json(resultData);
};

const count = (req, res) => {
  const siteId = req.query.site_id;
  const period = req.query.period_type;
  let startDate = null;
  let endDate = null;
  console.log(period);
  if (period !== undefined) {
    switch (period) {
      case 'this':
        startDate = moment().date(1).format('YYYY-MM-DD');
        break;
      case 'last':
        startDate = moment().subtract(1, 'months').date(1).format('YYYY-MM-DD');
        break;
      default:
        break;
    }
    switch (period) {
      case 'this':
        endDate = moment().endOf('month').format('YYYY-MM-DD');
        break;
      case 'last':
        endDate = moment().subtract(1, 'months').endOf('month').format('YYYY-MM-DD');
        break;
      default:
        return;
    }
  }
  const glaphData = [];
  datas.forEach(data => {
    if (siteId && data.site_id !== siteId) {
      return;
    }
    if (period !== undefined) {
      if (startDate > data.summary_datetime || endDate < data.summary_datetime) {
        return;
      }
    }
    glaphData.push({
      team: data.site_id,
      date: data.summary_datetime,
      sum_charge_count: data.sum_charge_count
    });
  });
  res.json({
    x: 'date',
    y: 'sum_charge_count',
    color: 'team',
    data: glaphData
  });
};


const price = (req, res) => {
  const siteId = req.query.site_id;
  const period = req.query.period_type;
  let startDate = null;
  let endDate = null;
  if (period !== undefined) {
    switch (period) {
      case 'this':
        startDate = moment().date(1).format('YYYY-MM-DD');
        break;
      case 'last':
        startDate = moment().subtract(1, 'months').date(1).format('YYYY-MM-DD');
        break;
      default:
        break;
    }
    switch (period) {
      case 'this':
        endDate = moment().endOf('month').format('YYYY-MM-DD');
        break;
      case 'last':
        endDate = moment().subtract(1, 'months').endOf('month').format(
            'YYYY-MM-DD');
        break;
      default:
        return;
    }
  }
  const glaphData = [];
  datas.forEach(data => {
    if (siteId && data.site_id !== siteId) {
      return;
    }
    if (period !== undefined) {
      if (startDate > data.summary_datetime || endDate < data.summary_datetime) {
        return;
      }
    }
    glaphData.push({
      team: data.site_id,
      date: data.summary_datetime,
      sum_charge_price: data.sum_charge_price
    });
  });
  res.json({
    x: 'date',
    y: 'sum_charge_price',
    color: 'team',
    data: glaphData
  });
};

module.exports = {
  'rep_daily_charge#list': list,
  'rep_daily_charge#count': count,
  'rep_daily_charge#price': price,
};
