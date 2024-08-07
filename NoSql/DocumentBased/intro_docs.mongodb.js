use('fiapclasss')

db.createCollection("biblioteca")
db.createCollection("intro")

db.getCollectionNames();
// or 
// show collections;

// database.coleção.função() funcao -> crud

// Create
// db.coleção.insert(
//     <documento ou array de documentos>,
//     {
//       writeConcern: <documento>,
//       ordered: <boolean>
//     }
//  )

db.intro.insert({
    Name: 'Bianka',
    Age: 22,
    Occupation: 'Developer',
    Salary: 12000.00
})

db.intro.insert(
    {
        Name: "Neusa",
        Age: 23,
        Occupation: 'Desenvolvedor',
        Salary: 12830.26,
        Dependents: ["Maria", 'Pietra']
    }
)

db.intro.insert(
    {
        Name: 'Thais',
        Idade: 19,
        Occupation: 'Analyst',
        Salary: 14530.77,
        Dependents: ['Angela', 'Dora', 'Hugo'],
        Department: {
            Name: 'Research',
            Locale: 'São Paulo'
        }
    }
)

db.intro.insert(
    {
        Name: 'Fátima',
        Idade: 29,
        Occupation: 'Analyst',
        Salary: 15682.77,
        Dependents: ['Gohan'],
        Department: {
            Name: 'Sales',
            Locale: 'Campinas'
        },
        Promotions: [
            {
                Year: 2001,
                Occupation: 'Intern',
                Salary: 180.00,
            },
            {
                Year: 2002,
                Occupation: 'Analyst',
                Salary: 1800.00,
            },
        ]
    }
)

// using variables to create documents

var dados = [
    {
        Nome: 'Estruturas de dados',
        Autor: 'Rossetti',
        Novo: false,
        ISBN: 12345678,
        Valor: 171.13
    },
    {
        Nome: 'Engenharia de software',
        Professor: 'Rita',
        Cod: 'FES', Mes: 2
    },
    {
        Nome: 'Inglês instrumental',
        Autor: 'Ana',
        Novo: false,
        ISBN: 45678901,
        Valor: 122.99
    },
    {
        Nome: 'Interfaces com usuário',
        Professor: 'André',
        Cod: 'IU',
        Mes: 2
    },
    {
        Nome: 'Programação orientada a objeto',
        Autor: 'Gatti',
        Novo: true,
        ISBN: 23456789,
        Valor: 161.16
    },
    {
        Nome: 'Modelagem orientada a objeto',
        Professor: 'Rodrigo',
        Cod: 'MOO1',
        Mes: 2
    },
    {
        Nome: 'Banco de dados',
        Autor: 'Angélica',
        Novo: true,
        ISBN: 34567890,
        Valor: 133.29
    },

    {
        Nome: 'Gestão empresarial',
        Autor: ' Silva',
        Professor: 'Silva',
        Novo: true,
        Cod: 'GE',
        Mes: 2,
        ISBN: 56789012, Valor: 156.55
    }
]

db.grade.insert(dados);

db.grade.find();

// Read
// db.coleção.find(consulta, projeção)

// all docs matching the filter
db.intro.find()


// first doc matching the filter
db.intro.findOne()

// get created at by object id (doc id)
ObjectId('66b2ba22d270b4bc90677f61').getTimestamp();

// Sorting
db.intro.find().sort({ Name: 1 });
db.intro.find().sort({ Age: -1 });
db.intro.find().sort({ Occupation: 1, Age: -1 });

// filter

db.intro.find({ Idade: 19 });

// all docs matching the filter
// salaries above 1400000
db.intro.find({ Salary: { $gt: 14000.00 } })

var filters = {
    // less, greater, than, equal
    $lt: '<',
    $lte: '<=',
    $gt: '>',
    $gte: '>=',
};

var logiical_operators = {
    // less, greater, than, equal
    $or: 'OR',
    $and: 'AND - not necessary to use $and',
    $nor: 'NOR',
    $ne: 'Not equal ',
};

// Array Filtering

db.intro.find({ Dependents: { $in: ["Rosa", "Hugo"] } });
db.intro.find({ Dependents: { $nin: ["Rosa", "Rita"] } });
db.intro.find({ Dependents: { $all: ["Rita", "Ana"] } });

db.intro.find({ Dependents: { $exists: true } })
ou
db.intro.find({ Dependents: { $exists: false } }).count()

var array_fiters = {
    $in: 'all that matches a value from the given array',
    $nin: 'all that does not have a value from the given array (returns also docs that doesnt have the array property)',
    $all: 'all that matches all values from the given array',
    $exists: 'Property exists (not only for arrays) ',
};

// Projection

// show all docs with age 22, excluding age, id and occupation
db.intro.find({ Age: 22 }, { _id: 0, Age: 0, Occupation: 0 });

// show all docs  including only Name and Occupation. I had to remove id mannually
db.intro.find({}, { Name: 1, Occupation: 1, _id: 0 });

// regex
// {<campo>: { $regex: /padrão/, $options: '<opções>' } }
// {<campo>: { $regex: 'padrão', $options: '<opções>' } }
// {<campo>: { $regex: /padrão/<opções> } }
// OU
// { <campo>: /padrão/<opções> }

// Update
// db.coleção.update(consulta, atualização, opções)
/*
Coleção - Indica o nome da coleção.

Consulta - Indica quais serão os critérios para pesquisar o documento que será alterado.

Atualização - Indica a modificação que será feita.

Opções - Indica quais são as opções para o comando. Entre as opções estão:
    . upsert - Opcional. Se definido como true, cria um novo documento, caso nenhum documento atenda os critérios de busca. O padrão é false.

    . multi - Opcional. Se definido como true, atualiza todos os documentos que atendam os critérios de busca. O padrão é false.
*/

db.paises.find();
db.paises.insert({ _id: 504, Pais: "Mauritânia", Capital: "Nouakchott" });
db.paises.find();
db.paises.update({ _id: 504 }, { Pais: "Honduras", Capital: "Tegucigalpa" });

// INSERT AND UPDATE LIKE THIS ARE DEPRECATED, USE ONE, MANY OR BULK

var update_field_operators = {
    $inc: 'increases value of field by the given value',
    $set: 'modifies the value, if field does not exist, creates it',
    $rename: 'rename field',
    $unset: 'removes field',
};

// Delete

// db.coleção.remove(consulta,{justOne:<boolean>})
/*
Coleção - Indica o nome da coleção.

Consulta - Indica quais serão os critérios para pesquisar o documento que será removido.

justOne - Indica que apenas um documento será removido.

Se todos os documentos forem eliminados, mesmo assim, a coleção continuará existindo. Caso queira eliminar a coleção use o método drop();
*/
db.apaga.insertMany(
    [
        { cod: 7369, nome: "Maria", cargo: "DBA" }, 
        { cod: 7499, nome: "Rosa", cargo: "DBA" },
        { cod: 7521, nome: "Ana", cargo: "DBA" },
        { cod: 7566, nome: "Rita", cargo: "DBA" },
    ],
)
db.apaga.find();
db.apaga.remove({ cod: { $gt: 7521 } });
db.apaga.find();
db.apaga.remove({ cargo: "DBA" }, true);
db.apaga.find();
db.apaga.remove({});
db.apaga.find();
db.getCollectionNames();
db.apaga.drop();
db.getCollectionNames();


// get dabases
db.getMongo().getDBs();
