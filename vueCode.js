var template = new Vue({
  el: '#template',
  data: {
    message: 'Hello Vue.js!',
  },
  methods:{}
});

var attribute = new Vue({
	el: '#attribute', 
	data:{
		message: 'HOVER HINT'
  }
});

var control = new Vue({
	el: '#control',
	data: {
  	seen: 1,
  	todos: [
  		{
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