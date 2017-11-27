// Model
var model = {};

model.data = [
	{'id': 1, 'name': 'Angular js'},
	{'id': 2, 'name': 'Node js'}
];

model.edit = {};

model.present = (data) => {
	if(data.deleteId) {
		model.data.forEach((item, index) => {
			if(item.id === data.deleteId)
				model.data.splice(index, 1);
		})
	}else if(parseFloat(data.editId)){
		model.data.forEach((item) => {
			if(item.id === data.editId)
				model.edit = item;
		})
	}else{
		if(!parseFloat(data.id)){
			model.data.push({'id': model.data.length+1, 'name': data.name});
		}
		else{
			model.data.forEach((item, index) => {
				if(item.id === parseFloat(data.id))
					model.data[index] = data;
			})
		}
	}
	state.render(model);
}