export default class Helper {

  static calculatePercentRounded = (value, target) => {
    const percent = (value / target) * 100;
    if (percent === Number.POSITIVE_INFINITY || Number.isNaN(percent)) {
      return 0;
    }
    return Math.floor((percent < 1 ? Math.ceil(percent) : Math.floor(percent)));
  };

  static formatMoney = (value) => {
    const parsed = Number.parseFloat(((Math.round(value * 100)) / 100), 10).toFixed(2);
    if (Number.isNaN(parsed) || isNaN(value)) {
      return 0.00;
    }
    return parsed;
  };

  static camelize = (str) => {
    return str.toString().replace(/(?:^\w|[A-Z]|\b\w)/g, ((word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })).replace(/\s+/g, '');
  }
}
