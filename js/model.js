// Model
var model = {};

model.data = [
	{'id': 1, 'name': 'Angular js'},
	{'id': 2, 'name': 'Node js'}
];

model.present = (data) => {
	if(data.deleteId) {
		model.data.forEach((item, index) => {
			if(item.id === data.deleteId)
				model.data.splice(index, 1);
		})
	}else if(data.getName){
		model.data.forEach((item) => {
			if(item.id === data.getName)
				state.showEdit(item);
		})
		return;
	}else{
		if(!data.id){
			model.data.push({'id': model.data.length+1, 'name': data.name});
		}
		else{
			model.data.forEach((item, index) => {
				if(item.id === data.id)
					model.data[index] = data;
			})
		}
	}
	state.init(model);
}