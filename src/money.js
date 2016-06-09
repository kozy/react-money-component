import React from 'react';
import Currency from 'js-money/lib/currency';
import accounting from 'accounting';

export default class Money extends React.Component {
  formattedAmount() {
    const { cents, currency, format } = this.props;
    const { symbol, decimal_digits: precision } = Currency[currency];
    const amount = cents / Math.pow(10, precision);

    return accounting.formatMoney(amount, { symbol, precision, format });
  }

  render() {
    return (
      <span>{this.formattedAmount()}</span>
    );
  }
}

Money.propTypes = {
  cents: React.PropTypes.number.isRequired,
  currency: React.PropTypes.string.isRequired,
};
