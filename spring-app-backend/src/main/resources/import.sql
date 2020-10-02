/* Populate table users */
INSERT INTO users (username, password, create_at) VALUES ('johndoe','password','2018-01-01');
INSERT INTO users (username, password, create_at) VALUES ('karendoe','password','2019-01-01');
INSERT INTO users (username, password, create_at) VALUES ('stevedoe','password','2020-01-01');

/* Populate table tasks */
INSERT INTO tasks (title, description, create_at) VALUES ('Spike - develop a chrome extension to decorate Trellos board directly', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis libero sit amet purus egestas finibus.', '2020-09-04');
INSERT INTO tasks (title, description, status, create_at) VALUES ('Webapp - hook to production database', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis libero sit amet purus egestas finibus.', 'IN PROGRESS', '2020-09-04');
INSERT INTO tasks (title, description, create_at) VALUES ('Webapp - track effort per member displayed', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis libero sit amet purus egestas finibus.', '2020-09-05');
INSERT INTO tasks (title, description, status, create_at) VALUES ('Refactor the rakefile to require tracco only on the tasks that depends on it', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis libero sit amet purus egestas finibus.', 'IN PROGRESS', '2020-09-06');
INSERT INTO tasks (title, description, status, create_at) VALUES ('Webapp - Search for tracked cards', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis libero sit amet purus egestas finibus.', 'DONE', '2020-09-06');
INSERT INTO tasks (title, description, status, create_at) VALUES ('Webapp - Refactor to remove business logic in the views', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis libero sit amet purus egestas finibus.', 'DONE', '2020-09-07');

/* Populate table task_assignees */
INSERT into task_assignees (task_id, user_id) VALUES ( '1', '1' )
INSERT into task_assignees (task_id, user_id) VALUES ( '2', '1' )
INSERT into task_assignees (task_id, user_id) VALUES ( '2', '2' )
INSERT into task_assignees (task_id, user_id) VALUES ( '3', '1' )
INSERT into task_assignees (task_id, user_id) VALUES ( '3', '2' )
INSERT into task_assignees (task_id, user_id) VALUES ( '3', '3' )
INSERT into task_assignees (task_id, user_id) VALUES ( '6', '1' )
