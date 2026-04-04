/**
 * Найти активного пользователя по id.
 * @param {Array<{id:number,name:string,isActive:boolean}>} users
 * @param {number} userId
 * @returns {{id:number,name:string,isActive:boolean} | null}
 *
 * Использует стрелочную функцию ES6 и метод .find().
 */
const findActiveUserById = (users, userId) => {
   if (!Array.isArray(users)) return null;
   const user = users.find(u => u && u.id === userId && u.isActive === true);
   return user || null;
};

module.exports = findActiveUserById;

const testUsers = [
  { id: 1, name: 'Алиса', isActive: true },    
  { id: 2, name: 'Боб', isActive: false },    
  { id: 3, name: 'Чарли', isActive: true },    
  { id: 4, name: 'Диана', isActive: false },   
  { id: 5, name: 'Ева', isActive: true }       
];




const result1 = findActiveUserById(testUsers, 3);
console.log('Тест 1 (Ожидаем Чарли):', result1); 


const result2 = findActiveUserById(testUsers, 2);
console.log('Тест 2 (Ожидаем null):', result2); 


const result3 = findActiveUserById(testUsers, 99);
console.log('Тест 3 (Ожидаем null):', result3);