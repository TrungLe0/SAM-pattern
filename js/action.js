// Action
var action = {};

action.save = (data) => {
	if(data.name)
		model.present({'id': data.id, 'name': data.name});
};

action.delete = (data) => {
	model.present({'deleteId': data});
};

action.edit = (data) => {
	model.present({'editId': data});
}