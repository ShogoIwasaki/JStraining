var parent = {
  name: 'Parent',
  sayHello: function() {
    console.log(this.name);
  }
};

var child = Object.create(parent);
console.log(Object.getPrototypeOf(child).name);