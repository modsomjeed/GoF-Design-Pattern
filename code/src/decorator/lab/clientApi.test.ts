import { Customer } from './customer';
import { CustomerApi } from './decoratorApi/customerApi';
import { CustomerWrappedApi } from './decoratorApi/customerWrappedApi';

describe('[Decorator - lab] Build Response', () => {
  it('should build response', () => {
    // given
    const api = new CustomerApi();

    // when
    const customer: Customer = api.get();

    // then
    expect(customer.name).toBe('John');
  });

  it('should build response with wrapped status and data', () => {

    //given
    const api = new CustomerApi();
    const wrappedApi = new CustomerWrappedApi(api);
    const expectedData = {
      status: 'ok',
      data: {
        customer: new Customer('John', 'Doe', 30)
      }
    };

    //when
    const result = wrappedApi.get();

    //then
    expect(result).toEqual(expectedData);
  });
});
