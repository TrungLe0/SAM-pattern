// Action
var action = {};

action.save = () => {
	var name = document.getElementById('name').value.trim();
	var id = parseFloat(document.getElementById('id').value);
	if(name){
		model.present({'id': id, 'name': name});
		document.getElementById('name').value = "";
		document.getElementById('id').value = "";
	}
	
};

action.delete = (data) => {
	model.present({'deleteId': data});
};

action.edit = (data) => {
	model.present({'getName': data});
}