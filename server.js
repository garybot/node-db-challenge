const express = require('express');
const Projects = require('./projects/project-model.js');
const server = express();

server.use(express.json());

server.post('/resources', async (req, res) => {
	try {
		await Projects.addResource(req.body);
		res.status(201).json({ message: "Successfully added resource."});
	} catch (err) {
		res.status(500).json({ message: "Failed to add resouce."});
	}
});

server.get('/resources', async (req, res) => {
	try {
		const resources = await Projects.getResources();
		res.status(200).json(resources);
	} catch (err) {
		res.status(500).json({ message: "Failed to retrieve resouces."});
	}
});

server.post('/projects', async (req, res) => {
	try {
		await Projects.addProject(req.body);
		res.status(201).json({ message: "Successfully added project."});
	} catch (err) {
		res.status(500).json({ message: "Failed to add resource.", error: err});
	}
});

server.get('/projects', async (req, res) => {
	try {
		const projects = await Projects.getProjects();
		res.status(200).json(projects);
	} catch (err) {
		res.status(500).json({ message: "Failed to retrieve projects."});
	}
});

server.post('/tasks', async (req, res) => {
	try {
		await Projects.addTask(req.body);
		res.status(201).json({ message: "Successfully added task."});
	} catch (err) {
		res.status(500).json({ message: "Failed to add task.", error: err});
	}
});

server.get('/tasks', async (req, res) => {
	try {
		const tasks = await Projects.getTasks();
		res.status(200).json(tasks);
	} catch (err) {
		res.status(500).json({ message: "Failed to retrieve tasks."});
	}
});


module.exports = server;