const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');


Database.then(async db => {
    // inserir dados na tabela 
    await saveOrphanage(db, {
        lat: "-19.8684953",
        lng: "-43.8534229",
        name: "Instituto Sem Jerônimo",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "+55 (31) 99876-5481",
        images: [
            "https://images.unsplash.com/photo-1576043005963-f4b2a8d1195d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1576043061888-8751653f46af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 18h até 8h.",
        open_on_weekends: "0"
    }) 

    // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

   // consultar somente 1 orphanato, pelo ID
 //  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"') 
 //  console.log(orphanage)

   // deletar dado da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '2'"))
   // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
})