import { InstallmentCalculator, MAX_NUMBER_OF_INSTALLMENT } from '@/core';

export default function useInstallment(
  value: number,
  quantity: number = MAX_NUMBER_OF_INSTALLMENT
) {
  return new InstallmentCalculator().execute(value, quantity);
}
