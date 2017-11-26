// Model
var model = {};

model.data = [
	{'name': 'Angular js'},
	{'name': 'Node js'}
];

model.present = (data) => {
	if(data.delete !== undefined) {
		model.data.splice(data.delete, 1);
	}else{
		model.data.push(data);
	}
	state.init(model);
}