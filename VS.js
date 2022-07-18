let Obj = [
    {name: 'Cana', age: 30, zp: 80000},
    {name: '1', age: 45, zp: 150000},
    {name: '2', age: 24, zp: 930000},
    {name: '3', age: 23, zp: 850000},
    {name: '4', age: 85, zp: 83000},
    {name: '5', age: 15, zp: 21000},
]

const sumzp = Obj.reduce((total, num) => total + Obj.zp, 0)
console.log (typeof(sumzp))