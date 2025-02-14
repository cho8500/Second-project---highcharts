create database second_project;
use second_project;

create table stock(
    name varchar(100) not null primary key,
    code varchar(10) not null
);

create table daily_data(
    id int not null primary key auto_increment,
    date date default (current_date),
    name varchar(100) not null,
    code varchar(10) not null,
    url varchar(255) not null,
    score varchar(10) not null,
    foreign key(name) references stock(name)
);

 create table total_result(
    date date default (current_date),
    name varchar(100) not null,
    score varchar(10),
    news_count varchar(10),
    foreign key(name) references stock(name)    
);

create table sise_table(
    date date default (current_date),
    name varchar(100) not null,
    code varchar(10) not null,
    sise varchar(10) not null,
    foreign key(name) references stock(name)
);