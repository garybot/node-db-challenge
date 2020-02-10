
exports.up = function(knex) {
	return knex.schema
		.createTable('projects', tbl => {
			tbl.increments();
			tbl.string('project_name', 128).notNullable();
			tbl.string('project_description', 128);
			tbl.boolean('completed').defaultTo(false);
		})
		.createTable('tasks', tbl => {
			tbl.increments();
			tbl.integer('project_id')
				.notNullable()
				.references('projects.id')
	  			.onDelete('CASCADE')
	  			.onUpdate('CASCADE');
			tbl.string('task_description', 128).notNullable();
			tbl.string('notes', 128);
			tbl.boolean('completed').defaultTo(false);
		})
		.createTable('resources', tbl => {
			tbl.increments();
			tbl.string('resource_name', 128).notNullable();
			tbl.string('resource_description', 128);
		})
		.createTable('project_resources', tbl => {
			tbl.integer('project_id')
				.notNullable()
				.references('projects.id')
	  			.onDelete('CASCADE')
	  			.onUpdate('CASCADE');
			tbl.integer('resource_id')
				.notNullable()
				.references('resources.id')
	  			.onDelete('CASCADE')
	  			.onUpdate('CASCADE');
			tbl.primary(['project_id', 'resource_id']);

		})

  
};

exports.down = function(knex) {
  
};
