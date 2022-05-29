create database projetoatletica;

use projetoatletica;

create table campus (
	id_campus int auto_increment primary key,
    nome varchar(255) not null, 
    endereco varchar(255) not null, 
    email varchar(255) not null, 
    telefones varchar(255) not null
);


create table curso (
	id_curso int auto_increment primary key,
	nome varchar(255) not null,
	turma varchar(255) not null,
	turno varchar(255) not null,
	inicio date not null,
	termino date not null
);

create table atletica (
	id_atletica int auto_increment primary key,
    nome varchar(255) not null, 
    apelido varchar(255) not null, 
    logo varchar(255) not null, 
    data_fundacao date not null
);


create table modalidade_esportiva (
	id_modalidade int auto_increment primary key,
    nome varchar(255) not null, 
    genero varchar(255) not null, 
    tipo varchar(255) not null, 
    equipamento varchar(255) 
);

create table membro(
	id_membro int auto_increment primary key,
	cpf varchar (20) not null,
    nome varchar (255) not null,
    email varchar (255) not null,
    telefone varchar (255) not null,
    data_nascimento date not null,
    curso int not null,
    foreign key (curso) references curso(id_curso)
);

create table membro_modalidade(
	membro int not null,
    modalidade int not null,
    foreign key (membro) references membro(id_membro),
    foreign key (modalidade) references modalidade_esportiva(id_modalidade)
);

create table inscricao (
	id_inscricao int auto_increment primary key, 
    data_inicio date not null,
    data_fim date not null, 
    valor_unitario double not null, 
    forma_de_pagamento varchar(250) not null
);

create table eventos (
	id_evento int auto_increment primary key,
    nome varchar(255) not null, 
    data_realizacao date not null, 
    horario_inicio varchar(255) not null, 
    horario_fim varchar(255) not null, 
    localidade varchar(255) not null, 
    orcamento double, 
    inscricao int not null, 
    foreign key(inscricao) references inscricao(id_inscricao)
);

create table caixa (
	id_caixa int auto_increment primary key, 
    evento int not null, 
    total_inscritos int, 
    total_arrecadacao double, 
    tota_despesas double, 
    lucro_liquido double,
    foreign key(evento) references eventos(id_evento)
);


create table cliente_comunidade(  
	cpf varchar(20) primary key,
    nome varchar(255) not null,
    data_nascimento date not null, 
    email varchar(255) not null, 
    telefone varchar(255) not null, 
    endereco varchar(255) not null, 
    como_soube_evento varchar(255) not null 
);

create table cliente_membro (
	id_membro int not null, 
    foreign key (id_membro) references membro(id_membro)
);

create table cliente_inscricao(
	evento_inscricao int not null,
    id_membro int,
    id_comunidade varchar(20),
    foreign key (evento_inscricao) references inscricao(id_inscricao),
    foreign key (id_membro) references cliente_membro(id_membro),
    foreign key (id_comunidade) references cliente_comunidade(cpf)
);

create table curso_campus(
	campus int,
    curso int,
    foreign key(campus) references campus(id_campus),
    foreign key(curso) references curso(id_curso)
);
