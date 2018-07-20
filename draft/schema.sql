CREATE TABLE "user" (
  user_id BIGSERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  token TEXT NOT NULL
);

CREATE TABLE event (
  event_id BIGSERIAL PRIMARY KEY,
  created_by BIGINT NOT NULL,
  title VARCHAR(255) NOT NULL,
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL,
  lat DOUBLE PRECISION,
  long DOUBLE PRECISION,
  city VARCHAR(255) NOT NULL,
  street VARCHAR(255) NOT NULL,
  postcode VARCHAR(5) NOT NULL
);

CREATE TABLE participant (
  event_id BIGINT NOT NULL,
  user_id BIGINT NOT NULL,
  PRIMARY KEY (event_id, user_id)
);

CREATE TABLE comment (
  comment_id BIGSERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  reply_to BIGINT,
  user_id BIGINT NOT NULL,
  event_id BIGINT NOT NULL
);

ALTER TABLE event ADD CONSTRAINT event_fk0 FOREIGN KEY (created_by) REFERENCES "user"(user_id);

ALTER TABLE comment ADD CONSTRAINT comment_fk0 FOREIGN KEY (reply_to) REFERENCES comment(comment_id);

ALTER TABLE comment ADD CONSTRAINT comment_fk1 FOREIGN KEY (user_id) REFERENCES "user"(user_id);

ALTER TABLE comment ADD CONSTRAINT comment_fk2 FOREIGN KEY (event_id) REFERENCES event(event_id);

ALTER TABLE participant ADD CONSTRAINT participant_fk1 FOREIGN KEY (user_id) REFERENCES "user"(user_id);
ALTER TABLE participant ADD CONSTRAINT participant_fk2 FOREIGN KEY (event_id) REFERENCES event(event_id);