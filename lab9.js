conn = new Mongo();
db = conn.getDB("Lab09");

db.Mascotas.insert(
  [
   {_id: 1,nombre: 'Boby', tipo: 'Perro', genero: 'M', fecha_nacimiento: new Date('01/23/2013')},
   {_id: 2,nombre: 'Keyla', tipo: 'Gato', genero: 'H', fecha_nacimiento: new Date('09/12/2015')},
   {_id: 3,nombre: 'Lasie', tipo: 'Perro', genero: 'H', fecha_nacimiento: new Date('08/31/2012')},
   {_id: 4,nombre: 'Feli', tipo: 'Gato', genero: 'M', fecha_nacimiento: new Date('10/15/2011')},
   {_id: 5,nombre: 'Lucas', tipo: 'Perro', genero: 'M', fecha_nacimiento: new Date('04/13/2014')},
   {_id: 6,nombre: 'Messi', tipo: 'Gato', genero: 'M', fecha_nacimiento: new Date('09/12/2015')},
   {_id: 7,nombre: 'Nana', tipo: 'Perro', genero: 'H', fecha_nacimiento: new Date('02/18/2015')},
   {_id: 8,nombre: 'Pepa', tipo: 'Loro', genero: 'H', fecha_nacimiento: new Date('11/27/2015')}
 ]);

db.Cargos.insert(
  [
   {_id: 1,nombre: 'Administrador', sueldo: 9000},
   {_id: 2,nombre: 'Contador', sueldo: 8500},
   {_id: 3,nombre: 'Gerente', sueldo: 13000},
   {_id: 4,nombre: 'Supervisor', sueldo: 11000},
   {_id: 5,nombre: 'Ingeniero', sueldo: 10500},
   {_id: 6,nombre: 'Tecnico', sueldo: 5000},
   {_id: 7,nombre: 'Secretaria', sueldo: 4000},
   {_id: 8,nombre: 'Practicante', sueldo: 1200},
   {_id: 9,nombre: 'Capataz', sueldo: 3500}
 ]);
