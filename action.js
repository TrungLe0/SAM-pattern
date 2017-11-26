// Action
var action = {};

action.save = () => {
	var name = document.getElementById('name').value.trim();
	model.present({'name': name});
	document.getElementById('name').value = "";
};

action.delete = (index) => {
	model.present({'delete': index});
}