const pg=require('pg')

class pool {

  _pool=null;

 connect(options){
    this._pool=pool.pg.Pool(options)
 }

 
 close(){
    return this._pool.end();
   } 

   
 query(sql,params){
 return this._pool.query(sql,params)
 }

}

module.exports=new pool