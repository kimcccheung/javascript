//Meta Programming 
//Proxies

var handler = {
  get: function(target, name) {
    return name in target ? target[name] : 42;
  }
};

var p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42

//Revocable Proxy
var revocable = Proxy.revocable({}, {
  get: function(target, name) {
    return '[[' + name + ']]';
  }
});
var proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo);  // TypeError is thrown
proxy.foo = 1;           // TypeError again
delete proxy.foo;        // still TypeError
typeof proxy;            // "object", typeof doesn't trigger any trap