import { ApiProperty } from '@nestjs/swagger';

export class SuccessResponseDtoNew {
  @ApiProperty()
  data: { items: object };
  @ApiProperty()
  message: string;
  @ApiProperty()
  code: string;
  @ApiProperty()
  pageNumber: number;
  @ApiProperty()
  pageSize: number;
  @ApiProperty()
  totalNumItems: number;
  @ApiProperty()
  paginationInfo: {
    pageNumber: number;
    pageSize: number;
    totalNumItems: number;
  };

  static getFilledResponseObjectAllArgs(
    dataPassed: object,
    messagePassed: string,
    codePassed: string,
  ): SuccessResponseDtoNew {
    // return this.getFilledResponseObjectAllArgs(dataPassed, messagePassed, null);
    const successResponseDtoNew = new SuccessResponseDtoNew();
    successResponseDtoNew.data = { items: dataPassed };
    successResponseDtoNew.message = messagePassed;
    successResponseDtoNew.code = codePassed;
    return successResponseDtoNew;
  }

  static getPaginatedFilledResponseObjectAllArgs(
    paginatedFetchedResult: any,
    messagePassed: string,
    codePassed: string,
  ) {
    const successResponseDtoNew = new SuccessResponseDtoNew();
    successResponseDtoNew.message = messagePassed;
    successResponseDtoNew.code = codePassed;
    successResponseDtoNew.data = { items: paginatedFetchedResult.data };
    successResponseDtoNew.paginationInfo = {
      pageSize: paginatedFetchedResult.limit,
      pageNumber: paginatedFetchedResult.page,
      totalNumItems: paginatedFetchedResult.total,
    };
    return successResponseDtoNew;
  }
}
