const pg=require('pg')



class Poll {
    _pool=null;


    connect(options){
      this._pool=new pg.Pool(options);
      return  this._pool.query('SELECT 1=1')  
    }

    close (){
      return this._pool.end();
    }

    query(sql,params){
      return this._pool.query(sql,params)
    }
}

module.exports=new Poll