const db = require('../data/db-config.js');

function addResource(resource) {
	return db('resources').insert(resource);
}

function getResources() {
	return db('resources');
}

function addProject(project) {
	return db('projects').insert(project);
}

function getProjects() {
	return db('projects');
}

function addTask(task) {
	return db('tasks').insert(task);
}

function getTasks() {
	return db('tasks as t')
			.join('projects as p')
			.select('p.project_name',
					'p.project_description',
					't.id as task_id',
					't.task_description',
					't.notes',
					't.completed')
}

module.exports = {
	addResource,
	getResources,
	addProject,
	getProjects,
	addTask,
	getTasks
}