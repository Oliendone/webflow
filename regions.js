const regions = [
  {
    Antioquia: [
      "Medellín",
      "Abejorral",
      "Abriaquí",
      "Alejandría",
      "Amagá",
      "Amalfi",
      "Andes",
      "Angelópolis",
      "Angostura",
      "Anorí",
      "Fé De Antioquia",
      "Anzá",
      "Apartadó",
      "Arboletes",
      "Argelia",
      "Armenia",
      "Barbosa",
      "Belmira",
      "Bello",
      "Betania",
      "Betulia",
      "Ciudad Bolívar",
      "Briceño",
      "Buriticá",
      "Cáceres",
      "Caicedo",
      "Caldas",
      "Campamento",
      "Cañasgordas",
      "Caracolí",
      "Caramanta",
      "Carepa",
      "Carmen De Viboral",
      "Carolina",
      "Caucasia",
      "Chigorodó",
      "Cisneros",
      "Cocorná",
      "Concepción",
      "Concordia",
      "Copacabana",
      "Dabeiba",
      "Donmatías",
      "Ebéjico",
      "Bagre",
      "Entrerríos",
      "Envigado",
      "Fredonia",
      "Frontino",
      "Giraldo",
      "Girardota",
      "Plata",
      "Granada",
      "Guadalupe",
      "Guarne",
      "Guatapé",
      "Heliconia",
      "Hispania",
      "Itagüí",
      "Ituango",
      "Jardín",
      "Jericó",
      "Ceja",
      "Estrella",
      "Pintada",
      "Unión",
      "Liborina",
      "Maceo",
      "Marinilla",
      "Montebello",
      "Murindó",
      "Mutatá",
      "Nariño",
      "Necoclí",
      "Nechí",
      "Olaya",
      "Peñol",
      "Peque",
      "Pueblorrico",
      "Puerto Berrío",
      "Puerto Nare",
      "Puerto Triunfo",
      "Remedios",
      "Retiro",
      "Rionegro",
      "Sabanalarga",
      "Sabaneta",
      "Salgar",
      "Andrés De Cuerquía",
      "Carlos",
      "Francisco",
      "Jerónimo",
      "José De La Montaña",
      "Juan De Urabá",
      "Luis",
      "Pedro De Los Milagros",
      "Pedro De Urabá",
      "Rafael",
      "Roque",
      "Vicente Ferrer",
      "Bárbara",
      "Rosa De Osos",
      "Domingo",
      "Santuario",
      "Segovia",
      "Sonsón",
      "Sopetrán",
      "Támesis",
      "Tarazá",
      "Tarso",
      "Titiribí",
      "Toledo",
      "Turbo",
      "Uramita",
      "Urrao",
      "Valdivia",
      "Valparaíso",
      "Vegachí",
      "Venecia",
      "Del Fuerte",
      "Yalí",
      "Yarumal",
      "Yolombó",
      "Yondó",
      "Zaragoza",
    ],
  },

  {
    Atlántico: [
      "Barranquilla",
      "Baranoa",
      "Campo De La Cruz",
      "Candelaria",
      "Galapa",
      "Juan De Acosta",
      "Luruaco",
      "Malambo",
      "Manatí",
      "Palmar De Varela",
      "Piojó",
      "Polonuevo",
      "Ponedera",
      "Puerto Colombia",
      "Repelón",
      "Sabanagrande",
      "Sabanalarga",
      "Santa Lucía",
      "Santo Tomás",
      "Soledad",
      "Suan",
      "Tubará",
      "Usiacurí",
    ],
  },
  {
    Bogotá: ["Bogotá"],
  },
  {
    Bolívar: [
      "Cartagena De Indias",
      "Achí",
      "Altos Del Rosario",
      "Arenal",
      "Arjona",
      "Arroyohondo",
      "Barranco De Loba",
      "Calamar",
      "Cantagallo",
      "Cicuco",
      "Córdoba",
      "Clemencia",
      "El Carmen De Bolívar",
      "El Guamo",
      "El Peñón",
      "Hatillo De Loba",
      "Magangué",
      "Mahates",
      "Margarita",
      "María La Baja",
      "Montecristo",
      "Santa Cruz De Mompox",
      "Morales",
      "Norosí",
      "Pinillos",
      "Regidor",
      "Río Viejo",
      "San Cristóbal",
      "San Estanislao",
      "San Fernando",
      "San Jacinto",
      "San Jacinto Del Cauca",
      "San Juan Nepomuceno",
      "San Martín De Loba",
      "San Pablo",
      "Santa Catalina",
      "Santa Rosa",
      "Santa Rosa Del Sur",
      "Simití",
      "Soplaviento",
      "Talaigua Nuevo",
      "Tiquisio",
      "Turbaco",
      "Turbaná",
      "Villanueva",
      "Zambrano",
    ],
  },
  {
    Boyacá: [
      "      Tunja",
      "Almeida",
      "Aquitania",
      "Arcabuco",
      "Belén",
      "Berbeo",
      "Betéitiva",
      "Boavita",
      "Boyacá",
      "Briceño",
      "Buenavista",
      "Busbanzá",
      "Caldas",
      "Campohermoso",
      "Cerinza",
      "Chinavita",
      "Chiquinquirá",
      "Chiscas",
      "Chita",
      "Chitaraque",
      "Chivatá",
      "Ciénega",
      "Cómbita",
      "Coper",
      "Corrales",
      "Covarachía",
      "Cubará",
      "Cucaita",
      "Cuítiva",
      "Chíquiza",
      "Chivor",
      "Duitama",
      "El Cocuy",
      "El Espino",
      "Firavitoba",
      "Floresta",
      "Gachantivá",
      "Gámeza",
      "Garagoa",
      "Guacamayas",
      "Guateque",
      "Guayatá",
      "Güicán De La Sierra",
      "Iza",
      "Jenesano",
      "Jericó",
      "Labranzagrande",
      "La Capilla",
      "La Victoria",
      "La Uvita",
      "Villa De Leyva",
      "Macanal",
      "Maripí",
      "Miraflores",
      "Mongua",
      "Monguí",
      "Moniquirá",
      "Motavita",
      "Muzo",
      "Nobsa",
      "Nuevo Colón",
      "Oicatá",
      "Otanche",
      "Pachavita",
      "Páez",
      "Paipa",
      "Pajarito",
      "Panqueba",
      "Pauna",
      "Paya",
      "Paz De Río",
      "Pesca",
      "Pisba",
      "Puerto Boyacá",
      "Quípama",
      "Ramiriquí",
      "Ráquira",
      "Rondón",
      "Saboyá",
      "Sáchica",
      "Samacá",
      "San Eduardo",
      "San José De Pare",
      "San Luis De Gaceno",
      "San Mateo",
      "San Miguel De Sema",
      "San Pablo De Borbur",
      "Santana",
      "Santa María",
      "Santa Rosa De Viterbo",
      "Santa Sofía",
      "Sativanorte",
      "Sativasur",
      "Siachoque",
      "Soatá",
      "Socotá",
      "Socha",
      "Sogamoso",
      "Somondoco",
      "Sora",
      "Sotaquirá",
      "Soracá",
      "Susacón",
      "Sutamarchán",
      "Sutatenza",
      "Tasco",
      "Tenza",
      "Tibaná",
      "Tibasosa",
      "Tinjacá",
      "Tipacoque",
      "Toca",
      "Togüí",
      "Tópaga",
      "Tota",
      "Tununguá",
      "Turmequé",
      "Tuta",
      "Tutazá",
      "Úmbita",
      "Ventaquemada",
      "Viracachá",
      "Zetaquira",
    ],
  },
  {
    Caldas: [
      "Manizales",
      "Aguadas",
      "Anserma",
      "Aranzazu",
      "Belalcázar",
      "Chinchiná",
      "Filadelfia",
      "La Dorada",
      "La Merced",
      "Manzanares",
      "Marmato",
      "Marquetalia",
      "Marulanda",
      "Neira",
      "Norcasia",
      "Pácora",
      "Palestina",
      "Pensilvania",
      "Riosucio",
      "Risaralda",
      "Salamina",
      "Samaná",
      "San José",
      "Supía",
      "Victoria",
      "Villamaría",
      "Viterbo",
      "Manizales",
      "Aguadas",
      "Anserma",
      "Aranzazu",
      "Belalcázar",
      "Chinchiná",
      "Filadelfia",
      "La Dorada",
      "La Merced",
      "Manzanares",
      "Marmato",
      "Marquetalia",
      "Marulanda",
      "Neira",
      "Norcasia",
      "Pácora",
      "Palestina",
      "Pensilvania",
      "Riosucio",
      "Risaralda",
      "Salamina",
      "Samaná",
      "San José",
      "Supía",
      "Victoria",
      "Villamaría",
      "Viterbo",
    ],
  },
  {
    Caquetá: [
      "Florencia",
      "Albania",
      "Belén De Los Andaquíes",
      "Cartagena Del Chairá",
      "Curillo",
      "El Doncello",
      "El Paujíl",
      "La Montañita",
      "Milán",
      "Morelia",
      "Puerto Rico",
      "San José Del Fragua",
      "San Vicente Del Caguán",
      "Solano",
      "Solita",
      "Valparaíso",
    ],
  },
  {
    Cauca: [
      "Popayán",
      "Almaguer",
      "Argelia",
      "Balboa",
      "Bolívar",
      "Buenos Aires",
      "Cajibío",
      "Caldono",
      "Caloto",
      "Corinto",
      "El Tambo",
      "Florencia",
      "Guachené",
      "Guapi",
      "Inzá",
      "Jambaló",
      "La Sierra",
      "La Vega",
      "López De Micay",
      "Mercaderes",
      "Miranda",
      "Morales",
      "Padilla",
      "Páez",
      "Patía",
      "Piamonte",
      "Piendamó - Tunía",
      "Puerto Tejada",
      "Puracé",
      "Rosas",
      "San Sebastián",
      "Santander De Quilichao",
      "Santa Rosa",
      "Silvia",
      "Sotará Paispamba",
      "Suárez",
      "Sucre",
      "Timbío",
      "Timbiquí",
      "Toribío",
      "Totoró",
      "Villa Rica",
    ],
  },
  {
    Cesar: [
      "Valledupar",
      "Aguachica",
      "Agustín Codazzi",
      "Astrea",
      "Becerril",
      "Bosconia",
      "Chimichagua",
      "Chiriguaná",
      "Curumaní",
      "El Copey",
      "El Paso",
      "Gamarra",
      "González",
      "La Gloria",
      "La Jagua De Ibirico",
      "Manaure Balcón Del Cesar",
      "Pailitas",
      "Pelaya",
      "Pueblo Bello",
      "Río De Oro",
      "La Paz",
      "San Alberto",
      "San Diego",
      "San Martín",
      "Tamalameque",
    ],
  },
  {
    Córdoba: [
      "Montería",
      "Ayapel",
      "Buenavista",
      "Canalete",
      "Cereté",
      "Chimá",
      "Chinú",
      "Ciénaga De Oro",
      "Cotorra",
      "La Apartada",
      "Lorica",
      "Los Córdobas",
      "Momil",
      "Montelíbano",
      "Moñitos",
      "Planeta Rica",
      "Pueblo Nuevo",
      "Puerto Escondido",
      "Puerto Libertador",
      "Purísima De La Concepción",
      "Sahagún",
      "San Andrés De Sotavento",
      "San Antero",
      "San Bernardo Del Viento",
      "San Carlos",
      "San José De Uré",
      "San Pelayo",
      "Tierralta",
      "Tuchín",
      "Valencia",
    ],
  },
  {
    Cundinamarca: [
      "Agua De Dios",
      "Albán",
      "Anapoima",
      "Anolaima",
      "Arbeláez",
      "Beltrán",
      "Bituima",
      "Bojacá",
      "Cabrera",
      "Cachipay",
      "Cajicá",
      "Caparrapí",
      "Cáqueza",
      "Carmen De Carupa",
      "Chaguaní",
      "Chía",
      "Chipaque",
      "Choachí",
      "Chocontá",
      "Cogua",
      "Cota",
      "Cucunubá",
      "El Colegio",
      "El Peñón",
      "El Rosal",
      "Facatativá",
      "Fómeque",
      "Fosca",
      "Funza",
      "Fúquene",
      "Fusagasugá",
      "Gachalá",
      "Gachancipá",
      "Gachetá",
      "Gama",
      "Girardot",
      "Granada",
      "Guachetá",
      "Guaduas",
      "Guasca",
      "Guataquí",
      "Guatavita",
      "Guayabal De Síquima",
      "Guayabetal",
      "Gutiérrez",
      "Jerusalén",
      "Junín",
      "La Calera",
      "La Mesa",
      "La Palma",
      "La Peña",
      "La Vega",
      "Lenguazaque",
      "Machetá",
      "Madrid",
      "Manta",
      "Medina",
      "Mosquera",
      "Nariño",
      "Nemocón",
      "Nilo",
      "Nimaima",
      "Nocaima",
      "Venecia",
      "Pacho",
      "Paime",
      "Pandi",
      "Paratebueno",
      "Pasca",
      "Puerto Salgar",
      "Pulí",
      "Quebradanegra",
      "Quetame",
      "Quipile",
      "Apulo",
      "Ricaurte",
      "San Antonio Del Tequendama",
      "San Bernardo",
      "San Cayetano",
      "San Francisco",
      "San Juan De Rioseco",
      "Sasaima",
      "Sesquilé",
      "Sibaté",
      "Silvania",
      "Simijaca",
      "Soacha",
      "Sopó",
      "Subachoque",
      "Suesca",
      "Supatá",
      "Susa",
      "Sutatausa",
      "Tabio",
      "Tausa",
      "Tena",
      "Tenjo",
      "Tibacuy",
      "Tibirita",
      "Tocaima",
      "Tocancipá",
      "Topaipí",
      "Ubalá",
      "Ubaque",
      "Villa De San Diego De Ubaté",
      "Une",
      "Útica",
      "Vergara",
      "Vianí",
      "Villagómez",
      "Villapinzón",
      "Villeta",
      "Viotá",
      "Yacopí",
      "Zipacón",
      "Zipaquirá",
    ],
  },
  {
    Chocó: [
      "Quibdó",
      "Acandí",
      "Alto Baudó",
      "Atrato",
      "Bagadó",
      "Bahía Solano",
      "Bajo Baudó",
      "Bojayá",
      "El Cantón Del San Pablo",
      "Carmen Del Darién",
      "Cértegui",
      "Condoto",
      "El Carmen De Atrato",
      "El Litoral Del San Juan",
      "Istmina",
      "Juradó",
      "Lloró",
      "Medio Atrato",
      "Medio Baudó",
      "Medio San Juan",
      "Nóvita",
      "Nuquí",
      "Río Iró",
      "Río Quito",
      "Riosucio",
      "San José Del Palmar",
      "Sipí",
      "Tadó",
      "Unguía",
      "Unión Panamericana",
    ],
  },
  {
    Huila: [
      "Neiva",
      "Acevedo",
      "Agrado",
      "Aipe",
      "Algeciras",
      "Altamira",
      "Baraya",
      "Campoalegre",
      "Colombia",
      "Elías",
      "Garzón",
      "Gigante",
      "Guadalupe",
      "Hobo",
      "Íquira",
      "Isnos",
      "La Argentina",
      "La Plata",
      "Nátaga",
      "Oporapa",
      "Paicol",
      "Palermo",
      "Palestina",
      "Pital",
      "Pitalito",
      "Rivera",
      "Saladoblanco",
      "San Agustín",
      "Santa María",
      "Suaza",
      "Tarqui",
      "Tesalia",
      "Tello",
      "Teruel",
      "Timaná",
      "Villavieja",
      "Yaguará",
    ],
  },
  {
    laguajira: [
      "Riohacha",
      "Albania",
      "Barrancas",
      "Dibulla",
      "Distracción",
      "El Molino",
      "Fonseca",
      "Hatonuevo",
      "La Jagua Del Pilar",
      "Maicao",
      "Manaure",
      "San Juan Del Cesar",
      "Uribia",
      "Urumita",
      "Villanueva",
    ],
  },
  {
    Magdalena: [
      "Santa Marta",
      "Algarrobo",
      "Aracataca",
      "Ariguaní",
      "Cerro De San Antonio",
      "Chivolo",
      "Ciénaga",
      "Concordia",
      "El Banco",
      "El Piñón",
      "El Retén",
      "Fundación",
      "Guamal",
      "Nueva Granada",
      "Pedraza",
      "Pijiño Del Carmen",
      "Pivijay",
      "Plato",
      "Puebloviejo",
      "Remolino",
      "Sabanas De San Ángel",
      "Salamina",
      "San Sebastián De Buenavista",
      "San Zenón",
      "Santa Ana",
      "Santa Bárbara De Pinto",
      "Sitionuevo",
      "Tenerife",
      "Zapayán",
      "Zona Bananera",
    ],
  },
  {
    Meta: [
      "Villavicencio",
      "Acacías",
      "Barranca De Upía",
      "Cabuyaro",
      "Castilla La Nueva",
      "Cubarral",
      "Cumaral",
      "El Calvario",
      "El Castillo",
      "El Dorado",
      "Fuente De Oro",
      "Granada",
      "Guamal",
      "Mapiripán",
      "Mesetas",
      "La Macarena",
      "Uribe",
      "Lejanías",
      "Puerto Concordia",
      "Puerto Gaitán",
      "Puerto López",
      "Puerto Lleras",
      "Puerto Rico",
      "Restrepo",
      "San Carlos De Guaroa",
      "San Juan De Arama",
      "San Juanito",
      "San Martín",
      "Vistahermosa",
    ],
  },
  {
    Nariño: [
      "Pasto",
      "Albán",
      "Aldana",
      "Ancuya",
      "Arboleda",
      "Barbacoas",
      "Belén",
      "Buesaco",
      "Colón",
      "Consacá",
      "Contadero",
      "Córdoba",
      "Cuaspud Carlosama",
      "Cumbal",
      "Cumbitara",
      "Chachagüí",
      "El Charco",
      "El Peñol",
      "El Rosario",
      "El Tablón De Gómez",
      "El Tambo",
      "Funes",
      "Guachucal",
      "Guaitarilla",
      "Gualmatán",
      "Iles",
      "Imués",
      "Ipiales",
      "La Cruz",
      "La Florida",
      "La Llanada",
      "La Tola",
      "La Unión",
      "Leiva",
      "Linares",
      "Los Andes",
      "Magüí",
      "Mallama",
      "Mosquera",
      "Nariño",
      "Olaya Herrera",
      "Ospina",
      "Francisco Pizarro",
      "Policarpa",
      "Potosí",
      "Providencia",
      "Puerres",
      "Pupiales",
      "Ricaurte",
      "Roberto Payán",
      "Samaniego",
      "Sandoná",
      "San Bernardo",
      "San Lorenzo",
      "San Pablo",
      "San Pedro De Cartago",
      "Santa Bárbara",
      "Santacruz",
      "Sapuyes",
      "Taminango",
      "Tangua",
      "San Andrés De Tumaco",
      "Túquerres",
      "Yacuanquer",
    ],
  },
  {
    nortedesantander: [
      "San José De Cúcuta",
      "Ábrego",
      "Arboledas",
      "Bochalema",
      "Bucarasica",
      "Cácota",
      "Cáchira",
      "Chinácota",
      "Chitagá",
      "Convención",
      "Cucutilla",
      "Durania",
      "El Carmen",
      "El Tarra",
      "El Zulia",
      "Gramalote",
      "Hacarí",
      "Herrán",
      "Labateca",
      "La Esperanza",
      "La Playa",
      "Los Patios",
      "Lourdes",
      "Mutiscua",
      "Ocaña",
      "Pamplona",
      "Pamplonita",
      "Puerto Santander",
      "Ragonvalia",
      "Salazar",
      "San Calixto",
      "San Cayetano",
      "Santiago",
      "Sardinata",
      "Silos",
      "Teorama",
      "Tibú",
      "Toledo",
      "Villa Caro",
      "Villa Del Rosario",
    ],
  },
  {
    Quindío: [
      "Armenia",
      "Buenavista",
      "Calarcá",
      "Circasia",
      "Córdoba",
      "Filandia",
      "Génova",
      "La Tebaida",
      "Montenegro",
      "Pijao",
      "Quimbaya",
      "Salento",
    ],
  },
  {
    Risaralda: [
      "Pereira",
      "Apía",
      "Balboa",
      "Belén De Umbría",
      "Dosquebradas",
      "Guática",
      "La Celia",
      "La Virginia",
      "Marsella",
      "Mistrató",
      "Pueblo Rico",
      "Quinchía",
      "Santa Rosa De Cabal",
      "Santuario",
    ],
  },
  {
    Santander: [
      "Bucaramanga",
      "Aguada",
      "Albania",
      "Aratoca",
      "Barbosa",
      "Barichara",
      "Barrancabermeja",
      "Betulia",
      "Bolívar",
      "Cabrera",
      "California",
      "Capitanejo",
      "Carcasí",
      "Cepitá",
      "Cerrito",
      "Charalá",
      "Charta",
      "Chima",
      "Chipatá",
      "Cimitarra",
      "Concepción",
      "Confines",
      "Contratación",
      "Coromoro",
      "Curití",
      "El Carmen De Chucurí",
      "El Guacamayo",
      "El Peñón",
      "El Playón",
      "Encino",
      "Enciso",
      "Florián",
      "Floridablanca",
      "Galán",
      "Gámbita",
      "Girón",
      "Guaca",
      "Guadalupe",
      "Guapotá",
      "Guavatá",
      "Güepsa",
      "Hato",
      "Jesús María",
      "Jordán",
      "La Belleza",
      "Landázuri",
      "La Paz",
      "Lebrija",
      "Los Santos",
      "Macaravita",
      "Málaga",
      "Matanza",
      "Mogotes",
      "Molagavita",
      "Ocamonte",
      "Oiba",
      "Onzaga",
      "Palmar",
      "Palmas Del Socorro",
      "Páramo",
      "Piedecuesta",
      "Pinchote",
      "Puente Nacional",
      "Puerto Parra",
      "Puerto Wilches",
      "Rionegro",
      "Sabana De Torres",
      "San Andrés",
      "San Benito",
      "San Gil",
      "San Joaquín",
      "San José De Miranda",
      "San Miguel",
      "San Vicente De Chucurí",
      "Santa Bárbara",
      "Santa Helena Del Opón",
      "Simacota",
      "Socorro",
      "Suaita",
      "Sucre",
      "Suratá",
      "Tona",
      "Valle De San José",
      "Vélez",
      "Vetas",
      "Villanueva",
      "Zapatoca",
    ],
  },
  {
    Sucre: [
      "Sincelejo",
      "Buenavista",
      "Caimito",
      "Colosó",
      "Corozal",
      "Coveñas",
      "Chalán",
      "El Roble",
      "Galeras",
      "Guaranda",
      "La Unión",
      "Los Palmitos",
      "Majagual",
      "Morroa",
      "Ovejas",
      "Palmito",
      "Sampués",
      "San Benito Abad",
      "San Juan De Betulia",
      "San Marcos",
      "San Onofre",
      "San Pedro",
      "San Luis De Sincé",
      "Sucre",
      "Santiago De Tolú",
      "San José De Toluviejo",
    ],
  },
  {
    Tolima: [
      "Ibagué",
      "Alpujarra",
      "Alvarado",
      "Ambalema",
      "Anzoátegui",
      "Armero",
      "Ataco",
      "Cajamarca",
      "Carmen De Apicalá",
      "Casabianca",
      "Chaparral",
      "Coello",
      "Coyaima",
      "Cunday",
      "Dolores",
      "Espinal",
      "Falan",
      "Flandes",
      "Fresno",
      "Guamo",
      "Herveo",
      "Honda",
      "Icononzo",
      "Lérida",
      "Líbano",
      "San Sebastián De Mariquita",
      "Melgar",
      "Murillo",
      "Natagaima",
      "Ortega",
      "Palocabildo",
      "Piedras",
      "Planadas",
      "Prado",
      "Purificación",
      "Rioblanco",
      "Roncesvalles",
      "Rovira",
      "Saldaña",
      "San Antonio",
      "San Luis",
      "Santa Isabel",
      "Suárez",
      "Valle De San Juan",
      "Venadillo",
      "Villahermosa",
      "Villarrica",
    ],
  },
  {
    valledelcauca: [
      "Cali",
      "Alcalá",
      "Andalucía",
      "Ansermanuevo",
      "Argelia",
      "Bolívar",
      "Buenaventura",
      "Guadalajara De Buga",
      "Bugalagrande",
      "Caicedonia",
      "Calima",
      "Candelaria",
      "Cartago",
      "Dagua",
      "El Águila",
      "El Cairo",
      "El Cerrito",
      "El Dovio",
      "Florida",
      "Ginebra",
      "Guacarí",
      "Jamundí",
      "La Cumbre",
      "La Unión",
      "La Victoria",
      "Obando",
      "Palmira",
      "Pradera",
      "Restrepo",
      "Riofrío",
      "Roldanillo",
      "San Pedro",
      "Sevilla",
      "Toro",
      "Trujillo",
      "Tuluá",
      "Ulloa",
      "Versalles",
      "Vijes",
      "Yotoco",
      "Yumbo",
      "Zarzal",
    ],
  },
  {
    Arauca: [
      "Arauca",
      "Arauquita",
      "Cravo Norte",
      "Fortul",
      "Puerto Rondón",
      "Saravena",
      "Tame",
    ],
  },
  {
    Casanare: [
      "Yopal",
      "Aguazul",
      "Chámeza",
      "Hato Corozal",
      "La Salina",
      "Maní",
      "Monterrey",
      "Nunchía",
      "Orocué",
      "Paz De Ariporo",
      "Pore",
      "Recetor",
      "Sabanalarga",
      "Sácama",
      "San Luis De Palenque",
      "Támara",
      "Tauramena",
      "Trinidad",
      "Villanueva",
    ],
  },
  {
    Putumayo: [
      "Mocoa",
      "Colón",
      "Orito",
      "Puerto Asís",
      "Puerto Caicedo",
      "Puerto Guzmán",
      "Puerto Leguízamo",
      "Sibundoy",
      "San Francisco",
      "San Miguel",
      "Santiago",
      "Valle Del Guamuez",
      "Villagarzón",
    ],
  },
  {
    archipiélagodesanandrés: ["San Andrés", "Providencia"],
  },
  {
    Amazonas: [
      "Leticia",
      "El Encanto",
      "La Chorrera",
      "La Pedrera",
      "La Victoria",
      "Mirití - Paraná",
      "Puerto Alegría",
      "Puerto Arica",
      "Puerto Nariño",
      "Puerto Santander",
      "Tarapacá",
    ],
  },
  {
    Guainía: [
      "Inírida",
      "Barrancominas",
      "San Felipe",
      "Puerto Colombia",
      "La Guadalupe",
      "Cacahual",
      "Pana Pana",
      "Morichal",
    ],
  },
  {
    Guaviare: ["San José Del Guaviare", "Calamar", "El Retorno", "Miraflores"],
  },
  {
    Vaupés: ["Mitú", "Carurú", "Pacoa", "Taraira", "Papunahua", "Yavaraté"],
  },
  {
    Vichada: ["Puerto Carreño", "La Primavera", "Santa Rosalía", "Cumaribo"],
  },
];
