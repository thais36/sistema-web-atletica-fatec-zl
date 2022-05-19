create database projetoatletica;

use projetoatletica;

create table campus (
	id_campus int auto_increment primary key,
    nome varchar(255) not null, 
    endereco varchar(255) not null, 
    email varchar(255) not null, 
    telefones varchar(255) not null, 
    cursos int not null,
    foreign key(cursos) references curso(id_curso)
);

create table atletica (
	id_atletica int auto_increment primary key,
    nome varchar(255) not null, 
    apelido varchar(255) not null, 
    logo varchar(255) not null, 
    data_fundacao date not null, 
    #entidade associativa
    modalidades int not null,
    foreign key(modalidades) references modalidade_esportiva(id_modalidade)
);

create table modalidade_esportiva (
	id_modalidade int auto_increment primary key,
    nome varchar(255) not null, 
    genero varchar(255) not null, 
    tipo varchar(255) not null, 
    equipamento varchar(255) not null 
    #membros?
);

create table curso (
	id_curso int auto_increment primary key,
	nome varchar(255) not null,
	turma varchar(255) not null,
	turno varchar(255) not null,
	inicio varchar(255) not null,
	termino varchar(255) not null
);

create table membro (
	id_membro int auto_increment primary key,
	cpf int (255) not null,
    nome varchar (255) not null,
    email varchar (255) not null,
    telefone varchar (255) not null,
    data_nascimento date not null,
    curso int not null,
    modalidade int not null, 
    foreign key (id_curso) references curso(id_curso),
    foreign key (modalidade) references modalidade_esportiva(id_modalidade)
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
    foreign key(inscricao) references inscricao(id_incricao)
);

create table cadastro_comunidade(  
	cpf varchar(255) primary key,
    nome varchar(255) not null,
    data_nascimento date not null, 
    email varchar(255) not null, 
    telefone varchar(255) not null, 
    endereco varchar(255) not null, 
    como_soube_evento varchar(255) not null 
);

create table cadastro_membro (
	id_membro int not null, 
    foreign key (id_membro) references membro(id_membro)
);

create table inscricao (
	id_inscricao int auto_increment primary key, 
    data_inicio date not null,
    data_fim date not null, 
    valor_unitario double not null, 
    forma_de_pagamento varchar(250) not null,
	cliente int not null, 
    foreign key(cliente) references cadastro_comunidade(cpf)
    #foreign key(cliente) references cadastro_membro(id_membro)
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


    
    
    