function Foo() {

}
var a = new Foo();

Foo.prototype.constructor === Foo // true
a.constructor = Foo  // true

// a.constructor只是通过默认[[Prototype]]委托指向Foo，这和构造毫无关系
// Foo.prototype的.constructor属性只是Foo函数在声明时的默认属性。

// 如果你创建了一个新对象并替换了函数默认的.prototype对象应用，那么新对象并不会自动获得.construstor属性

function Foo(){}
Foo.prototype = {};

var a1 = new Foo();
a1.constructor === Foo // false
a1.constructor === Object // true

// 解释
// a1并没有constructor属性，所以它会委托[[Prototype]]链上的Foo.prototype,但是这个对象也没有.constructor属性
// （不过默认的Foo.prototype对象有这个属性！）
// 所以它会继续委托，这次会委托给委托链顶端的Object.prototype。
// 这个对象有.constructor属性，指向内置的Object()函数

// 当然可以给Foo.prototype添加一个.consructor属性，需要手动添加一个符合正常行为的不可枚举属性

function Foo(){}
Foo.prototype = {};
// 需要再Foo.prototype上修复 丢失的.constructor属性
// 新对象属性起到Foo.prototype的作用
Object.defineProperty(Foo.prototype, "constructor", {
    enumerable: false,
    writable: true,
    configurable: true,
    value: Foo // 让.constructor指向Foo
});





// 
function NothingSpecia() {
    console.log('Do not mind me');
}

var a = new NothingSpecial();
// Do not mind me
a; // {}


// 构造函数： 所有带new的函数调用
// 函数不是构造函数，但是当且仅当使用new 时，函数调用会变成"构造函数调用"