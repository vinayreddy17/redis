module.exports= {
    HOST:'localhost',
    USER:'root',
    PASSWORD:'wdravi',
    DB:'db3',
    dialect:'mysql',
    
    pool:{
        max:50,
        min:0,
        acquire:30000,
        idle:10000,
    
    }
    }
    