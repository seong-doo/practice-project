export interface IItem {
  sickCd: string;
  sickNm: string;
}

interface IGetDissRes {
  response: {
    header: { resultCode: string; resultMsg: string };
    body: {
      items: {
        item: Array<IItem> | IItem;
      };
      numOfRows: number;
      pageNo: number;
      totalCount: number;
    };
  };
}
