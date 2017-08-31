var student =require('./student')
var teacher =require('./teacher')
function add(teacherName,students){
	teacher.add(teacherName)

	student.forEach(function(item,index){
		student.add(item)
	})
}

experts.add=add