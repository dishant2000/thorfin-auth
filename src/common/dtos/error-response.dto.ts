export class ErrorResponseDto {
  data: any;
  message: string;
  code: string;
  static getFilledResponseObjectAllArgs(
    data: any,
    message: string,
    code: string,
  ) {
    return { data, message, code };
  }
}
