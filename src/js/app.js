import ArrayBufferConverter from './ArrayBufferConverter';
import getBuffer from './getBuffer';

const myBuffer = getBuffer();
const bufferClass = new ArrayBufferConverter();
bufferClass.load(myBuffer); // Загружаем buffer в класс
console.log('Результат метода toString ', bufferClass.toString()); // получаем текст из класса
