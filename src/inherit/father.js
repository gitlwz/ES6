class Animal {
    constructor(a){
    	console.log('$$$$$$$$$$$$$$$',a)
        this.type = 'animal'
    }
    says(say){
        console.log(this.type + ' says ' + say)
    }
}

let animal = new Animal()
animal.says('hello') //animal says hello

class Cat extends Animal {
    constructor(a){
    	super()
        super.says('我是谁')
        console.log('a===========',a)
        this.type = 'cat'
    }
}

let cat = new Cat('我是外部子元素的参数')
cat.says('hello') //cat says hello

