console.log('class')
// class是es6中实现面向对象的新实行

function Person(name, age) {
  this.name = name
  this.age = age
}
Person.info = 'aaa' //静态属性

// 静态方法 挂载到挂载器
Person.show = function() {
  console.log('只是静态方法')
}

Person.prototype.say = function() {
  console.log('这是person的实例方法')
}

const p1 = new Person('王', 10)
console.log(p1)
console.log(p1.info)
console.log(Person.info)
console.log(p1.say())
Person.prototype.say = function() {

}

console.log(Person)
//----------------------------------
console.log('----------------------------------')

class Animal {
  // 这是类中的构造器  
  // 每一个类中 都有一个构造器 如果没有手动去写 内部有个隐形的构造器
  // 构造器的作用 就是每new这个类的时候 必然会有优先执行 构造器中的代码

  // 静态属性 通过构造函数直接访问的属性

  // 实例方法和静态方法
  constructor(name, age) {
    // 实例属性
    this.name = name
    this.aeg = age
  }

  sayHello() {
    console.log('hello')
  }

  // class中 静态属性 用static
  static info = 'eee'

  // 实例方法 挂载到原型对象上的
  jiao() {
    console.log('animal实例方法')
  }
}
const a1 = new Animal('大黄', 3)
console.log(a1)
console.log(a1.info)
console.log(Animal.info)
console.log(a1.jiao())
// 1. 在cla区间{}内， 只能写构造器 静态方法 和静态属性 实例方法
// 2. class关键字内部 还是用原来的配方实现的 class关键字 称作语法糖


// 继承
// class American extends Animal {

// }

// const pp1 = new American('Jack', 23)
// console.log(pp1)
// console.log(pp1.sayHello())

class Chinese extends Animal {
  constructor(name, age, idNumber){
    //1 因为 子类必须优先调用super()
    //2 super是一个函数 是父类的构造器  其实就是父类中constructor的引用
    //3 子类中this只能放到super后
    super(...arguments)
    this.idNumber = idNumber
  }

}

const cc1 = new Chinese('张三', 23, '4324324')
console.log('------zhang san --------')
console.log(cc1.sayHello())
console.log(cc1)