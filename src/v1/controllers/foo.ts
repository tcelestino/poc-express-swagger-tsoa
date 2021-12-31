import { Get, Path, Route } from 'tsoa';

interface FooResponse {
  message: string;
}

@Route('foo')
export default class FooController {
  @Get('/')
  async getMessage(): Promise<FooResponse> {
    return {
      message: 'bar',
    };
  }

  @Get('{id}')
  async getId(@Path() id: number): Promise<Record<string, number>> {
    return { id };
  }
}
