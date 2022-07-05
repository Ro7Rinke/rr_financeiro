create table if not exists Conta (
	id serial primary key not null,
	senha varchar(60) not null,
	email varchar(320) not null,
	nome varchar(40) not null
);

create table if not exists Usuario (
	id serial primary key not null,
	idConta integer not null,
	nome varchar(40) not null,
	constraint fk_idConta foreign key(idConta) references Conta(id)
);

create table if not exists Categoria (
	id serial primary key not null,
	nome varchar(40) not null,
	descricao varchar(200) null,
	ativo boolean not null
);

create table if not exists Tag (
	id serial primary key not null,
	idConta integer not null,
	nome varchar(40) not null,
	descricao varchar(200) null,
	ativo boolean not null,
	constraint fk_idConta foreign key(idConta) references Conta(id)
);

create table if not exists LancamentoPeriodico (
	id serial primary key not null,
	idConta integer not null,
	idUsuario integer not null,
	nome varchar(40) not null,
	descricao varchar(200) null,
	ativo boolean not null,
	dataInclusao date not null,
	valorTotal numeric(10,2) not null,
	parcelaTotal integer not null,
	idCategoria integer not null,
	periodo varchar(40) null,
	dia integer null,
	dataInicio date not null,
	constraint fk_idConta foreign key(idConta) references Conta(id),
	constraint fk_idUsuario foreign key(idUsuario) references Usuario(id),
	constraint fk_idCategoria foreign key(idCategoria) references Categoria(id)
);

create table if not exists Lancamento (
	id serial primary key not null,
	idConta integer not null,
	idUsuario integer not null,
	nome varchar(40) not null,
	descricao varchar(200) null,
	ativo boolean not null,
	dataInclusao date not null,
	valorTotal numeric(10,2) not null,
	parcelaTotal integer not null,
	idCategoria integer not null,
	dataLancamento date not null,
	idLancamentoPeriodico integer null,
	constraint fk_idConta foreign key(idConta) references Conta(id),
	constraint fk_idUsuario foreign key(idUsuario) references Usuario(id),
	constraint fk_idCategoria foreign key(idCategoria) references Categoria(id),
	constraint fk_idLancamentoPeriodico foreign key(idLancamentoPeriodico) references LancamentoPeriodico(id)
);

create table if not exists Parcela (
	id serial primary key not null,
	idConta integer not null,
	idUsuario integer not null,
	idLancamento integer not null,
	dataParcela date not null,
	parcelaAtual integer not null,
	valorParcela numeric(10,2) not null,
	dataInclusao date not null,
	ativo boolean not null,
	constraint fk_idLancamento foreign key(idLancamento) references Lancamento(id),
	constraint fk_idConta foreign key(idConta) references Conta(id),
	constraint fk_idUsuario foreign key(idUsuario) references Usuario(id)
);


create table if not exists Recebimento (
	id serial primary key not null,
	idConta integer not null,
	idUsuario integer not null,
	nome varchar(40) not null,
	descricao varchar(200) null,
	ativo boolean not null,
	dataInclusao date not null,
	valor numeric(10,2) not null,
	dataRecebimento date not null,
	constraint fk_idConta foreign key(idConta) references Conta(id),
	constraint fk_idUsuario foreign key(idUsuario) references Usuario(id)
);

create table if not exists Meta (
	id serial primary key not null,
	idConta integer not null,
	idUsuario integer not null,
	nome varchar(40) not null,
	descricao varchar(200) null,
	ativo boolean not null,
	dataInclusao date not null,
	valor numeric(10,2) not null,
	dataMeta date not null,
	geral boolean not null,
	constraint fk_idConta foreign key(idConta) references Conta(id),
	constraint fk_idUsuario foreign key(idUsuario) references Usuario(id)
);

create table if not exists LancamentoTag (
	idTag integer not null,
	idLancamento integer not null,
	constraint pk_LancamentoTag primary key(idTag, idLancamento),
	constraint fk_idTag foreign key(idTag) references Tag(id),
	constraint fk_idLancamento foreign key(idLancamento) references Lancamento(id)
);









































