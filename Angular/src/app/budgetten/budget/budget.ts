import { Label } from "../../labels/label/label";
import { Interval } from "../../interval.enum";

export class Budget
{
    id: number;
    laatstGewijzidgd: Date;
    label: number;
    bedrag: number;
    begindatum: Date;
    einddatum: Date;
    interval: Interval;
    labelNavigation: Label;
  }