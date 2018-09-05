export class Params {
  public pageNumber: number;
  public pageSize: number;
  public filterKey: string;
  public filterValue: string;

  constructor(pageNumber: number , pageSize: number , filterKey: string , filterValue: string) {
    this.pageNumber = pageNumber;
    this.pageSize = pageSize;
    this.filterKey = filterKey;
    this.filterValue = filterValue;
  }
}
