var turtle = {
  x: 0,
  y: 0,

  left: function () {
    --this.x;
  },

  right: function () {
    ++this.x;
  },

  top: function () {
    --this.y;
  },

  down: function () {
    ++this.y;
  }
};

function chainify(obj) {
  for (var key in obj) {
    if (typeof obj[key] === 'function')
    obj[key] = toReturnObj(obj[key]);
    function toReturnObj(direction) {
      return function() {
        direction.call(this);
        return obj;
      };
    }
  };
}
chainify(turtle);

console.log(turtle.left().top().top().down().right());
console.log(turtle.x);
console.log(turtle.y);
