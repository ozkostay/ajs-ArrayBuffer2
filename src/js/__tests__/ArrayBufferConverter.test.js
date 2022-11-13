import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('ArrayBufferConverter ', () => {
  const myBuffer = getBuffer();
  const bufferClass = new ArrayBufferConverter();
  bufferClass.load(myBuffer); // Загружаем buffer в класс
  const str = bufferClass.toString();
  expect(str).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
