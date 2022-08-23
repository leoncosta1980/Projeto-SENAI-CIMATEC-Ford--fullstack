class Tabelas{
  init(conexao){
    console.log('Tabelas foram chamadas')
    this.conexao = conexao
    this.criarUsuario()
    this.criarVeiculo()
    this.criarModelo()
  }
  criarUsuario() {
    const sql = 'CREATE TABLE IF NOT EXISTS user(user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, user_name VARCHAR(45), user_email VARCHAR(45), password VARCHAR(45), user_fullName VARCHAR(45), register_data VARCHAR(10))';
    this.conexao.query(sql, (erro)=>{
      if(erro){
        console.log(erro)
      }else{
        console.log('Tabela user criada com sucesso')
      }
    })
  }

  criarVeiculo(){
    const sql = 'CREATE TABLE IF NOT EXISTS vehicle_data(id_vehicle INT NOT NULL AUTO_INCREMENT PRIMARY KEY, vehicle_vin VARCHAR(45), odometer INT(45), tire_Pressure VARCHAR(45), vehicle_status VARCHAR(45), battery_status VARCHAR(45), fuel_level VARCHAR(45), latitude VARCHAR(45), longitude VARCHAR(45))';
    this.conexao.query(sql, (erro)=>{
      if(erro){
        console.log(erro)
      }else{
        console.log('Tabela vehicle_data criada com sucesso')
      }
    })
  }

  criarModelo(){
    const sql = 'CREATE TABLE IF NOT EXISTS vehicle_model(id_vehicle_Model INT NOT NULL AUTO_INCREMENT PRIMARY KEY, vehicle_Model VARCHAR(45), vehicle_Sales INT(45), vehicle_Connected INT(45), vehicle_SoftwareUpdate INT(45))';
    this.conexao.query(sql, (erro)=>{
      if(erro){
        console.log(erro)
      }else{
        console.log('Tabela vehicle_model criada com sucesso')
      }
    })
  }
}


module.exports = new Tabelas
