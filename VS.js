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
class NewClass {
    constructor(people){
        this.name = people.name
        this.age = people.age
        this.zp =  people.zp
    }
       voice(ime){
        console.log('Hello' + ' ' + ime)
       }
       job(){
        console.log('I work for' + ' ' + `${this.zp}`)
       }
    }
    
    
    class People2 extends NewClass{
        constructor(people){
            super(people)
            this.car = people.car
        }
        voice (ime){
            super.voice(5000)
            console.log('I am god' + ' ' + ime)
        
        }
        get newzp(){
          return this.zp * 3
        }
        set newzp(zp2){
            this.zp = zp2
        }
    }
    
    
    let Victor = new People2({
    name: 'Victor',
    age: 30,
    zp: 35000,
    car: 'BMW 8'
    })
    Victor.newzp = 30000
    console.log(Victor)
    Victor.voice(500000)
    Victor.job()