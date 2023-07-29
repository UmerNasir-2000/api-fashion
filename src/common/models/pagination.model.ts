class PaginationModel<T> {
  readonly records: Array<T>;
  readonly count: number;
  readonly pages: number;

  constructor(data: PaginationModel<T>) {
    this.count = data.count;
    this.pages = data.pages;
    this.records = data.records;
  }
}

export default PaginationModel;
