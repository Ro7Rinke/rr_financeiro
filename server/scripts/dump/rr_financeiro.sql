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
1	senha	email	teste
2	$2b$10$Q/yaS.YZWdPRN.4TRnrb2.eTLVNi2Uw0LitkqrB/GDIOzlPvtFv8K	admin@admin.com	Admin
3	$2b$10$xKgDo553QfJE/Y5Jxy389.1Y89GrSyCpSIWpCg2UGT6rQKHCk7L3.	vienalucia@gmail.com	Viena 
4	$2b$10$3fv7UHWduRLPa5Lc7BHyoODMQLbQjGQBqIzSSzAxYP4hVODs1ACqa	arthurjss.contato@gmail.com	Arthur 
5	$2b$10$xGdmfM5/WoKZQUeoQSjoHOH/97Tf7RH1KkvUo2T/8w8b5LPraom5K	ingrid.sbornian@gmail.com	Ingrid
6	$2b$10$EsZnvOIkKdRkIJtm9qLo7e.4zK2LN540XKGIYsGuthSMvD.Nj9Xmm	raphaelsouza005@gmail.com	Raphael Buzon de Souza 
7	$2b$10$DgtIAlYHF9UgRHsrzx7wsOwxIa8N6ZMB/DHtlqD5ONbdX3RSdytQK	renan.turati@gmail.com	Renan Turati
8	$2b$10$G5D/J2sqXGsiCikBRZeW5OT0XViFhot2j0vZjzITxO5CvsvtlgKOy	ro7rinke@gmail.com	Rinke
9	$2b$10$0GophTYIDyJrLBayCQ3yk.z.akT9AnEQqpe9VnlP0gxwc8ds.Ep42	igor@mail.com	Igor
\.


--
-- Data for Name: lancamento; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lancamento (id, idconta, idusuario, nome, descricao, ativo, datainclusao, valortotal, parcelatotal, idcategoria, datalancamento) FROM stdin;
31	2	2	Dom├¡nio		t	2022-07-16	185.00	1	5	2022-07-18
33	2	2	Servidor		t	2022-07-16	500.00	3	4	2022-07-16
34	3	3	Lanche		t	2022-07-17	219.00	1	2	2022-07-17
1	3	1	Rosa shok Colar		t	2022-07-12	120.00	6	5	2022-05-30
2	3	1	Shopping mogi gua├ºu		t	2022-07-12	114.96	3	5	2022-05-23
3	3	1	Di gasp		t	2022-07-12	269.95	5	5	2022-05-23
4	3	1	Big bom		t	2022-07-12	622.48	1	1	2022-07-10
5	3	1	Di gasp botas		t	2022-07-12	350.10	5	5	2022-06-27
6	3	1	Amazon		t	2022-07-12	76.99	1	5	2022-07-09
7	3	1	Mercado livre		t	2022-07-12	83.72	1	5	2022-07-09
8	3	1	Padaria		t	2022-07-12	52.55	1	2	2022-07-09
9	3	1	Lanche vitor		t	2022-07-12	219.00	1	2	2022-07-09
10	3	1	Big bom		t	2022-07-12	315.84	1	1	2022-07-08
11	3	1	Lanche vitor		t	2022-07-12	216.00	1	2	2022-07-08
12	3	1	Super Vit├│ria		t	2022-07-12	89.03	1	1	2022-07-05
13	3	1	Amazon omo		t	2022-07-12	269.16	3	5	2022-07-02
14	3	1	Pernambucanas lingeries		t	2022-07-12	804.87	3	5	2022-06-30
15	3	1	Farm├ícia droganova		t	2022-07-12	524.48	2	3	2022-06-29
16	3	1	Casa da costura		t	2022-07-12	328.10	2	5	2022-06-23
17	3	1	C A galvao dos santos		t	2022-07-12	280.00	5	5	2022-06-08
18	3	1	Droga raia		t	2022-07-12	414.60	3	3	2022-06-02
19	3	1	Guarda roupa igor		t	2022-07-12	6190.00	10	5	2022-05-29
20	3	1	Bateria astra		t	2022-07-12	279.96	6	5	2022-05-13
21	3	1	Lanche vi		t	2022-07-12	219.00	1	2	2022-07-12
22	3	1	Big bom		t	2022-07-12	455.52	1	1	2022-07-12
24	3	1	Chabeiro		t	2022-07-12	64.00	1	5	2022-07-12
25	3	1	Padaria Firenze 		t	2022-07-12	38.40	1	2	2022-07-12
26	3	1	Raia		t	2022-07-13	103.60	1	3	2022-07-13
27	3	1	Esfirra 		t	2022-07-14	64.50	1	2	2022-07-14
28	3	1	Auge		t	2022-07-14	32.00	1	5	2022-07-14
29	3	1	Maios sanvoove		t	2022-07-14	462.00	2	5	2022-07-14
30	3	1	Lanche		t	2022-07-15	219.00	1	2	2022-07-15
35	3	3	Padaria Firenze 		t	2022-07-17	49.50	1	2	2022-07-17
36	4	4	Gasolina 		t	2022-07-17	100.00	1	4	2022-07-17
37	4	4	Esfirra		t	2022-07-17	46.00	1	2	2022-07-17
40	5	5	Carro		t	2022-07-17	20.00	8	5	2022-07-17
41	3	3	Raia		t	2022-07-17	303.72	2	3	2022-07-17
42	3	3	Smp vale		t	2022-07-17	50.23	1	1	2022-07-17
43	3	3	Raia		t	2022-07-17	79.44	1	3	2022-07-17
44	3	3	Raia		t	2022-07-17	758.31	1	3	2022-07-12
45	6	6	Gasolina 		t	2022-07-17	20.00	1	4	2022-07-17
46	6	6	Nutella		t	2022-07-17	16.97	1	2	2022-07-17
47	6	6	Igor ├⌐ viado		t	2022-07-17	24.00	1	5	2022-07-17
48	6	6	Igor ├⌐ muito gay		t	2022-07-17	24000.00	24	5	2022-07-17
49	6	6	Rivotril para o Igor gay		t	2022-07-17	240.00	10	3	2022-07-17
51	3	3	Raia		t	2022-07-18	218.89	2	3	2022-07-18
52	3	3	Raia		t	2022-07-19	147.92	1	3	2022-07-19
53	3	3	Torneiras		t	2022-07-19	140.00	1	5	2022-07-18
54	3	3	├ülcool Astra 		t	2022-07-19	50.00	1	4	2022-07-19
55	3	3	├ülcool Toyota 		t	2022-07-19	187.00	1	4	2022-07-19
56	3	3	Lanche 		t	2022-07-20	219.00	1	2	2022-07-20
57	4	4	Pau no cu do Igor 		t	2022-07-21	69.69	6	5	2022-07-21
58	4	4	Pau no cu do Igor 		t	2022-07-21	69.69	6	5	2022-07-21
59	3	3	Super Vit├│ria 		t	2022-07-21	181.40	1	1	2022-07-21
60	3	3	Esfirra Tabarin		t	2022-07-21	85.00	1	2	2022-07-20
61	3	3	Big bom 		t	2022-07-24	812.41	1	1	2022-07-24
62	3	3	C&A		t	2022-07-24	47.97	1	5	2022-07-24
63	3	3	 Pernambucana 		t	2022-07-24	71.98	1	5	2022-07-24
64	3	3	Riachuelo 		t	2022-07-24	99.90	1	5	2022-07-24
65	3	3	Tenda		t	2022-07-24	17.49	1	1	2022-07-24
66	3	3	Lanche		t	2022-07-24	219.00	1	2	2022-07-24
67	3	3	Lanche		t	2022-07-24	219.00	1	2	2022-07-24
68	3	3	Auge		t	2022-07-26	166.90	1	5	2022-07-25
69	3	3	Droganova		t	2022-07-26	380.00	1	3	2022-07-26
70	3	3	Coral tintas		t	2022-07-27	75.50	1	5	2022-07-27
72	3	3	Rayane		t	2022-07-27	192.59	1	1	2022-07-16
73	3	3	Rayane		t	2022-07-27	776.40	1	1	2022-07-02
74	3	3	Fae		t	2022-07-27	229.05	1	5	2022-07-27
75	3	3	Auto center toyota		t	2022-07-27	608.00	1	5	2022-07-07
76	3	3	Alpha bras		t	2022-07-27	699.00	6	5	2022-07-27
77	3	3	├ülcool Civic 		t	2022-07-28	141.04	1	4	2022-07-28
78	3	3	Lanche		t	2022-07-28	278.00	1	2	2022-07-26
79	3	3	Alpha bras		t	2022-07-28	20.60	1	5	2022-07-27
80	3	3	Raia		t	2022-07-28	161.58	2	3	2022-07-28
82	3	3	Gasolina Virtus		t	2022-07-29	233.03	1	4	2022-07-29
83	3	3	Bruscos cabelo		t	2022-07-29	142.00	1	5	2022-07-29
84	3	3	Big bom 		t	2022-07-31	729.00	1	1	2022-07-30
85	3	3	Smp vale		t	2022-07-31	27.69	1	1	2022-07-30
86	3	3	Lanche 		t	2022-07-31	219.00	1	2	2022-07-30
87	3	3	Super Vit├│ria 		t	2022-07-31	192.00	1	1	2022-07-29
88	3	3	Golfinho		t	2022-07-31	235.00	1	5	2022-07-14
89	3	3	Auge		t	2022-08-02	196.00	1	5	2022-08-02
90	3	3	Giprdano		t	2022-08-03	334.00	1	5	2022-08-03
91	3	3	Lanche		t	2022-08-03	219.00	1	2	2022-08-02
92	3	3	Padaria Firenze 		t	2022-08-03	34.40	1	2	2022-08-03
93	3	3	Art ervas		t	2022-08-05	218.50	1	5	2022-08-05
94	3	3	Big bom		t	2022-08-05	297.97	1	1	2022-08-04
95	3	3	Boticario		t	2022-08-05	452.50	2	5	2022-08-04
96	3	3	├ülcool Civic 		t	2022-08-05	100.00	1	4	2022-08-04
97	3	3	Lanche 		t	2022-08-07	219.00	1	2	2022-08-06
98	3	3	Big bom 		t	2022-08-07	926.29	1	1	2022-08-06
99	3	3	Di gaspi		t	2022-08-08	327.97	5	5	2022-08-08
100	3	3	Raia		t	2022-08-09	46.25	1	3	2022-08-09
101	3	3	Carol		t	2022-08-09	409.00	1	5	2022-08-08
102	3	3	Lanche 		t	2022-08-09	219.00	1	2	2022-08-09
103	3	3	M├íquina de lavar 		t	2022-08-09	2005.60	10	5	2022-07-26
104	3	3	Esfirras tabarim		t	2022-08-11	64.50	1	2	2022-08-11
105	3	3	Padaria Firenze 		t	2022-08-11	28.50	1	2	2022-08-11
106	3	3	Droganova		t	2022-08-11	151.70	1	3	2022-08-11
107	3	3	Raia		t	2022-08-11	209.66	1	3	2022-08-11
108	3	3	Golfinho		t	2022-08-11	235.00	1	5	2022-08-05
109	3	3	Iptu casa		t	2022-08-11	76.00	1	5	2022-08-10
110	3	3	Coc unicamp		t	2022-08-11	65.00	1	5	2022-08-10
111	3	3	Coc formatura		t	2022-08-11	175.00	1	5	2022-08-10
112	3	3	Laine d.vera		t	2022-08-11	410.00	1	5	2022-08-10
114	3	3	Big bom 		t	2022-08-11	461.69	1	1	2022-08-11
115	3	3	Rayane		t	2022-08-11	1154.26	1	1	2022-08-11
116	3	3	Lanche 		t	2022-08-12	219.00	1	2	2022-08-12
117	3	3	Toyota gasolina 		t	2022-08-12	202.01	1	4	2022-08-12
118	3	3	Rayane		t	2022-08-14	609.88	1	1	2022-08-14
119	3	3	Pizza bedroch		t	2022-08-14	86.00	1	2	2022-08-13
120	3	3	Lanche 		t	2022-08-14	219.00	1	2	2022-08-14
121	3	3	HP lampadas		t	2022-08-14	10.50	1	5	2022-08-13
122	3	3	Bateria virtus		t	2022-08-15	540.00	3	5	2022-08-15
123	3	3	Lanche 		t	2022-08-16	219.00	1	2	2022-08-16
124	3	3	Dentista Maur├¡cio 		t	2022-08-16	3900.00	6	5	2022-08-16
125	3	3	Suportes		t	2022-08-16	133.46	1	5	2022-08-16
126	3	3	Raia		t	2022-08-17	363.47	3	3	2022-08-17
127	3	3	Toy Virt Gasolina		t	2022-08-17	444.00	1	4	2022-08-17
128	3	3	Padaria Firenze 		t	2022-08-17	23.00	1	2	2022-08-17
129	3	3	Droganova		t	2022-08-17	17.40	1	3	2022-08-17
130	3	3	Auge		t	2022-08-17	48.90	1	5	2022-08-17
131	3	3	Rais		t	2022-08-17	17.60	1	5	2022-08-17
132	3	3	Virtus lavagem		t	2022-08-18	70.00	1	5	2022-08-17
133	3	3	HP toyota vidro		t	2022-08-18	200.00	1	5	2022-08-18
134	3	3	Big bom 		t	2022-08-19	300.77	1	1	2022-08-19
135	3	3	Art Ervas		t	2022-08-19	32.50	1	3	2022-08-19
136	3	3	Ramon 		t	2022-08-19	77.20	1	5	2022-08-19
137	3	3	Lanche 		t	2022-08-20	276.00	1	2	2022-08-20
139	3	3	Smp Vale		t	2022-08-21	18.72	1	1	2022-08-20
140	3	3	Smp Vale		t	2022-08-21	32.75	1	1	2022-08-21
141	3	3	Rayane		t	2022-08-21	393.27	1	1	2022-08-20
142	3	3	Lanche 		t	2022-08-21	219.00	1	2	2022-08-21
143	3	3	G├ís 		t	2022-08-22	110.00	1	5	2022-08-22
144	3	3	Lanche 		t	2022-08-23	219.00	1	2	2022-08-23
145	3	3	 Padaria Rainha		t	2022-08-23	67.50	1	2	2022-08-23
146	3	3	Raia		t	2022-08-23	314.20	2	3	2022-08-23
147	3	3	Padaria Firenze 		t	2022-08-24	30.20	1	2	2022-08-24
148	3	3	Ramon		t	2022-08-24	28.70	1	5	2022-08-24
149	3	3	Madri		t	2022-08-24	143.00	1	5	2022-08-24
150	3	3	├ülcool Toyota 		t	2022-08-25	136.00	1	4	2022-08-24
151	3	3	Raia		t	2022-08-25	107.41	1	3	2022-08-25
152	3	3	Big bom 		t	2022-08-25	239.42	1	1	2022-08-25
153	3	3	Csa papel 		t	2022-08-25	51.00	1	5	2022-08-25
154	3	3	Chaves g.roupa		t	2022-08-26	40.00	1	5	2022-08-26
155	3	3	Lanche 		t	2022-08-26	219.00	1	2	2022-08-25
156	3	3	Smp vale		t	2022-09-05	83.12	1	1	2022-09-03
157	3	3	Tabarin		t	2022-09-05	38.00	1	2	2022-09-01
158	3	3	Lanche 		t	2022-09-05	219.00	1	2	2022-09-01
159	3	3	Lanche 		t	2022-09-05	219.00	1	2	2022-09-03
160	3	3	Raia		t	2022-09-05	275.80	1	3	2022-09-02
162	3	3	Raia		t	2022-09-05	325.14	2	3	2022-09-05
163	3	3	Lanche 		t	2022-09-06	219.00	1	2	2022-09-06
164	3	3	Gasolina toyota		t	2022-09-08	180.00	1	4	2022-09-07
165	3	3	Lanche 		t	2022-09-08	219.00	1	2	2022-09-08
166	3	3	Pix renan		t	2022-09-08	20.00	1	5	2022-09-08
167	3	3	Pix rafa		t	2022-09-08	50.00	1	5	2022-09-08
168	3	3	Super Vit├│ria 		t	2022-09-08	140.34	1	1	2022-09-08
169	3	3	Big bom 		t	2022-09-09	404.78	1	1	2022-09-09
171	3	3	Rayane 		t	2022-09-09	856.14	1	1	2022-09-03
172	3	3	Golfinho		t	2022-09-09	235.00	1	5	2022-09-09
173	3	3	Golfinho massagista 		t	2022-09-09	30.00	1	5	2022-09-09
174	3	3	Lanche 		t	2022-09-10	219.00	1	2	2022-09-09
175	3	3	Semp Vale 		t	2022-09-11	101.55	1	1	2022-09-11
176	3	3	Big bom 		t	2022-09-11	575.55	1	1	2022-09-11
177	3	3	Lanche 		t	2022-09-13	219.00	1	2	2022-09-13
178	3	3	Raia		t	2022-09-13	743.07	3	3	2022-09-13
179	3	3	Padaria rainha		t	2022-12-14	92.15	1	2	2022-12-14
180	3	3	Big bom		t	2022-12-14	298.78	1	1	2022-12-14
181	3	3	Raia 		t	2022-12-14	232.14	1	3	2022-12-14
182	3	3	Toyota gasolina 		t	2022-12-14	197.04	1	4	2022-12-14
183	3	3	Vit├│ria super		t	2022-12-14	39.81	1	1	2022-12-14
184	3	3	Lanche Vi 		t	2022-12-16	219.00	1	2	2022-12-16
185	3	3	Regina presentes		t	2022-12-16	103.04	1	5	2022-12-16
186	3	3	Art ervas		t	2022-12-20	225.00	1	5	2022-12-19
187	3	3	Dom Bosco 		t	2022-12-20	250.00	1	5	2022-12-19
188	3	3	Casa papel 		t	2022-12-20	173.00	1	5	2022-12-19
\.


--
-- Data for Name: parcela; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.parcela (id, idconta, idusuario, idlancamento, dataparcela, parcelaatual, valorparcela, datainclusao, ativo) FROM stdin;
75	2	2	31	2022-07-18	1	185.00	2022-07-16	t
88	2	2	33	2022-07-16	1	166.66	2022-07-16	t
89	2	2	33	2022-08-16	2	166.67	2022-07-16	t
90	2	2	33	2022-09-16	3	166.67	2022-07-16	t
91	3	3	34	2022-07-17	1	219.00	2022-07-17	t
1	3	1	1	2022-05-29	1	20.00	2022-07-11	t
2	3	1	1	2022-06-29	2	20.00	2022-07-11	t
3	3	1	1	2022-09-29	5	20.00	2022-07-11	t
4	3	1	1	2022-07-29	3	20.00	2022-07-11	t
5	3	1	1	2022-08-29	4	20.00	2022-07-11	t
6	3	1	1	2022-10-29	6	20.00	2022-07-11	t
7	3	1	2	2022-05-22	1	38.32	2022-07-11	t
8	3	1	2	2022-07-22	3	38.32	2022-07-11	t
9	3	1	2	2022-06-22	2	38.32	2022-07-11	t
10	3	1	3	2022-05-22	1	53.99	2022-07-11	t
11	3	1	3	2022-06-22	2	53.99	2022-07-11	t
12	3	1	3	2022-07-22	3	53.99	2022-07-11	t
13	3	1	3	2022-08-22	4	53.99	2022-07-11	t
14	3	1	3	2022-09-22	5	53.99	2022-07-11	t
15	3	1	4	2022-07-09	1	622.48	2022-07-11	t
16	3	1	5	2022-06-26	1	70.02	2022-07-11	t
17	3	1	5	2022-07-26	2	70.02	2022-07-11	t
18	3	1	5	2022-10-26	5	70.02	2022-07-11	t
19	3	1	5	2022-08-26	3	70.02	2022-07-11	t
20	3	1	5	2022-09-26	4	70.02	2022-07-11	t
21	3	1	6	2022-07-08	1	76.99	2022-07-11	t
22	3	1	7	2022-07-08	1	83.72	2022-07-11	t
23	3	1	8	2022-07-08	1	52.55	2022-07-11	t
24	3	1	9	2022-07-08	1	219.00	2022-07-11	t
25	3	1	10	2022-07-07	1	315.84	2022-07-11	t
26	3	1	11	2022-07-07	1	216.00	2022-07-11	t
27	3	1	12	2022-07-04	1	89.03	2022-07-11	t
28	3	1	13	2022-07-01	1	89.72	2022-07-11	t
29	3	1	13	2022-09-01	3	89.72	2022-07-11	t
30	3	1	13	2022-08-01	2	89.72	2022-07-11	t
31	3	1	14	2022-06-29	1	268.29	2022-07-11	t
32	3	1	14	2022-07-29	2	268.29	2022-07-11	t
33	3	1	14	2022-08-29	3	268.29	2022-07-11	t
34	3	1	15	2022-06-28	1	262.24	2022-07-11	t
35	3	1	15	2022-07-28	2	262.24	2022-07-11	t
36	3	1	16	2022-06-22	1	164.05	2022-07-11	t
37	3	1	16	2022-07-22	2	164.05	2022-07-11	t
38	3	1	17	2022-06-07	1	56.00	2022-07-11	t
39	3	1	17	2022-07-07	2	56.00	2022-07-11	t
40	3	1	17	2022-08-07	3	56.00	2022-07-11	t
41	3	1	17	2022-09-07	4	56.00	2022-07-11	t
42	3	1	17	2022-10-07	5	56.00	2022-07-11	t
43	3	1	18	2022-06-01	1	138.20	2022-07-11	t
44	3	1	18	2022-08-01	3	138.20	2022-07-11	t
45	3	1	18	2022-07-01	2	138.20	2022-07-11	t
46	3	1	19	2022-05-28	1	619.00	2022-07-11	t
47	3	1	19	2022-06-28	2	619.00	2022-07-11	t
48	3	1	19	2022-07-28	3	619.00	2022-07-11	t
49	3	1	19	2022-08-28	4	619.00	2022-07-11	t
50	3	1	19	2022-09-28	5	619.00	2022-07-11	t
51	3	1	19	2022-10-28	6	619.00	2022-07-11	t
52	3	1	19	2022-11-28	7	619.00	2022-07-11	t
53	3	1	19	2023-01-28	9	619.00	2022-07-11	t
54	3	1	19	2022-12-28	8	619.00	2022-07-11	t
55	3	1	19	2023-02-28	10	619.00	2022-07-11	t
56	3	1	20	2022-05-12	1	46.66	2022-07-11	t
57	3	1	20	2022-06-12	2	46.66	2022-07-11	t
58	3	1	20	2022-07-12	3	46.66	2022-07-11	t
59	3	1	20	2022-09-12	5	46.66	2022-07-11	t
60	3	1	20	2022-10-12	6	46.66	2022-07-11	t
61	3	1	20	2022-08-12	4	46.66	2022-07-11	t
62	3	1	21	2022-07-12	1	219.00	2022-07-12	t
63	3	1	22	2022-07-12	1	455.52	2022-07-12	t
67	3	1	24	2022-07-12	1	64.00	2022-07-12	t
68	3	1	25	2022-07-12	1	38.40	2022-07-12	t
69	3	1	26	2022-07-13	1	103.60	2022-07-13	t
70	3	1	27	2022-07-13	1	64.50	2022-07-13	t
71	3	1	28	2022-07-14	1	32.00	2022-07-14	t
72	3	1	29	2022-07-14	1	231.00	2022-07-14	t
73	3	1	29	2022-08-14	2	231.00	2022-07-14	t
74	3	1	30	2022-07-14	1	219.00	2022-07-14	t
92	3	3	35	2022-07-17	1	49.50	2022-07-17	t
93	4	4	36	2022-07-17	1	100.00	2022-07-17	t
94	4	4	37	2022-07-17	1	46.00	2022-07-17	t
104	5	5	40	2022-07-17	1	2.50	2022-07-17	t
105	5	5	40	2022-08-17	2	2.50	2022-07-17	t
106	5	5	40	2022-11-17	5	2.50	2022-07-17	t
107	5	5	40	2023-01-17	7	2.50	2022-07-17	t
108	5	5	40	2022-10-17	4	2.50	2022-07-17	t
109	5	5	40	2022-09-17	3	2.50	2022-07-17	t
110	5	5	40	2022-12-17	6	2.50	2022-07-17	t
111	5	5	40	2023-02-17	8	2.50	2022-07-17	t
112	3	3	41	2022-07-17	1	151.86	2022-07-17	t
113	3	3	41	2022-08-17	2	151.86	2022-07-17	t
114	3	3	42	2022-07-17	1	50.23	2022-07-17	t
115	3	3	43	2022-07-17	1	79.44	2022-07-17	t
116	3	3	44	2022-07-12	1	758.31	2022-07-17	t
117	6	6	45	2022-07-17	1	20.00	2022-07-17	t
118	6	6	46	2022-07-17	1	16.97	2022-07-17	t
119	6	6	47	2022-07-17	1	24.00	2022-07-17	t
120	6	6	48	2022-07-17	1	1000.00	2022-07-17	t
121	6	6	48	2023-05-17	11	1000.00	2022-07-17	t
122	6	6	48	2023-06-17	12	1000.00	2022-07-17	t
123	6	6	48	2023-07-17	13	1000.00	2022-07-17	t
124	6	6	48	2023-08-17	14	1000.00	2022-07-17	t
125	6	6	48	2023-09-17	15	1000.00	2022-07-17	t
126	6	6	48	2023-10-17	16	1000.00	2022-07-17	t
127	6	6	48	2023-11-17	17	1000.00	2022-07-17	t
128	6	6	48	2023-12-17	18	1000.00	2022-07-17	t
129	6	6	48	2024-01-17	19	1000.00	2022-07-17	t
130	6	6	48	2024-02-17	20	1000.00	2022-07-17	t
131	6	6	48	2024-03-17	21	1000.00	2022-07-17	t
132	6	6	48	2024-04-17	22	1000.00	2022-07-17	t
133	6	6	48	2024-05-17	23	1000.00	2022-07-17	t
134	6	6	48	2024-06-17	24	1000.00	2022-07-17	t
135	6	6	48	2022-08-17	2	1000.00	2022-07-17	t
141	6	6	48	2022-09-17	3	1000.00	2022-07-17	t
137	6	6	48	2022-12-17	6	1000.00	2022-07-17	t
139	6	6	48	2023-03-17	9	1000.00	2022-07-17	t
138	6	6	48	2023-01-17	7	1000.00	2022-07-17	t
140	6	6	48	2023-04-17	10	1000.00	2022-07-17	t
144	6	6	49	2022-07-17	1	24.00	2022-07-17	t
145	6	6	49	2022-08-17	2	24.00	2022-07-17	t
143	6	6	48	2023-02-17	8	1000.00	2022-07-17	t
146	6	6	49	2022-10-17	4	24.00	2022-07-17	t
147	6	6	49	2022-09-17	3	24.00	2022-07-17	t
148	6	6	49	2022-11-17	5	24.00	2022-07-17	t
149	6	6	49	2022-12-17	6	24.00	2022-07-17	t
150	6	6	49	2023-01-17	7	24.00	2022-07-17	t
151	6	6	49	2023-02-17	8	24.00	2022-07-17	t
152	6	6	49	2023-03-17	9	24.00	2022-07-17	t
153	6	6	49	2023-04-17	10	24.00	2022-07-17	t
142	6	6	48	2022-10-17	4	1000.00	2022-07-17	t
136	6	6	48	2022-11-17	5	1000.00	2022-07-17	t
156	3	3	51	2022-07-18	1	109.44	2022-07-18	t
157	3	3	51	2022-08-18	2	109.45	2022-07-18	t
158	3	3	52	2022-07-19	1	147.92	2022-07-19	t
159	3	3	53	2022-07-18	1	140.00	2022-07-19	t
160	3	3	54	2022-07-19	1	50.00	2022-07-19	t
161	3	3	55	2022-07-19	1	187.00	2022-07-19	t
162	3	3	56	2022-07-19	1	219.00	2022-07-19	t
163	4	4	57	2022-07-21	1	11.59	2022-07-21	t
164	4	4	57	2022-08-21	2	11.62	2022-07-21	t
165	4	4	57	2022-10-21	4	11.62	2022-07-21	t
166	4	4	57	2022-09-21	3	11.62	2022-07-21	t
167	4	4	57	2022-11-21	5	11.62	2022-07-21	t
168	4	4	57	2022-12-21	6	11.62	2022-07-21	t
169	4	4	58	2022-07-21	1	11.59	2022-07-21	t
170	4	4	58	2022-08-21	2	11.62	2022-07-21	t
171	4	4	58	2022-09-21	3	11.62	2022-07-21	t
172	4	4	58	2022-10-21	4	11.62	2022-07-21	t
173	4	4	58	2022-11-21	5	11.62	2022-07-21	t
174	4	4	58	2022-12-21	6	11.62	2022-07-21	t
175	3	3	59	2022-07-21	1	181.40	2022-07-21	t
176	3	3	60	2022-07-20	1	85.00	2022-07-21	t
177	3	3	61	2022-07-23	1	812.41	2022-07-23	t
178	3	3	62	2022-07-24	1	47.97	2022-07-24	t
179	3	3	63	2022-07-24	1	71.98	2022-07-24	t
180	3	3	64	2022-07-24	1	99.90	2022-07-24	t
181	3	3	65	2022-07-24	1	17.49	2022-07-24	t
182	3	3	66	2022-07-24	1	219.00	2022-07-24	t
183	3	3	67	2022-07-24	1	219.00	2022-07-24	t
184	3	3	68	2022-07-25	1	166.90	2022-07-26	t
185	3	3	69	2022-07-26	1	380.00	2022-07-26	t
186	3	3	70	2022-07-27	1	75.50	2022-07-27	t
188	3	3	72	2022-07-16	1	192.59	2022-07-27	t
189	3	3	73	2022-07-02	1	776.40	2022-07-27	t
190	3	3	74	2022-07-27	1	229.05	2022-07-27	t
191	3	3	75	2022-07-07	1	608.00	2022-07-27	t
192	3	3	76	2022-07-27	1	116.50	2022-07-27	t
193	3	3	76	2022-08-27	2	116.50	2022-07-27	t
194	3	3	76	2022-10-27	4	116.50	2022-07-27	t
195	3	3	76	2022-11-27	5	116.50	2022-07-27	t
196	3	3	76	2022-12-27	6	116.50	2022-07-27	t
197	3	3	76	2022-09-27	3	116.50	2022-07-27	t
198	3	3	77	2022-07-28	1	141.04	2022-07-28	t
199	3	3	78	2022-07-26	1	278.00	2022-07-28	t
200	3	3	79	2022-07-27	1	20.60	2022-07-28	t
201	3	3	80	2022-07-28	1	80.79	2022-07-28	t
202	3	3	80	2022-08-28	2	80.79	2022-07-28	t
204	3	3	82	2022-07-29	1	233.03	2022-07-29	t
205	3	3	83	2022-07-29	1	142.00	2022-07-29	t
206	3	3	84	2022-07-30	1	729.00	2022-07-31	t
207	3	3	85	2022-07-30	1	27.69	2022-07-31	t
208	3	3	86	2022-07-30	1	219.00	2022-07-31	t
209	3	3	87	2022-07-29	1	192.00	2022-07-31	t
210	3	3	88	2022-07-14	1	235.00	2022-07-31	t
211	3	3	89	2022-08-02	1	196.00	2022-08-02	t
212	3	3	90	2022-08-02	1	334.00	2022-08-02	t
213	3	3	91	2022-08-01	1	219.00	2022-08-02	t
214	3	3	92	2022-08-03	1	34.40	2022-08-03	t
215	3	3	93	2022-08-05	1	218.50	2022-08-05	t
216	3	3	94	2022-08-04	1	297.97	2022-08-05	t
217	3	3	95	2022-08-04	1	226.25	2022-08-05	t
218	3	3	95	2022-09-04	2	226.25	2022-08-05	t
219	3	3	96	2022-08-04	1	100.00	2022-08-05	t
220	3	3	97	2022-08-05	1	219.00	2022-08-06	t
221	3	3	98	2022-08-05	1	926.29	2022-08-06	t
222	3	3	99	2022-08-07	1	65.61	2022-08-07	t
223	3	3	99	2022-09-07	2	65.59	2022-08-07	t
224	3	3	99	2022-12-07	5	65.59	2022-08-07	t
226	3	3	99	2022-10-07	3	65.59	2022-08-07	t
225	3	3	99	2022-11-07	4	65.59	2022-08-07	t
227	3	3	100	2022-08-09	1	46.25	2022-08-09	t
228	3	3	101	2022-08-08	1	409.00	2022-08-09	t
229	3	3	102	2022-08-09	1	219.00	2022-08-09	t
230	3	3	103	2022-07-26	1	200.56	2022-08-09	t
231	3	3	103	2022-09-26	3	200.56	2022-08-09	t
232	3	3	103	2022-08-26	2	200.56	2022-08-09	t
233	3	3	103	2022-12-26	6	200.56	2022-08-09	t
234	3	3	103	2023-03-26	9	200.56	2022-08-09	t
235	3	3	103	2023-04-26	10	200.56	2022-08-09	t
236	3	3	103	2023-01-26	7	200.56	2022-08-09	t
237	3	3	103	2023-02-26	8	200.56	2022-08-09	t
238	3	3	103	2022-10-26	4	200.56	2022-08-09	t
239	3	3	103	2022-11-26	5	200.56	2022-08-09	t
240	3	3	104	2022-08-10	1	64.50	2022-08-10	t
241	3	3	105	2022-08-10	1	28.50	2022-08-10	t
242	3	3	106	2022-08-10	1	151.70	2022-08-10	t
243	3	3	107	2022-08-10	1	209.66	2022-08-10	t
244	3	3	108	2022-08-04	1	235.00	2022-08-10	t
245	3	3	109	2022-08-09	1	76.00	2022-08-10	t
246	3	3	110	2022-08-09	1	65.00	2022-08-10	t
247	3	3	111	2022-08-09	1	175.00	2022-08-10	t
248	3	3	112	2022-08-09	1	410.00	2022-08-10	t
250	3	3	114	2022-08-11	1	461.69	2022-08-11	t
251	3	3	115	2022-08-11	1	1154.26	2022-08-11	t
252	3	3	116	2022-08-11	1	219.00	2022-08-11	t
253	3	3	117	2022-08-12	1	202.01	2022-08-12	t
254	3	3	118	2022-08-13	1	609.88	2022-08-13	t
255	3	3	119	2022-08-12	1	86.00	2022-08-13	t
256	3	3	120	2022-08-13	1	219.00	2022-08-13	t
257	3	3	121	2022-08-12	1	10.50	2022-08-13	t
258	3	3	122	2022-08-15	1	180.00	2022-08-15	t
259	3	3	122	2022-10-15	3	180.00	2022-08-15	t
260	3	3	122	2022-09-15	2	180.00	2022-08-15	t
261	3	3	123	2022-08-15	1	219.00	2022-08-15	t
262	3	3	124	2022-08-16	1	650.00	2022-08-16	t
263	3	3	124	2022-10-16	3	650.00	2022-08-16	t
264	3	3	124	2022-09-16	2	650.00	2022-08-16	t
265	3	3	124	2022-12-16	5	650.00	2022-08-16	t
266	3	3	124	2022-11-16	4	650.00	2022-08-16	t
267	3	3	124	2023-01-16	6	650.00	2022-08-16	t
268	3	3	125	2022-08-16	1	133.46	2022-08-16	t
269	3	3	126	2022-08-16	1	121.15	2022-08-16	t
270	3	3	126	2022-09-16	2	121.16	2022-08-16	t
271	3	3	126	2022-10-16	3	121.16	2022-08-16	t
272	3	3	127	2022-08-17	1	444.00	2022-08-17	t
273	3	3	128	2022-08-17	1	23.00	2022-08-17	t
274	3	3	129	2022-08-17	1	17.40	2022-08-17	t
275	3	3	130	2022-08-17	1	48.90	2022-08-17	t
276	3	3	131	2022-08-17	1	17.60	2022-08-17	t
277	3	3	132	2022-08-17	1	70.00	2022-08-18	t
278	3	3	133	2022-08-18	1	200.00	2022-08-18	t
279	3	3	134	2022-08-19	1	300.77	2022-08-19	t
280	3	3	135	2022-08-19	1	32.50	2022-08-19	t
281	3	3	136	2022-08-19	1	77.20	2022-08-19	t
282	3	3	137	2022-08-19	1	276.00	2022-08-19	t
284	3	3	139	2022-08-20	1	18.72	2022-08-21	t
285	3	3	140	2022-08-21	1	32.75	2022-08-21	t
286	3	3	141	2022-08-20	1	393.27	2022-08-21	t
287	3	3	142	2022-08-21	1	219.00	2022-08-21	t
288	3	3	143	2022-08-22	1	110.00	2022-08-22	t
289	3	3	144	2022-08-22	1	219.00	2022-08-22	t
290	3	3	145	2022-08-23	1	67.50	2022-08-23	t
291	3	3	146	2022-08-23	1	157.10	2022-08-23	t
292	3	3	146	2022-09-23	2	157.10	2022-08-23	t
293	3	3	147	2022-08-24	1	30.20	2022-08-24	t
294	3	3	148	2022-08-24	1	28.70	2022-08-24	t
295	3	3	149	2022-08-24	1	143.00	2022-08-24	t
296	3	3	150	2022-08-24	1	136.00	2022-08-25	t
297	3	3	151	2022-08-25	1	107.41	2022-08-25	t
298	3	3	152	2022-08-25	1	239.42	2022-08-25	t
299	3	3	153	2022-08-25	1	51.00	2022-08-25	t
300	3	3	154	2022-08-26	1	40.00	2022-08-26	t
301	3	3	155	2022-08-25	1	219.00	2022-08-26	t
302	3	3	156	2022-09-03	1	83.12	2022-09-05	t
303	3	3	157	2022-09-01	1	38.00	2022-09-05	t
304	3	3	158	2022-09-01	1	219.00	2022-09-05	t
305	3	3	159	2022-09-03	1	219.00	2022-09-05	t
306	3	3	160	2022-09-02	1	275.80	2022-09-05	t
308	3	3	162	2022-09-05	1	162.57	2022-09-05	t
309	3	3	162	2022-10-05	2	162.57	2022-09-05	t
310	3	3	163	2022-09-05	1	219.00	2022-09-05	t
311	3	3	164	2022-09-06	1	180.00	2022-09-07	t
312	3	3	165	2022-09-07	1	219.00	2022-09-07	t
313	3	3	166	2022-09-07	1	20.00	2022-09-07	t
314	3	3	167	2022-09-07	1	50.00	2022-09-07	t
315	3	3	168	2022-09-08	1	140.34	2022-09-08	t
316	3	3	169	2022-09-08	1	404.78	2022-09-08	t
318	3	3	171	2022-09-03	1	856.14	2022-09-09	t
319	3	3	172	2022-09-09	1	235.00	2022-09-09	t
320	3	3	173	2022-09-09	1	30.00	2022-09-09	t
321	3	3	174	2022-09-09	1	219.00	2022-09-10	t
322	3	3	175	2022-09-10	1	101.55	2022-09-10	t
323	3	3	176	2022-09-10	1	575.55	2022-09-10	t
324	3	3	177	2022-09-12	1	219.00	2022-09-12	t
325	3	3	178	2022-09-13	1	247.69	2022-09-13	t
326	3	3	178	2022-10-13	2	247.69	2022-09-13	t
327	3	3	178	2022-11-13	3	247.69	2022-09-13	t
328	3	3	179	2022-12-13	1	92.15	2022-12-13	t
329	3	3	180	2022-12-14	1	298.78	2022-12-14	t
330	3	3	181	2022-12-14	1	232.14	2022-12-14	t
331	3	3	182	2022-12-14	1	197.04	2022-12-14	t
332	3	3	183	2022-12-14	1	39.81	2022-12-14	t
333	3	3	184	2022-12-15	1	219.00	2022-12-15	t
334	3	3	185	2022-12-15	1	103.04	2022-12-15	t
335	3	3	186	2022-12-19	1	225.00	2022-12-20	t
336	3	3	187	2022-12-19	1	250.00	2022-12-20	t
337	3	3	188	2022-12-19	1	173.00	2022-12-20	t
\.


--
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuario (id, idconta, nome) FROM stdin;
1	1	usu├írio
2	2	Admin
3	3	Viena 
4	4	Arthur 
5	5	Ingrid
6	6	Raphael Buzon de Souza 
7	7	Renan Turati
8	8	Rinke
9	9	Igor
\.


--
-- Name: categoria_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categoria_id_seq', 5, true);


--
-- Name: conta_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.conta_id_seq', 9, true);


--
-- Name: lancamento_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lancamento_id_seq', 188, true);


--
-- Name: parcela_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.parcela_id_seq', 337, true);


--
-- Name: usuario_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuario_id_seq', 9, true);


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

