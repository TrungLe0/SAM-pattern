// View
 var view = {};

 view.form = (data) => {
 	var id =  data.id || 0;
 	var name =  data.name || "";
 	var textBtn = !id ? 'Add':'Save';
 	return (
 		'<input id="id" value="'+ id +'" type="hidden">'
		+'<input id="name" type="text" value="'+ name +'">'
		+'<button id="btn-add" class="btn-add" onclick="action.save('
		+'{\'id\':document.getElementById(\'id\').value, \'name\':document.getElementById(\'name\').value.trim()})">'+textBtn+'</button>');
}

view.listTodo = (model) => {
	return ('<div><ul>'
		+ model.data.map((item, index) => {
			var buttons = '<button onclick="action.edit('+ item.id +')" class="btn-edit">Edit</button>'
							+'<button onclick="action.delete('+ item.id +')" class="btn-del">Del</button>';
			return ('<li><label>'+ (index + 1) + '/ ' + item["name"] +'</label>'+ buttons +'</li>');
		}).join('')
		+'</ul></div>');
}

view.init = (model) => {
	document.getElementById('form').innerHTML = view.form(model.edit);
	document.getElementById('lstTodo').innerHTML = view.listTodo(model);
}

view.init(model);