import { MAX_NUMBER_OF_INSTALLMENT, MONTHLY_INTEREST_RATE } from '../constants';
import Installment from './Installment';

export default class InstallmentCalculator {
  execute(
    value: number,
    numberOfInstallments: number = MAX_NUMBER_OF_INSTALLMENT,
    interestsRate: number = MONTHLY_INTEREST_RATE
  ): Installment {
    if (
      numberOfInstallments < 2 ||
      numberOfInstallments > MAX_NUMBER_OF_INSTALLMENT
    ) {
      throw new Error(
        `Quantidade de parcelas deve ser entre 2 e ${MAX_NUMBER_OF_INSTALLMENT}`
      );
    }

    const totalWithTax = this.calculateCompoundInterest(
      value,
      interestsRate,
      numberOfInstallments
    );

    return {
      installmentValue: this.withTwoDecimalsPlaces(
        totalWithTax / numberOfInstallments
      ),
      totalValue: this.withTwoDecimalsPlaces(totalWithTax),
      numberOfInstallments,
      interestsRate,
    };
  }

  private calculateCompoundInterest(
    valorTotal: number,
    taxaMensal: number,
    qtdeParcelas: number
  ) {
    return valorTotal * Math.pow(1 + taxaMensal, qtdeParcelas);
  }

  private withTwoDecimalsPlaces(value: number): number {
    return Math.round(value * 100) / 100;
  }
}
