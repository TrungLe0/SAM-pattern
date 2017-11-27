// State
var state = {};

var lst = document.getElementById('lst');
state.view = (model) => {
	lst.innerHTML = "";
	var tmp = ('<div><ul>'
		+ model.data.map((item, index) => {
			var buttons = '<button onclick="action.edit('+ item.id +')" class="btn-edit">Edit</button>'
							+'<button onclick="action.delete('+ item.id +')" class="btn-del">Del</button>';
			return ('<li><label>'+ (index + 1) + '/ ' + item["name"] +'</label>'+ buttons +'</li>');
		}).join('')
		+'</ul></div>');
	lst.innerHTML = tmp;
	// model.data.forEach((item, index) => {
	// 	var button = '<button onclick="action.delete('+index+')" class="btn-del">del</button>';
	// 	lst.innerHTML = lst.innerHTML + item['name'] + button + '<br>';
	// })
}

state.showEdit = (model) => {
	document.getElementById('name').value = model.name;
	document.getElementById('id').value = model.id;
	document.getElementById('btn-add').textContent = 'Save';
}

state.init = (model, txtButton) => {
	document.getElementById('btn-add').textContent = 'Add';
	state.view(model);
}

state.init(model);