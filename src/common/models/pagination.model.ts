class PaginationModel<T> {
  readonly records: Array<T>;
  readonly count: number;
  readonly pages: number;

  constructor(data: PaginationModel<T>) {
    this.records = data.records;
    this.count = data.count;
    this.pages = data.pages;
  }
}

export default PaginationModel;
