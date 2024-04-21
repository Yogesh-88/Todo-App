-- data.sql

-- First five records remain unchanged
INSERT INTO Todo (id, username, description, target_date, done) 
VALUES (1, 'john_doe', 'Finish project report', '2024-04-22', false);

INSERT INTO Todo (id, username, description, target_date, done) 
VALUES (2, 'jane_smith', 'Prepare presentation slides', '2024-04-23', false);

INSERT INTO Todo (id, username, description, target_date, done) 
VALUES (3, 'alex_jones', 'Attend team meeting', '2024-04-24', true);

INSERT INTO Todo (id, username, description, target_date, done) 
VALUES (4, 'emma_wilson', 'Review code changes', '2024-04-25', false);

INSERT INTO Todo (id, username, description, target_date, done) 
VALUES (5, 'michael_davis', 'Complete sprint tasks', '2024-04-26', false);

-- Update username to 'yogesh' for the next six records
INSERT INTO Todo (id, username, description, target_date, done) 
VALUES (6, 'yogesh', 'Write documentation', '2024-04-27', false);

INSERT INTO Todo (id, username, description, target_date, done) 
VALUES (7, 'yogesh', 'Test application functionality', '2024-04-28', false);

INSERT INTO Todo (id, username, description, target_date, done) 
VALUES (8, 'yogesh', 'Deploy application to production', '2024-04-29', false);

INSERT INTO Todo (id, username, description, target_date, done) 
VALUES (9, 'yogesh', 'Hold client meeting', '2024-04-30', true);

INSERT INTO Todo (id, username, description, target_date, done) 
VALUES (10, 'yogesh', 'Update user interface', '2024-05-01', false);

