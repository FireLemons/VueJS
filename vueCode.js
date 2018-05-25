var template = new Vue({
  el: '#template',
  data: {
    message: 'Hello Vue.js!',
  },
  methods: {}
});

var attribute = new Vue({
  el: '#attribute',
  data: {
    message: 'HOVER HINT'
  }
});

var control = new Vue({
  el: '#control',
  data: {
    seen: true,
    todos: [{
        text: 'Learn JS'
      },
      {
        text: 'Learn Vue'
      },
      {
        text: 'Build something modern'
      }
    ]
  }
});

var methods = new Vue({
	el: '#methods',
  data: {
  	list: [],
    increment: 0
  }, 
  methods: {
  	push: function(){
    	this.list.push(this.increment++);
    },
    remove: function(){
    	this.list.splice(0, 1);
    }
  }
});

var transitions = new Vue({
  el: '#transitions',
  data: {
    show: true
  }
});
