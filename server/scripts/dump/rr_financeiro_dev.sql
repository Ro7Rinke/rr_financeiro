--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1
-- Dumped by pg_dump version 15.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categoria; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categoria (
    id integer NOT NULL,
    nome character varying(40) NOT NULL,
    descricao character varying(200),
    ativo boolean NOT NULL
);


ALTER TABLE public.categoria OWNER TO postgres;

--
-- Name: categoria_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categoria_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categoria_id_seq OWNER TO postgres;

--
-- Name: categoria_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categoria_id_seq OWNED BY public.categoria.id;


--
-- Name: conta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.conta (
    id integer NOT NULL,
    senha character varying(60) NOT NULL,
    email character varying(320) NOT NULL,
    nome character varying(40) NOT NULL
);


ALTER TABLE public.conta OWNER TO postgres;

--
-- Name: conta_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.conta_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.conta_id_seq OWNER TO postgres;

--
-- Name: conta_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.conta_id_seq OWNED BY public.conta.id;


--
-- Name: lancamento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lancamento (
    id integer NOT NULL,
    idconta integer NOT NULL,
    idusuario integer NOT NULL,
    nome character varying(40) NOT NULL,
    descricao character varying(200),
    ativo boolean NOT NULL,
    datainclusao date NOT NULL,
    valortotal numeric(10,2) NOT NULL,
    parcelatotal integer NOT NULL,
    idcategoria integer NOT NULL,
    datalancamento date NOT NULL
);


ALTER TABLE public.lancamento OWNER TO postgres;

--
-- Name: lancamento_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.lancamento_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.lancamento_id_seq OWNER TO postgres;

--
-- Name: lancamento_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.lancamento_id_seq OWNED BY public.lancamento.id;


--
-- Name: parcela; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.parcela (
    id integer NOT NULL,
    idconta integer NOT NULL,
    idusuario integer NOT NULL,
    idlancamento integer NOT NULL,
    dataparcela date NOT NULL,
    parcelaatual integer NOT NULL,
    valorparcela numeric(10,2) NOT NULL,
    datainclusao date NOT NULL,
    ativo boolean NOT NULL
);


ALTER TABLE public.parcela OWNER TO postgres;

--
-- Name: parcela_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.parcela_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.parcela_id_seq OWNER TO postgres;

--
-- Name: parcela_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.parcela_id_seq OWNED BY public.parcela.id;


--
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    id integer NOT NULL,
    idconta integer NOT NULL,
    nome character varying(40) NOT NULL
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- Name: usuario_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuario_id_seq OWNER TO postgres;

--
-- Name: usuario_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuario_id_seq OWNED BY public.usuario.id;


--
-- Name: categoria id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria ALTER COLUMN id SET DEFAULT nextval('public.categoria_id_seq'::regclass);


--
-- Name: conta id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conta ALTER COLUMN id SET DEFAULT nextval('public.conta_id_seq'::regclass);


--
-- Name: lancamento id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lancamento ALTER COLUMN id SET DEFAULT nextval('public.lancamento_id_seq'::regclass);


--
-- Name: parcela id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.parcela ALTER COLUMN id SET DEFAULT nextval('public.parcela_id_seq'::regclass);


--
-- Name: usuario id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id SET DEFAULT nextval('public.usuario_id_seq'::regclass);


--
-- Data for Name: categoria; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categoria (id, nome, descricao, ativo) FROM stdin;
1	Mercado	\N	t
2	Alimenta├º├úo	\N	t
3	Farm├ícia	\N	t
4	Combust├¡vel	\N	t
5	Outros	\N	t
\.


--
-- Data for Name: conta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.conta (id, senha, email, nome) FROM stdin;
4	$2b$10$h6Awt9M3iuUn5xzmYWber.N5tvPsPnYorB4S5hWbLmXMbZ5OqaeGG	gabriel@gabriel.com	Gabriel
5	$2b$10$JlLCes04IxyeQW7gLyNpMO1nMXBN80uPZatfIKxTEppeCKQd4ssMe	teste@teste.com	tester
6	$2b$10$vzSz9Bglnxu.InQTgno6L.AZ4Tvj5dpZVXtxQ432JJgpmbL95w7F2	test@test.com	test
1	$2b$10$vzSz9Bglnxu.InQTgno6L.AZ4Tvj5dpZVXtxQ432JJgpmbL95w7F2	email	teste
2	$2b$10$vzSz9Bglnxu.InQTgno6L.AZ4Tvj5dpZVXtxQ432JJgpmbL95w7F2	teste@mail.com	teste
3	$2b$10$vzSz9Bglnxu.InQTgno6L.AZ4Tvj5dpZVXtxQ432JJgpmbL95w7F2	igor@igor.com	Igor
10	$2b$10$VNQbafC918Z6gXZlUjkIo.ydQF3AhmQJVRA2iZGyJ7rVOtbQHalBO	rocetti@mail.com	Rocetti
11	$2b$10$KnT5VZDtrINp7q0CTILNAO.rtLKy1C8uSPngiWd55dG2dE.o1Iuua	admin@admin.com	Admin
12	$2b$10$Hno3CP8qD53JbTSd0MpOu.gaVY0y34kh5xaWxkOUYL0Boq88/kEIm	abc@abc	abc
\.


--
-- Data for Name: lancamento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lancamento (id, idconta, idusuario, nome, descricao, ativo, datainclusao, valortotal, parcelatotal, idcategoria, datalancamento) FROM stdin;
23	1	1	Fernando auto center		t	2022-07-11	608.00	1	5	2022-07-05
24	1	1	Virtus revis├úo		t	2022-07-11	1500.00	6	5	2022-05-27
25	1	1	Drigasil		t	2022-07-11	347.60	3	3	2022-06-14
26	2	1	teste		t	2022-07-15	50.00	1	3	2022-07-15
27	3	1	Esfirra tabarin		t	2022-07-15	64.88	1	2	2022-07-15
28	5	1	teste		t	2022-07-15	580.00	2	4	2022-07-15
29	5	1	Yuurf		t	2022-07-15	0.66	1	3	2022-07-15
30	5	1	Tgbb		t	2022-07-15	555.55	1	2	2022-07-15
31	5	1	Rfg		t	2022-07-15	5.55	1	5	2022-07-15
32	5	1	Ffgg		t	2022-07-15	3.69	1	1	2022-07-15
33	5	1	Tyuiij		t	2022-07-15	98.80	1	1	2022-07-15
34	5	1	Yuij		t	2022-07-15	66.66	1	5	2022-07-15
35	5	1	Test		t	2022-07-15	0.00	1	5	2022-07-15
36	5	1	F		t	2022-07-15	0.00	1	5	2022-07-15
37	5	1	R		t	2022-07-15	0.00	1	5	2022-07-15
38	5	1	F		t	2022-07-15	0.00	1	5	2022-07-15
39	5	1	G		t	2022-07-15	0.00	1	5	2022-07-15
40	5	1	G		t	2022-07-15	0.00	1	5	2022-07-15
41	10	5	Dom├¡nio		t	2022-07-16	185.00	1	5	2022-07-17
42	10	5	Teste		t	2022-07-16	58.88	1	3	2022-07-16
43	10	5	Teeeesgkk		t	2022-07-16	5866.68	2	1	2022-07-16
44	10	5	Ghiu		t	2022-07-16	22.56	2	3	2022-07-16
46	11	6	Adm		t	2022-07-16	1000.00	1	2	2022-07-16
49	11	6	Resg		t	2022-07-16	9.99	1	5	2022-07-16
50	11	6	Parcelinhas		t	2022-07-16	2580.00	3	1	2022-06-21
52	12	7	Teste abc		t	2022-12-11	55.55	2	3	2022-12-13
\.


--
-- Data for Name: parcela; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.parcela (id, idconta, idusuario, idlancamento, dataparcela, parcelaatual, valorparcela, datainclusao, ativo) FROM stdin;
43	1	1	23	2022-07-05	1	608.00	2022-07-11	t
44	1	1	24	2022-05-27	1	250.00	2022-07-11	t
46	1	1	24	2022-06-27	2	250.00	2022-07-11	t
47	1	1	24	2022-09-27	5	250.00	2022-07-11	t
45	1	1	24	2022-07-27	3	250.00	2022-07-11	t
48	1	1	24	2022-08-27	4	250.00	2022-07-11	t
49	1	1	24	2022-10-27	6	250.00	2022-07-11	t
50	1	1	25	2022-06-14	1	115.86	2022-07-11	t
51	1	1	25	2022-07-14	2	115.87	2022-07-11	t
52	1	1	25	2022-08-14	3	115.87	2022-07-11	t
53	2	1	26	2022-07-15	1	50.00	2022-07-15	t
54	3	1	27	2022-07-15	1	64.88	2022-07-15	t
55	5	1	28	2022-07-15	1	290.00	2022-07-15	t
56	5	1	28	2022-08-15	2	290.00	2022-07-15	t
57	5	1	29	2022-07-15	1	0.66	2022-07-15	t
58	5	1	30	2022-07-15	1	555.55	2022-07-15	t
59	5	1	31	2022-07-15	1	5.55	2022-07-15	t
60	5	1	32	2022-07-15	1	3.69	2022-07-15	t
61	5	1	33	2022-07-15	1	98.80	2022-07-15	t
62	5	1	34	2022-07-15	1	66.66	2022-07-15	t
63	5	1	35	2022-07-15	1	0.00	2022-07-15	t
64	5	1	36	2022-07-15	1	0.00	2022-07-15	t
65	5	1	37	2022-07-15	1	0.00	2022-07-15	t
66	5	1	38	2022-07-15	1	0.00	2022-07-15	t
67	5	1	39	2022-07-15	1	0.00	2022-07-15	t
68	5	1	40	2022-07-15	1	0.00	2022-07-15	t
69	10	5	41	2022-07-17	1	185.00	2022-07-16	t
70	10	5	42	2022-07-16	1	58.88	2022-07-16	t
71	10	5	43	2022-07-16	1	2933.34	2022-07-16	t
72	10	5	43	2022-08-16	2	2933.34	2022-07-16	t
73	10	5	44	2022-07-16	1	11.28	2022-07-16	t
74	10	5	44	2022-08-16	2	11.28	2022-07-16	t
78	11	6	46	2022-07-16	1	1000.00	2022-07-16	t
85	11	6	49	2022-07-16	1	9.99	2022-07-16	t
86	11	6	50	2022-06-21	1	860.00	2022-07-16	t
87	11	6	50	2022-08-21	3	860.00	2022-07-16	t
88	11	6	50	2022-07-21	2	860.00	2022-07-16	t
92	12	7	52	2022-12-13	1	27.77	2022-12-11	t
93	12	7	52	2023-01-13	2	27.78	2022-12-11	t
\.


--
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuario (id, idconta, nome) FROM stdin;
1	1	user
5	10	Rocetti
6	11	Admin
7	12	abc
\.


--
-- Name: categoria_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categoria_id_seq', 5, true);


--
-- Name: conta_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.conta_id_seq', 12, true);


--
-- Name: lancamento_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lancamento_id_seq', 53, true);


--
-- Name: parcela_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.parcela_id_seq', 101, true);


--
-- Name: usuario_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuario_id_seq', 7, true);


--
-- Name: categoria categoria_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_pkey PRIMARY KEY (id);


--
-- Name: conta conta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conta
    ADD CONSTRAINT conta_pkey PRIMARY KEY (id);


--
-- Name: conta email_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conta
    ADD CONSTRAINT email_unique UNIQUE (email);


--
-- Name: lancamento lancamento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lancamento
    ADD CONSTRAINT lancamento_pkey PRIMARY KEY (id);


--
-- Name: parcela parcela_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.parcela
    ADD CONSTRAINT parcela_pkey PRIMARY KEY (id);


--
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);


--
-- Name: lancamento fk_idcategoria; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lancamento
    ADD CONSTRAINT fk_idcategoria FOREIGN KEY (idcategoria) REFERENCES public.categoria(id);


--
-- Name: usuario fk_idconta; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT fk_idconta FOREIGN KEY (idconta) REFERENCES public.conta(id);


--
-- Name: lancamento fk_idconta; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lancamento
    ADD CONSTRAINT fk_idconta FOREIGN KEY (idconta) REFERENCES public.conta(id);


--
-- Name: parcela fk_idconta; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.parcela
    ADD CONSTRAINT fk_idconta FOREIGN KEY (idconta) REFERENCES public.conta(id);


--
-- Name: parcela fk_idlancamento; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.parcela
    ADD CONSTRAINT fk_idlancamento FOREIGN KEY (idlancamento) REFERENCES public.lancamento(id);


--
-- Name: lancamento fk_idusuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lancamento
    ADD CONSTRAINT fk_idusuario FOREIGN KEY (idusuario) REFERENCES public.usuario(id);


--
-- Name: parcela fk_idusuario; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.parcela
    ADD CONSTRAINT fk_idusuario FOREIGN KEY (idusuario) REFERENCES public.usuario(id);


--
-- PostgreSQL database dump complete
--

