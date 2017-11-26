// State
var state = {};

var lst = document.getElementById('lst');
state.view = (model) => {
	lst.innerHTML = "";
	model.data.forEach((item, index) => {
		var button = '<button onclick="action.delete('+index+')">del</button>';
		lst.innerHTML = lst.innerHTML + item['name'] + button + '<br>';
	})
}

state.init = (model) => {
	state.view(model);
}

state.init(model);