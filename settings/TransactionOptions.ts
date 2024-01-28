import { IOption } from "../components/Select";

import MoneyBox from "../assets/images/svgs/MoneyBox";
import CardPayment from "../assets/images/svgs/CardPayment";
import ReceivDollar from "../assets/images/svgs/ReceivDollar";
import Donate from "../assets/images/svgs/Donate";

const TransactionOptions: IOption[] = [
  {
    icon: MoneyBox,
    description: "Thu tiền"
  },

  {
    icon: CardPayment,
    description: "Chi tiêu"
  },

  {
    icon: ReceivDollar,
    description: "Tiết kiệm"
  },

  {
    icon: Donate,
    description: "Khoản vay"
  },
];

export default TransactionOptions;